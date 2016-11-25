import identity from 'lodash/fp/identity';
import debounce from 'lodash/fp/debounce';
import {checker, createValidate} from '../../../util/validation';
import createPicture from '../../../atom/picture';
import threadConditions from '../post-conditions';
import createForumComment from '../forum-comment';
import style from './style.css';

const conditions = checker.shape({
  props: threadConditions,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate = identity} = options;

  const Picture = createPicture(treant, options);
  const ForumComment = createForumComment(treant, options);

  const ForumPost = (props, children) => {
    const {
      id,
      author,
      avatar,
      date,
      message,
      answer,
      answerPostDisabled = false,
      answerTextareaDisabled = false,
      answerAvatar,
      answerable = true,
      editable = false,
      rejectable = false,
      rejected = false,
      deleted = false,
      edition,
      editionPostDisabled = false,
      editionTextareaDisabled = false,
      onPostAnswer,
      onPostEdition,
      onChangeAnswer = identity,
      onChangeEdition = identity,
      onModerate,
      onDelete
    } = props;

    const idAnswer = 'forum-post-answer-toggler-';
    const idEdit = 'forum-post-edit-toggler-';
    const idReject = 'forum-post-reject-toggler-';

    const infoDeleted = translate('This message has been removed by its author.');
    const answerLabel = translate('Answer');
    const editLabel = translate('Edit');
    const deleteLabel = translate('Delete');
    const rejectLabel = translate('Reject');
    const putBackLabel = translate('Put back');

    return (
      <div className={rejected ? style.rejected : style.post}>
        <div className={style.image}>
          <Picture
            src={avatar}
            className={style.avatar}
          />
        </div>
        <div className={style.content}>
          <div>
            <span className={style.author}>{author}</span>
            <span className={style.date}>{date}</span>
          </div>
          <div className={style.body}>
            <input
              type='checkbox'
              id={`${idAnswer}${id}`}
              className={style.answerToggler}
            />
            <label
              htmlFor={`${idAnswer}${id}`}
              className={style.action}
              style={{
                display: (answerable && !deleted && !rejected) ? 'block' : 'none'
              }}
            >
              {answerLabel}
            </label>

            <input
              type='checkbox'
              id={`${idEdit}${id}`}
              className={style.editionToggler}
            />
            <label
              htmlFor={`${idEdit}${id}`}
              className={style.action}
              style={{
                display: editable ? 'block' : 'none'
              }}
            >
              {editLabel}
            </label>

            <span
              className={style.action}
              onClick={onDelete}
              style={{
                display: editable ? 'block' : 'none'
              }}
            >
              {deleteLabel}
            </span>

            <input
              type='checkbox'
              id={`${idReject}${id}`}
              onClick={onModerate}
              className={style.rejectionToggler}
            />
            <label
              htmlFor={`${idReject}${id}`}
              className={style.action}
              style={{
                display: rejectable ? 'block' : 'none'
              }}
            >
              {rejected ? putBackLabel : rejectLabel}
            </label>

            <div className={deleted ? style.deletedMessage : style.message }>
              {deleted ? infoDeleted : message}
            </div>

            <div className={style.edition}>
              <ForumComment
                avatar={null}
                value={edition}
                textareaDisabled={editionTextareaDisabled}
                postDisabled={editionPostDisabled}
                onPost={() => {
                  document.getElementById(`${idEdit}${id}`).checked = false;
                  document.getElementById(`${idAnswer}${id}`).checked = false;
                  onPostEdition();
                }}
                onChange={debounce(400, onChangeEdition)}
              />
            </div>

            <div className={style.answer}>
              <ForumComment
                avatar={answerAvatar}
                textareaDisabled={answerTextareaDisabled}
                postDisabled={answerPostDisabled}
                value={answer}
                onPost={() => {
                  document.getElementById(`${idEdit}${id}`).checked = false;
                  document.getElementById(`${idAnswer}${id}`).checked = false;
                  return onPostAnswer();
                }}
                onChange={debounce(400, onChangeAnswer)}
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
