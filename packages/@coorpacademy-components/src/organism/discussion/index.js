import Inferno from 'inferno';
import {checker, createValidate} from '../../util/validation';
import ForumComment from '../../molecule/forum/forum-comment';
import ForumThread from '../../molecule/forum/forum-thread';
import postConditions from '../../molecule/forum/post-conditions';
import Loader from '../../atom/loader';
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

const Discussion = ({children, ...props}) => {
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
    <ForumThread {...thread}/>
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
export default Discussion;
