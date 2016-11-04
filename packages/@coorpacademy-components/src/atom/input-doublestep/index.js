import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    toggleValue: checker.string,
    cancelValue: checker.string,
    description: checker.string.optional,
    onChange: checker.func,

  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const InputDoublestep = (props, children) => {
    const {
      title,
      toggleValue,
      cancelValue,
      onChange,
      description
    } = props;

    return (
      <div className={style.wrapper}>
        <div className={style.value}>
          <input
            type='checkbox'
            id={toggleValue}
            name={toggleValue}
            className={style.checkbox}
          />
          <label htmlFor={toggleValue}>
            <span className={style.toggle}>{toggleValue}</span>
            <span className={style.cancel}>{cancelValue}</span>
          </label>
          <button onClick={onChange} className={style.delete}>{title}</button>
        </div>
        <div className={style.description}>
          {description}
        </div>
      </div>
    );
  };

  InputDoublestep.validate = createValidate(conditions);
  return InputDoublestep;
};
