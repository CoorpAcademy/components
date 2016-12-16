import Inferno from 'inferno';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

const Loader = ({children, ...props}) => {
  return (
    <div className={style.container}>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
    </div>
  );
};

Loader.validate = createValidate(conditions);
export default Loader;
