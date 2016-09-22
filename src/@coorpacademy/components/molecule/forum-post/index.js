import {checker, createValidate} from '../../util/validation';
import style from './style.css';
import createImage from '../../atom/image';

const conditions = checker.shape({
  props: checker.shape({
    type: checker.string.optional,
    author: checker.string.optional,
    date: checker.string.optional,
    text: checker.string.optional,
    avatar: checker.url.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const Image = createImage(treant, options);

  const ForumPost = (props, children) => {
    const {
      type,
      author,
      date,
      text,
      avatar
    } = props;

    return (
      <div className={style[type]}>
        <Image
          src={avatar}
          className={style.avatar}
        />

        <div className={style.content}>
          <div className={style.head}>
            <span className={style.author}>{author}</span>
            <span className={style.date}>{date}</span>
          </div>

          <div className={style.body}>
            {text}
          </div>

          <div className={style.footer}>
            <a className={style.action}>Répondre</a>
            <a className={style.action}>Éditer</a>
            <a className={style.action}>Supprimer</a>
          </div>
        </div>
      </div>
      );
  };

  ForumPost.validate = createValidate(conditions);
  return ForumPost;
};
