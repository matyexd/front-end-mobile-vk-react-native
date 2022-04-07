import React from 'react';
import {Post} from '@components/Post';
import {connect} from 'react-redux';

const PostScreen = ({route, navigation, commentsData}) => {
  const {
    source_id,
    news_id,
    datePost,
    textPost,
    countComments,
    countLike,
    nameOwnerPost,
    avatar,
    postPhotos,
  } = route.params;

  const comments = commentsData.comments.response.items;
  const profileComments = commentsData.comments.response.profiles;

  const filterItemComment = comment => {
    obj = {
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
    console.log(comment.id);
    obj.textComment = comment.text;
    obj.dateComment = new Date(comment.date * 1000).toLocaleString();
    obj.countLikes = comment.likes.count;

    if (comment.attachments) {
      const photos = comment.attachments.filter(
        attachment => attachment.type === 'photo',
      );
      if (photos) {
        obj.imageComment = photos.map(photo => photo.photo.sizes.pop().url);
      }

      if (comment.attachments[0].type === 'sticker') {
        obj.imageComment.push(comment.attachments[0].sticker.images[1].url);
      }
    }

    return obj;
  };

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
      navigation={navigation}
      source_id={source_id}
      news_id={news_id}
      datePost={datePost}
      textPost={textPost}
      countComments={countComments}
      countLike={countLike}
      nameOwnerPost={nameOwnerPost}
      avatar={avatar}
      postPhotos={postPhotos}
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
