import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    className: checker.string.optional
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const Loader = (props, children) => {
    <div className={style.container}>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
    </div>;
  };

  Loader.validate = createValidate(conditions);
  return Loader;
};
