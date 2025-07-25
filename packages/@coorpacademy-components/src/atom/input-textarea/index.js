import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {noop, keys, isEmpty} from 'lodash/fp';
import classnames from 'classnames';
import {
  NovaSolidStatusCheckCircle2 as CheckIcon,
  NovaSolidStatusClose as ErrorIcon,
  NovaCompositionCoorpacademyInformationIcon as InfoIcon
} from '@coorpacademy/nova-icons';
import {v5 as uuidV5} from 'uuid';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const themeStyle = {
  setup: style.setup,
  coorpmanager: style.coorpmanager,
  cockpit: style.cockpit,
  default: style.defaultStyle
};
const InputTextarea = props => {
  const {
    title: propsTitle,
    name,
    placeholder,
    value,
    hint,
    theme = 'default',
    onChange = noop,
    error,
    valid,
    description,
    disabled,
    readOnly = false,
    modified = false
  } = props;

  const mainClass = themeStyle[theme];
  const className = getClassState(style.defaultStyle, style.modified, style.error, modified, error);
  const handleChange = useMemo(() => e => onChange(e.target.value), [onChange]);

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
  const errorIconView = error ? <ErrorIcon className={style.leftIcon} /> : null;
  const validIconView = valid ? <CheckIcon className={style.leftIcon} /> : null;

  return (
    <div
      className={classnames(
        mainClass,
        className,
        disabled && style.disabled,
        readOnly && style.readonly
      )}
    >
      <label>
        <span className={classnames(style.title, isEmpty(value) && style.noValue)}>
          {propsTitle}
          {toolTipView}
        </span>
        <textarea
          id={uuidV5('textarea-', uuidV5.URL)}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          disabled={disabled}
          readOnly={readOnly}
          data-testid={name}
        />
        {errorIconView}
        {validIconView}
        {hintView}
      </label>
      {descriptionView}
    </div>
  );
};

InputTextarea.propTypes = {
  placeholder: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  theme: PropTypes.oneOf(keys(themeStyle)),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
  hint: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string,
  modified: PropTypes.bool,
  valid: PropTypes.bool
};
export default InputTextarea;
