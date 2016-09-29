import {checker, createValidate} from '../../util/validation';
import createForumThread from '../../molecule/forum-thread';
import createForumComment from '../../molecule/forum-comment';
import style from './style.css';

const postConditions = checker.shape({
  type: checker.string.optional,
  author: checker.string.optional,
  date: checker.string.optional,
  text: checker.string.optional,
  avatar: checker.url.optional,
  answers: checker.array.optional
}).optional;

const conditions = checker.shape({
  props: checker.shape({
    onPost: checker.func.optional,
    threads: checker.arrayOf(checker.shape({
      post: postConditions
    })).optional
  }).optional,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const Thread = createForumThread(treant, options);
  const ForumComment = createForumComment(treant, options);

  const Discussion = ({threads, onPost}, children) => {
    const threadsView = threads.map(thread => (
      <Thread {...thread}/>
    ));

    return (
      <div className={style.thread}>
        <h1>Discussion</h1>
        <ForumComment onPost={onPost}/>
        {threadsView}
      </div>
    );
  };

  Discussion.validate = createValidate(conditions);
  return Discussion;
};
