import {checker, createValidate} from '../../util/validation';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    onChange: checker.func.optional,
    onPost: checker.func.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const HoverFill = HoverFillBehaviour(treant, options);

  const ForumComment = (props, children) => (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.image}>
          <img src="" />
        </div>
        <div className={style.comment}>
          <textarea
            placeholder='Entrez votre texte ici'
            value={props.state}
            oninput={props.onChange}
          />
        </div>
      </div>
      <div className={style.post}>
        <HoverFill>
          <button
            onClick={props.onPost}
          >
            Poster
          </button>
        </HoverFill>
      </div>
    </div>
  );

  ForumComment.validate = createValidate(conditions);
  return ForumComment;
};
