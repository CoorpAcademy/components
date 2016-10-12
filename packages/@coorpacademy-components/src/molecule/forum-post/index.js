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

    const id = uniqueId('forum-post-answer-toggler-');

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
            {message}
          </div>
          <div className={style.footer}>
            <input
              type='checkbox'
              id={id}
              className={style.answerToggler}/>
            <label
              htmlFor={id}
              className={style.action}>
              Répondre
            </label>
            <a className={style.action}>Éditer</a>
            <a className={style.action}>Supprimer</a>
            <div className={style.answer}>
              <ForumComment
                avatar={props.answer.avatar}
                message={props.answer.message}
                onPost={() => {
                  document.getElementById(id).checked = false;
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
