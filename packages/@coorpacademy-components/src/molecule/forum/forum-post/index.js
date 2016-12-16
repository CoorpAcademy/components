import Inferno from 'inferno';
import identity from 'lodash/fp/identity';
import {checker, createValidate} from '../../../util/validation';
import Picture from '../../../atom/picture';
import threadConditions from '../post-conditions';
import ForumComment from '../forum-comment';
import style from './style.css';

const conditions = checker.shape({
  props: threadConditions,
  children: checker.none
});

const ForumPost = ({children, ...props}, {translate}) => {
  const {
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
    showAnswerBox = false,
    showEditBox = false,
    onAnswer = identity,
    onEdit = identity,
    onPostAnswer = identity,
    onPostEdition = identity,
    onChangeAnswer = identity,
    onChangeEdition = identity,
    onModerate,
    onDelete
  } = props;

  const infoDeleted = translate('This message has been removed by its author.');
  const answerLabel = translate('Answer');
  const editLabel = translate('Edit');
  const deleteLabel = translate('Delete');
  const rejectLabel = translate('Reject');
  const putBackLabel = translate('Put back');

  const visibleBoxStyle = {
    visibility: 'visible',
    margin: '10px 0',
    height: '110px',
    opacity: 1
  };

  let messageClassName = style.message;
  if (deleted) {
    messageClassName = style.deletedMessage;
  }
  else if (showEditBox) {
    messageClassName = style.hiddenMessage;
  }

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
          <span
            className={style.action}
            onClick={onAnswer}
            style={{
              display: (answerable && !deleted && !rejected) ? 'block' : 'none'
            }}
          >
            {answerLabel}
          </span>

          <span
            className={style.action}
            onClick={onEdit}
            style={{
              display: editable ? 'block' : 'none'
            }}
          >
            {editLabel}
          </span>

          <span
            className={style.action}
            onClick={onDelete}
            style={{
              display: editable ? 'block' : 'none'
            }}
          >
            {deleteLabel}
          </span>

          <span
            className={style.action}
            onClick={onModerate}
            style={{
              display: rejectable ? 'block' : 'none'
            }}
          >
            {rejected ? putBackLabel : rejectLabel}
          </span>

          <div className={messageClassName}>
            {deleted ? infoDeleted : message}
          </div>

          <div
            className={style.edition}
            style={showEditBox && visibleBoxStyle}
          >
            <ForumComment
              avatar={null}
              value={edition}
              textareaDisabled={editionTextareaDisabled}
              postDisabled={editionPostDisabled}
              onPost={onPostEdition}
              onChange={onChangeEdition}
            />
          </div>

          <div
            className={style.answer}
            style={showAnswerBox && visibleBoxStyle}
          >
            <ForumComment
              avatar={answerAvatar}
              textareaDisabled={answerTextareaDisabled}
              postDisabled={answerPostDisabled}
              value={answer}
              onPost={onPostAnswer}
              onChange={onChangeAnswer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ForumPost.validate = createValidate(conditions);
export default ForumPost;
