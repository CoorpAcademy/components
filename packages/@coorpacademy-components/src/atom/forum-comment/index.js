import {checker, createValidate} from '../../util/validation';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';
import style from './style.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const HoverFill = HoverFillBehaviour(treant, options);

  const ForumComment = (props, children) => (
    <div className={style.container}>
      <form>
        <div className={style.wrapper}>
          <div className={style.image}>
            <img src="" />
          </div>
          <div className={style.comment}>
            <textarea placeholder='Entrez votre texte ici'></textarea>
          </div>
        </div>
        <div className={style.post}>
          <HoverFill>
            <button>Poster</button>
          </HoverFill>
        </div>
      </form>
    </div>
  );

  ForumComment.validate = createValidate(conditions);
  return ForumComment;
};
