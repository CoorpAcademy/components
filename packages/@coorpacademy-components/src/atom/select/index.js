import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import filter from 'lodash/fp/filter';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import includes from 'lodash/fp/includes';
import keys from 'lodash/fp/keys';
import map from 'lodash/fp/map';
import size from 'lodash/fp/size';
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
  template: style.template,
  coorpmanager: null
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

  const title = useMemo(() => (propTitle ? `${propTitle}${required ? '*' : ''}` : null), [
    propTitle,
    required
  ]);

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

  const selected = useMemo(
    () =>
      multiple
        ? map(get('value'), filter({selected: true}, options))
        : get('value', find({selected: true}, options)),
    [multiple, options]
  );
  const selectedLabel = useMemo(
    () =>
      multiple
        ? map(get('name'), filter({selected: true}, options))
        : get('name', find({selected: true}, options)),
    [multiple, options]
  );

  const isSelectedInValidOption = useMemo(
    () =>
      theme === 'player' &&
      getOr(false, 'name', find({validOption: false, selected: true}, options)),
    [options, theme]
  );

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

  const black = useMemo(() => getOr('#14171A', 'common.black', skin), [skin]);
  const color = useMemo(() => getOr('#00B0FF', 'common.primary', skin), [skin]);
  const shouldUseSkinFontColor = useMemo(
    () =>
      !isSelectedInValidOption && selected && includes(theme, ['question', 'template', 'player']),
    [isSelectedInValidOption, selected, theme]
  );
  const arrowColor = selected ? color : undefined;

  const arrowView = !multiple ? (
    <ArrowDown
      color={includes(theme, ['question', 'template', 'player']) ? arrowColor : black}
      className={shouldUseSkinFontColor ? style.selectedArrow : style.arrow}
    />
  ) : null;
  const behaviourClassName = useMemo(
    () => getClassState(style.default, style.modified, style.error, modified, error),
    [error, modified]
  );
  const composedClassName = useMemo(
    () =>
      classnames(
        theme && theme !== 'coorpmanager' ? themeStyle[theme] : behaviourClassName,
        selected ? style.selected : style.unselected,
        className
      ),
    [behaviourClassName, className, selected, theme]
  );

  const labelSize = useMemo(() => size(selectedLabel), [selectedLabel]);

  const isLongLabel = useMemo(() => labelSize >= 65, [labelSize]);

  return (
    <div
      className={classnames(
        composedClassName,
        theme === 'coorpmanager' ? style.coorpmanager : null
      )}
    >
      <label
        data-name="select-wrapper"
        style={{
          ...(shouldUseSkinFontColor && {
            color
          })
        }}
        className={style.selectWrapper}
      >
        {titleView}
        <span
          data-name="select-span"
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
          data-name="native-select"
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
