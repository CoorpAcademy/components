import React from 'react';
import PropTypes from 'prop-types';
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func,
      name: PropTypes.String,
      value: PropTypes.String,
      selected: PropTypes.bool
    })
  )
};

export default DropDown;
