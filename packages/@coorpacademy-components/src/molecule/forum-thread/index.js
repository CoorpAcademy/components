import {checker, createValidate} from '../../util/validation';
import createForumPost from '../forum-post';
import style from './style.css';

const threadConditions = checker.shape({
  author: checker.string.optional,
  date: checker.string.optional,
  message: checker.string.optional,
  avatar: checker.url.optional,
  answerAvatar: checker.url.optional,
  answer: checker.string.optional,
  edition: checker.string.optional,
  onPostAnswer: checker.func.optional,
  onPostEdition: checker.func.optional,
  onChangeAnswer: checker.func.optional,
  onChangeEdition: checker.func.optional,
  onDelete: checker.func.optional,
  onToggleRejection: checker.func.optional,
  answers: checker.array.optional
}).optional;

const conditions = checker.shape({
  props: threadConditions,
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
      answerAvatar,
      editable = false,
      rejectable = false,
      rejected = false,
      deleted = false,
      answer,
      edition,
      onPostAnswer,
      onPostEdition,
      onChangeAnswer,
      onChangeEdition,
      onDelete,
      onToggleRejection,
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
          answerAvatar={answerAvatar}
          editable={editable}
          rejectable={rejectable}
          deleted={deleted}
          rejected={rejected}
          answer={answer}
          edition={edition}
          onChangeAnswer={onChangeAnswer}
          onChangeEdition={onChangeEdition}
          onPostAnswer={onPostAnswer}
          onPostEdition={onPostEdition}
          onToggleRejection={onToggleRejection}
          onDelete={onDelete}
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
