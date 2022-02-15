import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {find, keys, map, get, getOr, filter, includes, size} from 'lodash/fp';
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
  player: style.player,
  template: style.template // we keep template in case it is used anywhere else?
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
    modified = false,
    error = false,
    title: propTitle
  } = props;

  const {skin} = context;

  const title = propTitle ? `${propTitle}${required ? '*' : ''}` : null;

  const optionList =
    options &&
    options.map((option, index) => {
      return (
        <option key={index} value={option.value} className={style.selectOption}>
          {option.name}
        </option>
      );
    });

  const titleView = title ? <span className={style.title}>{title} </span> : null;

  const selected = multiple
    ? map(get('value'), filter({selected: true}, options))
    : get('value', find({selected: true}, options));
  const selectedLabel = multiple
    ? map(get('name'), filter({selected: true}, options))
    : get('name', find({selected: true}, options));

  const isSelectedInValidOption =
    theme === 'player' && getOr(false, 'name', find({validOption: false, selected: true}, options));

  const handleChange = useMemo(
    () =>
      multiple
        ? e => {
            onChange(map(get('value'), e.target.selectedOptions));
          }
        : e => {
            onChange(e.target.value);
          },
    [onChange, multiple]
  );

  const black = get('common.black', skin);
  const color = get('common.primary', skin);
  const shouldUseSkinFontColor =
    !isSelectedInValidOption && selected && includes(theme, ['question', 'template', 'player']);

  const arrowView = !multiple ? (
    <ArrowDown
      color={selected && (theme === 'question' || theme === 'template') ? color : black}
      className={style.arrow}
    />
  ) : null;
  const behaviourClassName = getClassState(
    style.default,
    style.modified,
    style.error,
    modified,
    error
  );
  const composedClassName = classnames(
    theme ? themeStyle[theme] : behaviourClassName,
    selected ? style.selected : style.unselected,
    className
  );

  const labelSize = size(selectedLabel);

  const isLongLabel = labelSize >= 80;

  return (
    <div className={composedClassName}>
      <label
        style={{
          ...(shouldUseSkinFontColor && {
            color
          })
        }}
        className={style.selectWrapper}
      >
        {titleView}
        <span
          className={classnames(
            style.selectSpan,
            includes(theme, ['player', 'invalid', 'question', 'thematiques', 'template'])
              ? style.noLabelCommon
              : null,
            borderClassName,
            isLongLabel ? style.longLabel : null
          )}
        >
          {selectedLabel}
        </span>
        {arrowView}
        <select
          className={style.selectBox}
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
  selected: PropTypes.bool,
  validOption: PropTypes.bool
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
  modified: PropTypes.bool,
  error: PropTypes.bool
};

export default Select;
