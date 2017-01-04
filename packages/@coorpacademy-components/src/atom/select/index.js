import React, {PropTypes} from 'react';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import style from './style.css';

const Select = props => {
  const {
    options = [],
    onChange,
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

  const selected = find({selected: true}, options);
  const handleChange = e => onChange(e.target.value);

  return (
    <div className={theme ? style[theme] : style.default}>
      <label>
        <span className={style.title}>{title}</span>
        <div className={style.arrow}></div>
        <select
          onChange={handleChange}
          defaultValue={get('value', selected)}
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
  required: PropTypes.bool,
  onChange: PropTypes.func,
  theme: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    selected: PropTypes.bool.isRequired
  }))
};
export default Select;
