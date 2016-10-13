import uniqueId from 'lodash/fp/uniqueId';
import {checker, createValidate} from '../../util/validation';
import createPicture from '../../atom/picture';
import createForumComment from '../forum-comment';
import style from './style.css';

const postConditions = checker.shape({
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
  onDelete: checker.func.optional
}).optional;

const conditions = checker.shape({
  props: postConditions,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const Picture = createPicture(treant, options);
  const ForumComment = createForumComment(treant, options);

  const ForumPost = (props, children) => {
    const {
      author,
      avatar,
      date,
      message,
      answer,
      answerAvatar,
      editable = false,
      rejectable = false,
      rejected = false,
      deleted = false,
      edition,
      onPostAnswer,
      onPostEdition,
      onChangeAnswer,
      onChangeEdition,
      onToggleRejection,
      onDelete
    } = props;

    const idAnswer = uniqueId('forum-post-answer-toggler-');
    const idEdit = uniqueId('forum-post-edit-toggler-');
    const idReject = uniqueId('forum-post-reject-toggler-');
    const infoDeleted = '* This message has been removed. *';

    return (
      <div className={style.post}>
        <div className={style.image}>
          <Picture
            src={avatar}
            className={style.avatar}
          />
        </div>
        <div className={style.content}>
          <div className={style.head}>
            <span className={style.author}>{author}</span>
            <span className={style.date}>{date}</span>
          </div>
          <div className={style.body}>
            <input
              type='checkbox'
              id={idAnswer}
              onClick={() => {
                document.getElementById(idEdit).checked = false;
              }}
              className={style.answerToggler}
            />
            <label
              htmlFor={idAnswer}
              className={style.action}
              style={{
                display: deleted ? 'none' : 'block'
              }}
            >
              Répondre
            </label>

            <input
              type='checkbox'
              id={idEdit}
              onClick={() => {
                document.getElementById(idAnswer).checked = false;
              }}
              className={style.editionToggler}
            />
            <label
              htmlFor={idEdit}
              className={style.action}
              style={{
                display: editable ? 'block' : 'none'
              }}
            >
              Éditer
            </label>

            <span
              className={style.action}
              onClick={onDelete}
              style={{
                display: editable ? 'block' : 'none'
              }}
            >
              Supprimer
            </span>

            <input
              type='checkbox'
              id={idReject}
              onClick={onToggleRejection}
              className={style.rejectionToggler}
            />
            <label
              htmlFor={idReject}
              className={style.action}
              style={{
                display: rejectable ? 'block' : 'none'
              }}
            >
              {rejected ? 'Approve' : 'Reject'}
            </label>

            <div className={style.message}>
              {deleted ? infoDeleted : message}
            </div>

            <div className={style.edition}>
              <ForumComment
                avatar={null}
                value={edition}
                onPost={() => {
                  document.getElementById(idEdit).checked = false;
                  return onPostEdition();
                }}
                onChange={onChangeEdition}
              />
            </div>

            <div className={style.answer}>
              <ForumComment
                avatar={answerAvatar}
                value={answer}
                onPost={() => {
                  document.getElementById(idAnswer).checked = false;
                  return onPostAnswer();
                }}
                onChange={onChangeAnswer}
              />
            </div>
          </div>
        </div>
      </div>
      );
  };

  ForumPost.validate = createValidate(conditions);
  return ForumPost;
};
