import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {SrcPropType} from '../../util/proptypes';
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
    postDisabled,
    className,
    profileAvatarAlt
  } = props;

  const threadsView = threads.map(thread => <ForumThread {...thread} key={thread.id} mainPost />);

  const commentView = !hideComments ? (
    <ForumComment
      avatar={avatar}
      value={value}
      profileAvatarAlt={profileAvatarAlt}
      newPost
      onPost={onPost}
      onChange={onChange}
      textareaDisabled={textareaDisabled}
      postDisabled={postDisabled}
    />
  ) : null;

  const loader = loading ? (
    <div className={style.loader}>
      <Loader />
    </div>
  ) : null;

  return (
    <div data-name="discussion" className={classnames(style.thread, className)}>
      <div className={style.header}>
        <h1
          id="forum-discussion"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: title}}
        />
        {commentView}
      </div>
      {threadsView}
      {loader}
    </div>
  );
}
Discussion.propTypes = {
  avatar: SrcPropType,
  loading: PropTypes.bool,
  value: PropTypes.string,
  profileAvatarAlt: PropTypes.string,
  title: PropTypes.string,
  onPost: PropTypes.func,
  onChange: PropTypes.func,
  threads: PropTypes.arrayOf(PropTypes.shape(postConditions)),
  textareaDisabled: PropTypes.bool,
  postDisabled: PropTypes.bool,
  className: PropTypes.string,
  hideComments: PropTypes.bool
};

export default Discussion;
