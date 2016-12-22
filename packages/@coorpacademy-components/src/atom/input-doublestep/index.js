import React, {PropTypes} from 'react';
import style from './style.css';

const InputDoublestep = props => {
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

InputDoublestep.propTypes = {
  title: PropTypes.string.isRequired,
  toggleValue: PropTypes.string.isRequired,
  cancelValue: PropTypes.string.isRequired,
  description: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
export default InputDoublestep;
