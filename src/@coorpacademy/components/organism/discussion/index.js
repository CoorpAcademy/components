import {checker, createValidate} from '../../util/validation';
import style from './style.css';
import createForumThread from '../../molecule/forum-thread';

const postConditions = checker.shape({
  type: checker.string.optional,
  author: checker.string.optional,
  date: checker.string.optional,
  text: checker.string.optional,
  avatar: checker.url.optional
}).optional;

const threadConditions = checker.shape({
  post: postConditions,
  answers: checker.arrayOf(postConditions)
}).optional;

const conditions = checker.shape({
  props: checker.shape({
    threads: checker.arrayOf(threadConditions).optional
  }).optional,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const Thread = createForumThread(treant, options);

  const ForumThread = ({threads}, children) => {
    const threadsView = threads.map(thread => (
      <Thread {...thread}/>
    ));

    return (
      <div className={style.thread}>
        <h1>Discussion</h1>
        {threadsView}
      </div>
    );
  };

  ForumThread.validate = createValidate(conditions);
  return ForumThread;
};
