import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {find, keys, map, get, filter} from 'lodash/fp';
import {NovaCompositionNavigationArrowDown as ArrowDown} from '@coorpacademy/nova-icons';
import Provider from '../provider';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const themeStyle = {
  filter: style.filter,
  invalid: style.invalid,
  header: style.header,
  mooc: style.mooc,
  question: style.question,
  sort: style.sort,
  thematiques: style.thematiques,
  template: style.template
};

const Select = (props, context) => {
  const {
    name,
    options = [],
    className,
    borderClassName,
    onChange,
    multiple = false,
    disabled,
    required,
    description,
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

  const black = get('common.black', skin);
  const color = get('common.primary', skin);
  const skinColor = {
    color: selected && (theme === 'question' || theme === 'template') ? color : null
  };

  const arrowView = !multiple ? (
    <ArrowDown
      color={selected && (theme === 'question' || theme === 'template') ? color : black}
      className={style.arrow}
    />
  ) : null;
  const behaviourClassName = getClassState(style.default, style.modified, style.error, modified);
  const composedClassName = classnames(
    theme ? themeStyle[theme] : behaviourClassName,
    selected ? style.selected : style.unselected,
    className
  );

  return (
    <div className={composedClassName}>
      <label style={skinColor}>
        {titleView}
        <span className={classnames(style.label, borderClassName)}>{selectedLabel}</span>
        {arrowView}
        <select
          title={selectedLabel}
          name={name}
          onChange={handleChange}
          value={selected}
          multiple={multiple}
          disabled={disabled}
        >
          {optionList}
        </select>
      </label>
      <div className={style.description}>{description}</div>
    </div>
  );
};

export const SelectOptionPropTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selected: PropTypes.bool
};

Select.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Select.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  borderClassName: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  description: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(keys(themeStyle)),
  options: PropTypes.arrayOf(PropTypes.shape(SelectOptionPropTypes)),
  modified: PropTypes.bool
};

export default Select;
