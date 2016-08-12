import { checker, createValidate } from '../../../util/validation';
import style from './discipline-leftSide.css';

// const conditions = checker.shape({
//   props: checker.shape({
//     products: checker.array
//   }),
//   children: checker.none
// });

export default (engine, options) => {
  const {h} = engine;

  const DisciplineLeftSide = (props, children) => {
    return (
      <div className={style.leftSide}>
      
      </div>
    );
  };

  //DisciplineLeftSide.validate = createValidate(conditions);
  return DisciplineLeftSide;
};
