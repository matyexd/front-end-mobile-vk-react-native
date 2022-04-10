import React from 'react';
import {Post} from '@components/Post';
import {connect} from 'react-redux';

const PostScreen = props => {
  const comments = props.commentsData.comments.response.items;
  const profileComments = props.commentsData.comments.response.profiles;

  const formatAnswerComment = text => {
    var re1 = /\[id\d+\|/;
    var re2 = /\[id\d+\|[A-zА-яё]+/i;
    const str = text.split(',')[0];
    var newstr = str.replace(re1, '').replace(/\]/, '');
    newstr = text.replace(re2, newstr);
    return newstr;
  };

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
    const commentObject = profileComments.find(
      profile => profile.id == comment.from_id,
    );

    if (commentObject) {
      obj.nameOwnerComment =
        commentObject.first_name + ' ' + commentObject.last_name;

      obj.avaOwnerComment = commentObject.photo_100;
    }

    // если это ответ на коммент, форматируем имя в начале
    obj.textComment =
      comment.parents_stack.length == 0
        ? comment.text
        : formatAnswerComment(comment.text);
    obj.dateComment = new Date(comment.date * 1000).toLocaleString();
    obj.countLikes = comment.likes.count;

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

    return allComments;
  };

  return (
    <Post
      navigation={props.navigation}
      postItem={props.route.params}
      comments={filterComments()}
    />
  );
};

const mapStateToProps = store => {
  return {
    commentsData: store.getCommentsReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
