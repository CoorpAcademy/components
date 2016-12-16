import Inferno from 'inferno';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.array
});

const GridList = ({children, ...props}) => {
  return (
    <div className={style.wrapper}>
      {children}
    </div>
  );
};

GridList.validate = createValidate(conditions);
export default GridList;
