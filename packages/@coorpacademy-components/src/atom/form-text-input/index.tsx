import React, {useCallback, useMemo, useState, useEffect, FormEvent} from 'react';
import classnames from 'classnames';
import getOr from 'lodash/fp/getOr';
import isEqual from 'lodash/fp/isEqual';
import noop from 'lodash/fp/noop';
import size from 'lodash/fp/size';
// import {
//   NovaCompositionNavigationArrowRight as ArrowRight,
//   NovaCompositionCoorpacademyInformationIcon as InformationIcon
// } from '@coorpacademy/nova-icons';
// import Provider, {GetTranslateFromContext} from '../provider';
import propTypes, {FieldValue, FormTextInputProps, TextInput} from './prop-types';
import style from './style.css';

const validate = (fieldValue: FieldValue, fieldEqualsValue: FieldValue) => {
  return isEqual(fieldValue, fieldEqualsValue);
};

const DEFAULT_MIN_LENGTH = 8;

// autocorrect="off"
// autocapitalize="none"
// ng-pattern="/[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/"
const FormTextInput = ({
  'aria-label': ariaLabel,
  autocomplete,
  'data-testid': dataTestid = 'form-text-input',
  disabled,
  hint,
  inputClassName,
  isRequired,
  label,
  maxlength = 150,
  name,
  onChange = noop,
  passwordRules,
  placeholder,
  type = 'default',
  value,
  wrapperClassName
}: FormTextInputProps) => {
  const [newValue, setNewValue] = useState<FieldValue>(value);

  const [isValid, setIsValid] = useState<boolean>();

  const isDefaultType = useMemo(() => !type || type === TextInput.default, [type]);

  const isPasswordInput = useMemo(
    () => type === TextInput.password || type === TextInput.passwordConfirmation,
    [type]
  );

  const isEmailInput = useMemo(() => type === TextInput.email, [type]);

  const handleInputChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const newInput: FieldValue = (event.target as HTMLInputElement).value;
      setNewValue(prevValue => {
        const isNewValueValid = validate(prevValue, newInput);

        setIsValid(
          isPasswordInput
            ? size(newInput) >= getOr(DEFAULT_MIN_LENGTH, ['minLength'], passwordRules)
            : isNewValueValid
        );
        return newInput;
      });
      // onChange(newInput, isValid);
    },
    [isPasswordInput, passwordRules]
  );

  useEffect(() => {
    onChange(newValue, isValid);
    return;
  }, [isValid, newValue, onChange]);

  // watch over model: form[field.model], if changes (onInput - handleChange), re-validate
  // handleChange should update Angular's model & equals value, inside onChange
  // value and model should come from the outside

  const fieldLabel = useMemo(() => `${label} ${isRequired ? '*' : ''}`, [isRequired, label]);

  // pb needs isOnError
  return (
    <div className={classnames(style.wrapper, wrapperClassName)}>
      {/* className="Signup__form__label" */}
      <label className={style.formLabel} htmlFor={name}>
        {fieldLabel}
      </label>
      <input
        {...(!isPasswordInput && !isEmailInput && {maxLength: maxlength})}
        {...(isEmailInput && {autocapitalize: 'none'})}
        type={isDefaultType ? 'text' : type}
        aria-label={ariaLabel}
        autoComplete={autocomplete}
        autoCorrect={'off'}
        className={classnames(style.textInput, inputClassName)}
        data-testid={dataTestid}
        disabled={disabled}
        id={name}
        name={name}
        onInput={handleInputChange}
        placeholder={placeholder}
        value={value}
      />
      <div className={style.hintWrapper}>
        <span className={style.hint}>{hint}</span>
      </div>
    </div>
  );
};

FormTextInput.propTypes = propTypes;

export default FormTextInput;
