import React, {useCallback, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import concat from 'lodash/fp/concat';
import filter from 'lodash/fp/filter';
import find from 'lodash/fp/find';
import flatMapDeep from 'lodash/fp/flatMapDeep';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import includes from 'lodash/fp/includes';
import isEmpty from 'lodash/fp/isEmpty';
import keys from 'lodash/fp/keys';
import map from 'lodash/fp/map';
import size from 'lodash/fp/size';
import {
  NovaCompositionNavigationArrowDown as ArrowDown,
  NovaCompositionNavigationArrowTop as ArrowUp
} from '@coorpacademy/nova-icons';
import Provider, {GetSkinFromContext} from '../provider';
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

const ArrowView = ({shouldRender, isArrowUp, ariaLabel, arrowClass, arrowColor}) => {
  const props = useMemo(
    () => ({
      ...(arrowColor &
        {
          color: arrowColor
        }),
      className: arrowClass
    }),
    [ariaLabel, arrowClass, arrowColor]
  );
  if (shouldRender) {
    return isArrowUp ? (
      <ArrowUp {...props} data-testid="select-arrow-up-icon" />
    ) : (
      <ArrowDown {...props} data-testid="select-arrow-down-icon" />
    );
  } else return null;
};

const Select = (props, legacyContext) => {
  const {
    name,
    options = [],
    optgroups = [],
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
    title: propTitle,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy
  } = props;

  const skin = GetSkinFromContext(legacyContext);
  const title = useMemo(
    () => (propTitle ? `${propTitle}${required ? '*' : ''}` : null),
    [propTitle, required]
  );

  const [isArrowUp, setIsArrowUp] = useState(false);

  const handleSelectOnFocus = useCallback(() => setIsArrowUp(true), []);
  const handleSelectOnBlur = useCallback(() => setIsArrowUp(false), []);

  const selectOption = (option, index) => {
    return (
      <option key={index} value={option.value} className={style.selectOption}>
        {option.name}
      </option>
    );
  };

  const optionList = !isEmpty(options)
    ? options.map((option, index) => selectOption(option, index))
    : optgroups.map((optgroup, index) => {
        return (
          <optgroup key={index} label={optgroup.label}>
            {optgroup.options && optgroup.options.map((option, i) => selectOption(option, i))}
          </optgroup>
        );
      });

  const titleView = title ? <span className={style.title}>{title} </span> : null;

  const selected = useMemo(
    () =>
      multiple
        ? map(get('value'), filter({selected: true}, options))
        : get('value', find({selected: true}, concat(options, flatMapDeep('options', optgroups)))),
    [multiple, options, optgroups]
  );
  const selectedLabel = useMemo(
    () =>
      multiple
        ? map(get('name'), filter({selected: true}, options))
        : get('name', find({selected: true}, concat(options, flatMapDeep('options', optgroups)))),
    [multiple, options, optgroups]
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
            setIsArrowUp(false);
            onChange(map(get('value'), e.target.selectedOptions));
          }
        : e => {
            setIsArrowUp(false);
            onChange(e.target.value);
          },
    [onChange, multiple]
  );

  const black = useMemo(() => getOr('#14171A', 'common.black', skin), [skin]);
  const color = useMemo(() => getOr('#00B0FF', 'common.primary', skin), [skin]);
  const isThemeOneOfQuestionTemplateOrPlayer = useMemo(
    () => includes(theme, ['question', 'template', 'player']),
    [theme]
  );
  const shouldUseSkinFontColor = useMemo(
    () => !isSelectedInValidOption && selected && isThemeOneOfQuestionTemplateOrPlayer,
    [isSelectedInValidOption, selected, isThemeOneOfQuestionTemplateOrPlayer]
  );
  const arrowColor = selected ? color : undefined;

  const behaviorClassName = useMemo(
    () => getClassState(style.default, style.modified, style.error, modified, error),
    [error, modified]
  );
  const composedClassName = useMemo(
    () =>
      classnames(
        theme && theme !== 'coorpmanager' ? themeStyle[theme] : behaviorClassName,
        selected ? style.selected : style.unselected,
        className
      ),
    [behaviorClassName, className, selected, theme]
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
          style={{
            ...(shouldUseSkinFontColor && {
              color
            })
          }}
        >
          {selectedLabel}
        </span>
        <ArrowView
          shouldRender={!multiple}
          isArrowUp={isArrowUp}
          ariaLabel={ariaLabel}
          arrowClass={shouldUseSkinFontColor ? style.selectedArrow : style.arrow}
          arrowColor={isThemeOneOfQuestionTemplateOrPlayer ? arrowColor : black}
        />
        <select
          {...(ariaLabelledBy && !ariaLabel ? {'aria-labelledby': ariaLabelledBy} : {})}
          {...(ariaLabel && !ariaLabelledBy ? {'aria-label': ariaLabel} : {})}
          data-name="native-select"
          className={style.selectBox}
          title={selectedLabel}
          name={name}
          onChange={handleChange}
          value={selected}
          multiple={multiple}
          disabled={disabled}
          onClick={handleSelectOnFocus}
          onBlur={handleSelectOnBlur}
          // onBlur does not handle completely an out of bounds click
          // ex: select is Opened and a click is done outside, cancelling the select
          // that doesn't count as a Blur, so an onMouseLeave is needed
          onMouseLeave={handleSelectOnBlur}
          data-testid="native-select"
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

export const SelectOptionGroupPropTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape(SelectOptionPropTypes))
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
  optgroups: PropTypes.arrayOf(PropTypes.shape(SelectOptionGroupPropTypes)),
  modified: PropTypes.bool,
  error: PropTypes.bool,
  'aria-label': PropTypes.string,
  'aria-labelledby': PropTypes.string
};

export default Select;
