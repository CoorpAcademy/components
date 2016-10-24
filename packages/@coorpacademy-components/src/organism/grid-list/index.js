import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.array
});

export default (treant, options = {}) => {
  const {h} = treant;

  const GridList = (props, children) => {
    return (
      <div className={style.wrapper}>
        {children}
      </div>
    );
  };

  GridList.validate = createValidate(conditions);
  return GridList;
};
