import React from 'react';
import PropTypes from 'prop-types';
import filter from 'lodash/fp/filter';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import keys from 'lodash/fp/keys';
import map from 'lodash/fp/map';
import shallowCompare from '../../util/shallow-compare';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const themeStyle = {
  filter: style.filter,
  mooc: style.mooc,
  header: style.header,
  nolabel: style.nolabel,
  sort: style.sort,
  thematiques: style.thematiques
};

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
    const selectedLabel = multiple ?
      map(get('name'), filter({selected: true}, options)) :
      get('name', find({selected: true}, options));

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
    const className = getClassState(style.default, style.modified, style.error, modified);

    return (
      <div className={theme ? themeStyle[theme] : className}>
        <label>
          <span className={style.title}>{title}</span>
          <span className={style.label}>{selectedLabel}</span>
          {arrowView}
          <select
            title={selectedLabel}
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
  theme: PropTypes.oneOf(keys(themeStyle)),
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    selected: PropTypes.bool
  })),
  modified: PropTypes.bool
};

export default Select;
