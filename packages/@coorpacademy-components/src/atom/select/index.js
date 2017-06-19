import React from 'react';
import PropTypes from 'prop-types';
import filter from 'lodash/fp/filter';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import keys from 'lodash/fp/keys';
import map from 'lodash/fp/map';
import ArrowDown from '@coorpacademy/nova-icons/composition/navigation/arrow-down';
import Provider from '../../atom/provider';
import getClassState from '../../util/get-class-state';
import style from './style.css';
/* eslint-disable css-modules/no-unused-class */
import invalidStyle from './theme-invalid.css';
import filterStyle from './theme-filter.css';
import headerStyle from './theme-header.css';
import moocStyle from './theme-mooc.css';
import questionStyle from './theme-question.css';
import sortStyle from './theme-sort.css';
import thematiquesStyle from './theme-thematiques.css';
/* eslint-enable css-modules/no-unused-class */

const themeStyle = {
  filter: filterStyle.filter,
  invalid: invalidStyle.invalid,
  header: headerStyle.header,
  mooc: moocStyle.mooc,
  question: questionStyle.question,
  sort: sortStyle.sort,
  thematiques: thematiquesStyle.thematiques
};

const Select = (props, context) => {
  const {
    options = [],
    onChange,
    multiple = false,
    disabled,
    required,
    theme,
    modified = false
  } = props;

  const {skin} = context;

  const title = props.title && `${props.title}${required ? '*' : ''}`;

  const optionList =
    options &&
    options.map((option, index) => {
      return (
        <option key={index} value={option.value}>
          {option.name}
        </option>
      );
    });

  const titleView = title && <span className={style.title}>{title}</span>;

  const selected = multiple
    ? map(get('value'), filter({selected: true}, options))
    : get('value', find({selected: true}, options));
  const selectedLabel = multiple
    ? map(get('name'), filter({selected: true}, options))
    : get('name', find({selected: true}, options));

  const handleChange = multiple
    ? e => {
        onChange(map(get('value'), e.target.selectedOptions));
      }
    : e => {
        onChange(e.target.value);
      };

  const black = getOr('#14171A', 'common.black', skin);
  const color = getOr('#000', 'common.primary', skin);
  const skinColor = {
    color: theme === 'question' ? color : null
  };

  const arrowView = !multiple ? <ArrowDown color={theme === 'question' ? color : black} className={style.arrow} /> : null;
  const className = getClassState(style.default, style.modified, style.error, modified);

  return (
    <div className={theme ? themeStyle[theme] : className}>
      <label style={skinColor}>
        {titleView}
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
};

Select.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Select.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(keys(themeStyle)),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string,
      selected: PropTypes.bool
    })
  ),
  modified: PropTypes.bool
};

export default Select;
