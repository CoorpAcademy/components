import React from 'react';
import {get, identity} from 'lodash/fp';
import classnames from 'classnames';
import Provider from '../../../atom/provider';
import Picture from '../../../atom/picture';
import threadShape from '../post-conditions';
import ForumComment from '../forum-comment';
import style from './style.css';

const ForumPost = (props, context) => {
  const {translate, skin} = context;
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
    mainPost = false,
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
  const color = get('common.primary', skin);

  const infoDeleted = translate('This message has been removed by its author');
  const answerLabel = translate('Answer');
  const editLabel = translate('Edit');
  const deleteLabel = translate('Delete');
  const rejectLabel = translate('Reject');
  const putBackLabel = translate('Put back');

  let messageClassName = style.message;
  if (deleted) {
    messageClassName = style.deletedMessage;
  } else if (showEditBox) {
    messageClassName = style.hiddenMessage;
  }

  return (
    <div
      data-name="forumPost"
      id={`forum-post-${id || 'to-be-posted'}`}
      className={classnames(
        mainPost ? style.mainPost : null,
        rejected ? style.rejected : style.post
      )}
    >
      <div className={style.avatarWrapper}>
        <div className={style.image}>
          <Picture src={avatar} className={style.avatar} />
        </div>
        <span data-name="author" className={style.author}>
          {author}
        </span>
      </div>
      <div className={style.content}>
        <div>
          <span className={style.date}>{date}</span>
        </div>
        <div className={style.body}>
          <span
            className={style.action}
            onClick={onAnswer}
            style={{
              color,
              display: answerable && !deleted && !rejected ? 'block' : 'none'
            }}
          >
            {answerLabel}
          </span>

          <span
            className={style.action}
            onClick={onEdit}
            style={{
              color,
              display: editable ? 'block' : 'none'
            }}
          >
            {editLabel}
          </span>

          <span
            className={style.action}
            onClick={onDelete}
            style={{
              color,
              display: editable ? 'block' : 'none'
            }}
          >
            {deleteLabel}
          </span>

          <span
            className={style.action}
            onClick={onModerate}
            style={{
              color,
              display: rejectable ? 'block' : 'none'
            }}
          >
            {rejected ? putBackLabel : rejectLabel}
          </span>

          <div className={messageClassName}>{deleted ? infoDeleted : message}</div>

          <div className={`${style.edition} ${showEditBox ? style.visible : ''}`}>
            <ForumComment
              avatar={null}
              value={edition}
              textareaDisabled={editionTextareaDisabled}
              postDisabled={editionPostDisabled}
              onPost={onPostEdition}
              onChange={onChangeEdition}
            />
          </div>

          <div className={`${style.answer} ${showAnswerBox ? style.visible : ''}`}>
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

ForumPost.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

ForumPost.propTypes = {
  ...threadShape
};

export default ForumPost;
