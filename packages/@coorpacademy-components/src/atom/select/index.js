import React, {PropTypes} from 'react';
import filter from 'lodash/fp/filter';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import style from './style.css';

const Select = props => {
  const {
    options = [],
    onChange,
    multiple = false,
    disabled,
    required,
    theme,
    title: titleProps
  } = props;

  const title = `${titleProps}${required ? '*' : ''} :`;

  const optionList = options && options.map((option, index) => {
    return (
      <option
        key={index}
        value={option.value}
      >
        {option.name}
      </option>
    );
  });

  const selected = multiple ?
    map(get('value'), filter({selected: true}, options)) :
    get('value', find({selected: true}, options));
  const handleChange = multiple ?
    e => {
      onChange(map(get('value'), e.target.selectedOptions));
    } :
    e => {
      onChange(e.target.value);
    };

  return (
    <div className={theme ? style[theme] : style.default}>
      <label>
        <span className={style.title}>{title}</span>
        <div className={style.arrow}></div>
        <select
          onChange={handleChange}
          value={selected}
          multiple={multiple}
          disabled={disabled}
        >
          {optionList}
        </select>
      </label>
    </div>
  );
};

Select.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  theme: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    selected: PropTypes.bool
  }))
};
export default Select;
