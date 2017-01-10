import React, {PropTypes} from 'react';
import style from './style.css';

const InputReadonly = props => {
  const {
    title,
    value,
    description
  } = props;

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        {title}
      </div>
      <div className={style.value}>
        {value}
      </div>
      <div className={style.description}>
        {description}
      </div>
    </div>
  );
};

InputReadonly.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  description: PropTypes.string
};
export default InputReadonly;
