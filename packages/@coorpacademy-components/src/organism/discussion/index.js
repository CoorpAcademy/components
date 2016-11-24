import {checker, createValidate} from '../../util/validation';
import createForumComment from '../../molecule/forum/forum-comment';
import createForumThread from '../../molecule/forum/forum-thread';
import postConditions from '../../molecule/forum/post-conditions';
import createLoader from '../../atom/loader';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    avatar: checker.url.optional,
    loading: checker.bool.optional,
    value: checker.string.optional,
    onPost: checker.func.optional,
    onChange: checker.func.optional,
    threads: checker.arrayOf(postConditions).optional,
    textareaDisabled: checker.bool.optional,
    postDisabled: checker.bool.optional
  }).optional,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const Thread = createForumThread(treant, options);
  const ForumComment = createForumComment(treant, options);
  const Loader = createLoader(treant, options);

  const Discussion = (props, children) => {
    const {
      threads,
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

    const threadsView = threads && threads.map(thread => (
      <Thread {...thread}/>
    ));

    const commentView = !hideComments && (
      <ForumComment
        avatar={avatar}
        value={value}
        onPost={onPost}
        onChange={onChange}
        textareaDisabled={textareaDisabled}
        postDisabled={postDisabled}
      />
    );

    const loader = loading && (
      <div className={style.loader}>
        <Loader/>
      </div>
    );

    return (
      <div className={style.thread}>
        <h1>{title}</h1>
        {commentView}
        {threadsView}
        {loader}
      </div>
    );
  };

  Discussion.validate = createValidate(conditions);
  return Discussion;
};
