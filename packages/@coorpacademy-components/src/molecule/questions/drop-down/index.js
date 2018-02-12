import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/fp/find';
import Select, {SelectOptionPropTypes} from '../../../atom/select';
import style from './style.css';

const DropDown = (props, context) => {
  const {options, onChange} = props;

  const currentSelection = find('selected', options);
  const defaultTheme =
    !currentSelection || currentSelection.validOption === false ? 'invalid' : 'question';

  const theme = props.theme || defaultTheme;

  return (
    <div className={style.wrapper}>
      <Select theme={theme} options={options} onChange={onChange} />
    </div>
  );
};

DropDown.propTypes = {
  onChange: Select.propTypes.onChange,
  options: PropTypes.arrayOf(
    PropTypes.shape({...SelectOptionPropTypes, validOption: PropTypes.bool})
  )
};

export default DropDown;
