import {checker, createValidate} from '../../util/validation';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const ForumComment = (props, children) => (
    <div className={style.wrapper}>
      <form>
        <div className={style.image}>

        </div>
        <div className={style.comment}>
          <textarea></textarea>
        </div>
        <div>
          <input type='submit' value='Poster'/>
        </div>
      </form>
    </div>
  );

  ForumComment.validate = createValidate(conditions);
  return ForumComment;
};
