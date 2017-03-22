import React, {PropTypes} from 'react';
import isEqual from 'lodash/fp/isEqual';
import filter from 'lodash/fp/filter';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import shallowCompare from '../../util/shallow-compare';
import getClassState from '../../util/get-class-state';
import style from './style.css';

class Select extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  render() {
    const {
      options = [],
      onChange,
      multiple = false,
      disabled,
      required,
      theme,
      title: titleProps,
      modified = false
    } = this.props;

    const title = `${titleProps}${required ? '*' : ''}`;

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

    const arrowView = !multiple ? (
      <div className={style.arrow} />
    ) : null;

    return (
      <div className={theme ? style[theme] : getClassState(style, modified, false)}>
        <label>
          <span className={style.title}>{title}</span>
          {arrowView}
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
  }
}

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
  })),
  modified: PropTypes.bool
};

export default Select;
