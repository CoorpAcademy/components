import React from 'react';
import PropTypes from 'prop-types';
import * as CustomPropTypes from '../../util/proptypes';
import ForumComment from '../../molecule/forum/forum-comment';
import ForumThread from '../../molecule/forum/forum-thread';
import postConditions from '../../molecule/forum/post-conditions';
import Loader from '../../atom/loader';
import style from './style.css';

function Discussion(props) {
  const {
    threads = [],
    title,
    avatar,
    value,
    loading,
    onPost,
    onChange,
    hideComments,
    textareaDisabled,
    postDisabled
  } = props;

  const threadsView = threads.map(thread => <ForumThread key={thread.id} {...thread} />);

  const commentView =
    !hideComments &&
    <ForumComment
      avatar={avatar}
      value={value}
      onPost={onPost}
      onChange={onChange}
      textareaDisabled={textareaDisabled}
      postDisabled={postDisabled}
    />;

  const loader =
    loading &&
    <div className={style.loader}>
      <Loader />
    </div>;

  return (
    <div className={style.thread}>
      <h1>{title}</h1>
      {commentView}
      {threadsView}
      {loader}
    </div>
  );
}

Discussion.propTypes = {
  avatar: CustomPropTypes.url,
  loading: PropTypes.bool,
  value: PropTypes.string,
  onPost: PropTypes.func,
  onChange: PropTypes.func,
  threads: PropTypes.arrayOf(PropTypes.shape(postConditions)),
  textareaDisabled: PropTypes.bool,
  postDisabled: PropTypes.bool
};

export default Discussion;
