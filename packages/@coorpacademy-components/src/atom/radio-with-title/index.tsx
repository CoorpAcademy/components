import React, {useCallback} from 'react';
import {uniqueId} from 'lodash/fp';
import classnames from 'classnames';
import Title from '../title';
import style from './style.css';
import {propTypes, RadioWithTitleProps} from './types';

const RadioWithTitle = (props: RadioWithTitleProps) => {
  const {
    title,
    name,
    checked,
    disabled,
    example,
    hint,
    onChange,
    'data-name': dataName,
    'aria-label': ariaLabel
  } = props;
  const idRadio = uniqueId('input-radio-');
  const hintId = hint ? `${idRadio}-hint` : undefined;
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) onChange(e.target.checked);
    },
    [disabled, onChange]
  );

  return (
    <div className={classnames(style.container, {[style.withHint]: hint})}>
      <label htmlFor={idRadio}>
        <input
          type="radio"
          id={idRadio}
          name={name}
          onChange={handleChange}
          checked={checked}
          disabled={disabled}
          className={style.radio}
          data-name={dataName}
          aria-label={ariaLabel}
          aria-describedby={hintId}
        />
        <span className={classnames(style.title, {[style.withExample]: example})}>
          <Title {...title} titleSize={'small'} subtitleSize={'extra-small'} />
          {example ? <span className={style.example}>{example}</span> : null}
        </span>
      </label>
      {hint ? (
        <span id={hintId} className={style.hint}>
          {hint}
        </span>
      ) : null}
    </div>
  );
};

RadioWithTitle.propTypes = propTypes;

export default RadioWithTitle;
