import React, {useEffect, useState} from 'react';
import {Post} from '@components/Post';
import {connect} from 'react-redux';
import {getComments, clearStore} from '@action/commentsAction';
import useLoadMore from '@hooks/useLoadMore';

const PostScreen = props => {
  const formatAnswerComment = text => {
    var re1 = /\[id\d+\|/;
    var re2 = /\[id\d+\|[A-zА-яё]+/i;
    const str = text.split(',')[0];
    var newstr = str.replace(re1, '').replace(/\]/, '');
    newstr = text.replace(re2, newstr);
    return newstr;
  };

  const comments = props.commentsData.comments.response?.items;
  const profileComments = props.commentsData.comments.response?.profiles;
  const groupsComments = props.commentsData.comments.response?.groups;

  // возвращает объект одного комментария
  const filterItemComment = comment => {
    const obj = {
      idComment: 0,
      nameOwnerComment: '',
      avaOwnerComment: '',
      textComment: '',
      dateComment: '',
      countLikes: 0,
      imageComment: [],
    };

    obj.idComment = comment.id;

    if (comment.from_id > 0) {
      const commentObject = profileComments.find(
        profile => profile.id == comment.from_id,
      );

      if (commentObject) {
        obj.nameOwnerComment =
          commentObject.first_name + ' ' + commentObject.last_name;

        obj.avaOwnerComment = commentObject.photo_100;
      }
    } else {
      const commentObject = groupsComments.find(
        group => group.id == Math.abs(comment.from_id),
      );

      if (commentObject) {
        obj.nameOwnerComment = commentObject.name;
        obj.avaOwnerComment = commentObject.photo_100;
      }
    }

    // если это ответ на коммент, форматируем имя в начале
    obj.textComment =
      comment.parents_stack.length == 0
        ? comment.text
        : formatAnswerComment(comment.text);
    obj.dateComment = new Date(comment.date * 1000).toLocaleString();
    obj.countLikes = comment.likes?.count;

    if (comment.attachments) {
      const photos = comment.attachments.filter(
        attachment => attachment.type === 'photo',
      );
      if (photos) {
        obj.imageComment = photos.map(
          photo => photo.photo.sizes[photo.photo.sizes.length - 1].url,
        );
      }

      if (comment.attachments[0].type === 'sticker') {
        obj.imageComment.push(comment.attachments[0].sticker.images[1].url);
      }
    }

    return obj;
  };

  // главная функция фильтра комментов
  const filterComments = () => {
    if (props.commentsData.isFetching)
      return {
        isFetching: true,
        error: '',
        allComments: [],
      };

    if (props.commentsData.error)
      return {
        isFetching: false,
        error: props.commentsData.error,
        allComments: [],
      };

    allComments = [];

    comments.map(comment => {
      if (comment.from_id == 0) return;
      const obj = filterItemComment(comment);

      objCom = {
        ...obj,
        answerComments: [],
      };

      if (comment.thread.count > 0) {
        objCom.answerComments = comment.thread.items.map(item => {
          const obj1 = filterItemComment(item);
          return obj1;
        });
      }
      return allComments.push(objCom);
    });

    setCountPages(
      Math.ceil(props.commentsData.comments.response?.current_level_count / 20),
    );
    console.log(
      'Колво: ' + props.commentsData.comments.response?.current_level_count,
    );
    console.log('В текущий момент: ' + allComments.length);
    setLastComment(allComments.length > 19 ? allComments.pop().idComment : '');

    return {
      isFetching: props.commentsData.isFetching,
      error: props.commentsData.error,
      allComments: allComments,
    };
  };

  // отправка запроса

  const [dataComments, setDataComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countPages, setCountPages] = useState(1);
  const [page, setPage] = useState(1);
  const [lastComment, setLastComment] = useState('');

  useEffect(() => {
    const commentsInfo = filterComments();
    if (!commentsInfo.isFetching) {
      setDataComments(dataComments.concat(commentsInfo.allComments));
      setIsLoading(false);
    }
  }, [props.commentsData]);

  useEffect(() => {
    setIsLoading(true);
    const dataForRequest = {
      ownerId: props.route.params.sourceId,
      postId: props.route.params.newsId,
      startCommentId: '',
    };
    props.getComments(dataForRequest);
    return () => {
      props.clearStore();
    };
  }, []);

  const handleLoadMore = () => {
    console.log('countPages: ' + countPages);
    console.log('page: ' + page);
    if (countPages > page) {
      setIsLoading(true);
      setPage(page + 1);
      const dataForRequest = {
        ownerId: props.route.params.sourceId,
        postId: props.route.params.newsId,
        startCommentId: lastComment,
      };
      console.log(dataForRequest);
      props.getComments(dataForRequest);
    }
  };

  return (
    <Post
      navigation={props.navigation}
      postItem={props.route.params}
      comments={dataComments}
      isLoading={isLoading}
      handleLoadMore={() => handleLoadMore()}
    />
  );
};

const mapStateToProps = store => {
  return {
    commentsData: store.getCommentsReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getComments: dataForRequest => dispatch(getComments(dataForRequest)),
    clearStore: () => dispatch(clearStore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
