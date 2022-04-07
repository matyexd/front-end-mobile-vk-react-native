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
    };

    obj.idComment = comment.id;
    const commentObject = profileComments.find(
      profile => profile.id == comment.from_id,
    );
    obj.nameOwnerComment =
      commentObject.first_name + ' ' + commentObject.last_name;
    obj.avaOwnerComment = commentObject.photo_100;
    obj.textComment = comment.text;
    obj.dateComment = new Date(comment.date * 1000).toLocaleString();
    obj.countLikes = comment.likes.count;

    return obj;
  };

  const filterComments = () => {
    allComments = [];

    allComments = comments.map(comment => {
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
      return objCom;
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
