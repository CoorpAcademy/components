import uniqueId from 'lodash/fp/uniqueId';
import {checker, createValidate} from '../../util/validation';
import createPicture from '../../atom/picture';
import createForumComment from '../forum-comment';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    author: checker.string.optional,
    date: checker.string.optional,
    message: checker.string.optional,
    avatar: checker.url.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const Picture = createPicture(treant, options);
  const ForumComment = createForumComment(treant, options);

  const ForumPost = (props, children) => {
    const {
      author,
      date,
      message,
      avatar
    } = props;

    const {
      onPost,
      onChange
    } = props.answer;

    const idAnswer = uniqueId('forum-post-answer-toggler-');
    const idEdit = uniqueId('forum-post-edit-toggler-');

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
              className={style.answerToggler}/>
            <label
              htmlFor={idAnswer}
              className={style.action}>
              Répondre
            </label>

            <input
              type='checkbox'
              id={idEdit}
              onClick={() => {
                document.getElementById(idAnswer).checked = false;
              }}
              className={style.editionToggler}/>
            <label
              htmlFor={idEdit}
              className={style.action}>
              Éditer
            </label>

            <div className={style.message}>
              {message}
            </div>

            <a className={style.action}>Supprimer</a>

            <div className={style.edition}>
              <ForumComment
                hideAvatar={true}
                message={message}
                onPost={() => {
                  document.getElementById(idEdit).checked = false;
                  return props.edition.onPost();
                }}
                onChange={props.edition.onChange}
              />
            </div>

            <div className={style.answer}>
              <ForumComment
                avatar={props.answer.avatar}
                message={props.answer.message}
                onPost={() => {
                  document.getElementById(idAnswer).checked = false;
                  return onPost();
                }}
                onChange={onChange}
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
