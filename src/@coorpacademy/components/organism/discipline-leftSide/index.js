import { checker, createValidate } from '../../util/validation';
import style from './discipline-leftSide.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

export default ({h}, options = {}) => {
  const DisciplineLeftSide = (props, children) => {
    return (
      <div className={style.leftSide}>

      </div>
    );
  };

  DisciplineLeftSide.validate = createValidate(conditions);
  return DisciplineLeftSide;
};
