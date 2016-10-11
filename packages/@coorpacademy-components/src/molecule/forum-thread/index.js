import {checker, createValidate} from '../../util/validation';
import createForumPost from '../forum-post';
import style from './style.css';

const postConditions = checker.shape({
  type: checker.string.optional,
  author: checker.string.optional,
  date: checker.string.optional,
  message: checker.string.optional,
  avatar: checker.url.optional,
  answers: checker.array.optional
}).optional;

const conditions = checker.shape({
  props: checker.shape({
    post: postConditions
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const Post = createForumPost(treant, options);

  const ForumThread = (props, children) => {
    const {
      author,
      date,
      message,
      avatar,
      answer,
      answers = []
    } = props;

    const answersView = answers.map(answerProps => (
      <ForumThread {...answerProps}/>
    ));

    return (
      <div className={style.thread}>
        <Post
          name={author}
          date={date}
          message={message}
          avatar={avatar}
          answer={answer}
        />
        <div className={style.answers}>
          {answersView}
        </div>
      </div>
    );
  };

  ForumThread.validate = createValidate(conditions);
  return ForumThread;
};
