import React from 'react';
import filter from 'lodash/fp/filter';
import head from 'lodash/fp/head';
import pipe from 'lodash/fp/pipe';
import Select from '../../../atom/select';
import style from './style.css';

const DropDown = (props, context) => {
  const {options, onChange} = props;

  const currentSelection = pipe(filter('selected'), head)(options);
  const theme = currentSelection.notAnOption ? 'invalid' : 'question';

  return (
    <div className={style.wrapper}>
      <Select theme={theme} options={options} onChange={onChange} />
    </div>
  );
};

DropDown.propTypes = {
  onChange: Select.propTypes.onChange,
  options: Select.propTypes.options
};

export default DropDown;
