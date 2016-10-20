import {checker, createValidate} from '../../../util/validation';
import threadConditions from '../post-conditions';
import createForumPost from '../forum-post';
import style from './style.css';

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
      onModerate,
      answers = []
    } = props;

    const answersView = answers.map(answerProps => (
      <ForumThread {...answerProps}/>
    ));

    return (
      <div className={style.thread}>
        <Post
          author={author}
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
          onModerate={onModerate}
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
