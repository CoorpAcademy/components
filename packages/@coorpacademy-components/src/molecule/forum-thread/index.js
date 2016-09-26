import {checker, createValidate} from '../../util/validation';
import createForumPost from '../forum-post';
import style from './style.css';

const postConditions = checker.shape({
  type: checker.string.optional,
  author: checker.string.optional,
  date: checker.string.optional,
  text: checker.string.optional,
  avatar: checker.url.optional
}).optional;

const conditions = checker.shape({
  props: checker.shape({
    post: postConditions,
    answers: checker.arrayOf(postConditions)
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const Post = createForumPost(treant, options);

  const ForumThread = (props, children) => {
    const {post, answers} = props;
    const answersView = answers.map(answer => (
      <Post {...answer}/>
    ));

    return (
      <div className={style.thread}>
        <Post {...post}/>
        {answersView}
      </div>
    );
  };

  ForumThread.validate = createValidate(conditions);
  return ForumThread;
};
