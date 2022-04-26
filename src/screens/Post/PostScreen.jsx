import React, {useEffect, useState} from 'react';
import {Post} from '@components/Post';
import {connect} from 'react-redux';
import {getComments, clearStore} from '@action/commentsAction';

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
    } else if (comment.from_id == 0) {
      obj.nameOwnerComment = 'Пользователь удален';
      obj.avaOwnerComment = 'https://via.placeholder.com/100';
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
    if (comment.text) {
    }
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
    // console.log(allComments[allComments.length - 1].idComment);
    const nextValue = allComments[allComments.length - 1].idComment;
    setLastComment(allComments.length > 19 ? allComments.pop().idComment : '');

    return {
      isFetching: props.commentsData.isFetching,
      error: props.commentsData.error,
      allComments: allComments,
      nextValue: nextValue,
    };
  };

  // ЗАГРУЗКА ДАННЫХ

  const [dataComments, setDataComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countPages, setCountPages] = useState(1);
  const [page, setPage] = useState(1);
  const [lastComment, setLastComment] = useState('');

  // тригерится на изменения данных в строре
  useEffect(() => {
    const commentsInfo = filterComments();
    console.log(commentsInfo.isFetching);
    if (!commentsInfo.isFetching) {
      setDataComments(dataComments.concat(commentsInfo.allComments));
      setIsLoading(false);
    }
  }, [props.commentsData.comments]);

  // перввый рендер
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

  // подгрузить следующие комментарии
  const handleLoadMore = () => {
    if (countPages > page) {
      setIsLoading(true);
      setPage(page + 1);
      const dataForRequest = {
        ownerId: props.route.params.sourceId,
        postId: props.route.params.newsId,
        startCommentId: lastComment,
      };
      props.getComments(dataForRequest);
    }
  };

  // загрузить все комментарии

  const [showAllComments, setShowAllComments] = useState(false);

  useEffect(() => {
    if (
      countPages > page &&
      showAllComments &&
      !props.commentsData.isFetching
    ) {
      console.log('countPages: ' + countPages);
      console.log('page: ' + page);
      console.log('Я гей: ' + lastComment);
      setIsLoading(true);
      setPage(page + 1);
      const dataForRequest = {
        ownerId: props.route.params.sourceId,
        postId: props.route.params.newsId,
        startCommentId: filterComments().nextValue,
      };
      props.getComments(dataForRequest);
    } else {
      // setIsLoading(false);
    }
  });

  const handleLoadAllComments = () => {
    setShowAllComments(true);
  };

  return (
    <Post
      navigation={props.navigation}
      postItem={props.route.params}
      comments={dataComments}
      isLoading={isLoading}
      handleLoadMore={() => handleLoadMore()}
      infoLikePost={props.infoLikePost}
      handleLoadAllComments={handleLoadAllComments}
    />
  );
};

const mapStateToProps = store => {
  return {
    commentsData: store.getCommentsReducer,
    infoLikePost: store.getCountLikeReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getComments: dataForRequest => dispatch(getComments(dataForRequest)),
    clearStore: () => dispatch(clearStore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
