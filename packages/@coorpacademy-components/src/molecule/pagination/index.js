import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({

  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const Pagination = (props, children) => {
    const {

    } = props;

    return (
      <div className={style.wrapper}>
        <div className={style.value}></div>
        <div className={style.buttons}></div>
      </div>
    );
  };

  Pagination.validate = createValidate(conditions);
  return Pagination;
};
