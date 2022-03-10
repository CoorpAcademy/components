import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {noop, isNil, keys, isEmpty} from 'lodash/fp';
import {
  NovaSolidStatusCheckCircle2 as CheckIcon,
  NovaSolidStatusClose as ErrorIcon,
  NovaCompositionCoorpacademyInformationIcon as InfoIcon
} from '@coorpacademy/nova-icons';
import classnames from 'classnames';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const themeStyle = {
  setup: style.setup,
  coorpmanager: style.coorpmanager,
  cockpit: style.cockpit,
  default: style.default
};
const InputText = props => {
  const {
    autoFocus = false,
    placeholder = '',
    value,
    hint,
    defaultValue,
    onChange = noop,
    error,
    valid,
    theme = 'default',
    description,
    disabled,
    modified = false,
    title: propsTitle,
    'data-name': dataName = 'input-text',
    'aria-label': ariaLabel = 'Input Text'
  } = props;

  const isCMTheme = theme === 'coorpmanager';
  const handleChange = useMemo(() => e => onChange(e.target.value), [onChange]);
  const mainClass = themeStyle[theme];
  const className = getClassState(style.default, style.modified, style.error, modified, error);
  const descriptionView =
    description && theme !== 'coorpmanager' ? (
      <div className={style.description}>{description}</div>
    ) : null;
  const toolTipView =
    description && theme === 'coorpmanager' ? (
      <div className={style.infoIconWrapper}>
        <InfoIcon className={style.infoIcon} />
        <div className={style.descriptionLabel}>{description}</div>
      </div>
    ) : null;
  const hintView =
    theme === 'coorpmanager' ? (
      <div
        className={style.hint}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: error || hint}}
      />
    ) : null;
  const errorIconView = isCMTheme && error ? <ErrorIcon className={style.leftIcon} /> : null;
  const validIconView = isCMTheme && valid ? <CheckIcon className={style.leftIcon} /> : null;

  return (
    <div
      className={classnames(
        mainClass,
        className,
        disabled && style.disabled,
        isNil(propsTitle) && style.isNoTitle
      )}
    >
      <label>
        <span className={classnames(style.title, isEmpty(value) && style.noValue)}>
          {propsTitle}
          {toolTipView}
        </span>

        <input
          autoFocus={autoFocus}
          type="text"
          name={propsTitle}
          className={style.input}
          placeholder={placeholder}
          defaultValue={defaultValue}
          autoComplete={'off'}
          value={value}
          onInput={handleChange}
          disabled={disabled}
          onChange={noop}
          data-name={dataName}
          aria-label={ariaLabel}
        />
        {errorIconView}
        {validIconView}
        {hintView}
      </label>
      {descriptionView}
    </div>
  );
};

InputText.propTypes = {
  autoFocus: PropTypes.bool,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  theme: PropTypes.oneOf(keys(themeStyle)),
  disabled: PropTypes.bool,
  value: PropTypes.string,
  hint: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string,
  modified: PropTypes.bool,
  valid: PropTypes.bool,
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string
};
export default InputText;
