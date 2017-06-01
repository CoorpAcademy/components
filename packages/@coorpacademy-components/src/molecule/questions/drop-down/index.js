import React from 'react';
import Select from '../../../atom/select';
import style from './style.css';

const DropDown = (props, context) => {
  return (
    <div className={style.wrapper}>
      <Select theme={'question'} {...props} />
    </div>
  );
};

DropDown.propTypes = {
  onChange: Select.propTypes.onChange,
  options: Select.propTypes.options
};

export default DropDown;
