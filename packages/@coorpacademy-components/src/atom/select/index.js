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
    theme
  } = props;

  const title = `${props.title}${required ? '*' : ''} :`;

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

  return (
    <div className={theme ? style[theme] : style.default}>
      <label>
        <span className={style.title}>{title}</span>
        <div className={style.arrow}></div>
        <select
          onChange={e => onChange(e.target.value)}
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
  value: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    selected: PropTypes.bool.isRequired
  }))
};
export default Select;
