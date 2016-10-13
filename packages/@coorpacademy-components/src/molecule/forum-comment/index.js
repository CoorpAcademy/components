import {checker, createValidate} from '../../util/validation';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    message: checker.string.optional,
    avatar: checker.url.optional,
    onChange: checker.func.optional,
    onPost: checker.func.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const HoverFill = HoverFillBehaviour(treant, options);

  const ForumComment = (props, children) => {
    const {avatar, onPost, onChange, value} = props;
    return (
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.image}>
            <img src={avatar} />
          </div>
          <div className={style.comment}>
            <textarea
              placeholder='Entrez votre texte ici'
              value={value}
              oninput={onChange}
            />
          </div>
        </div>
        <div className={style.post}>
          <HoverFill>
            <button
              onClick={onPost}
            >
              Poster
            </button>
          </HoverFill>
        </div>
      </div>
    );
  };

  ForumComment.validate = createValidate(conditions);
  return ForumComment;
};
