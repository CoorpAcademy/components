import React, {useCallback, useMemo, useState, useEffect, FormEvent} from 'react';
import classnames from 'classnames';
import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
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

const VALID_EMAIL_PATTERN =
  /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const validatePattern = (fieldValue: string, pattern: RegExp) => {
  return pattern.test(fieldValue);
};

const DEFAULT_MIN_LENGTH = 8;

const isEqualsDefined = (equals: FieldValue | undefined): equals is FieldValue => !isEmpty(equals);

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
  equals,
  wrapperClassName
}: FormTextInputProps) => {
  const [newValue, setNewValue] = useState<FieldValue>(value);

  const [isValid, setIsValid] = useState<boolean>(true);

  const isDefaultType = useMemo(() => !type || type === TextInput.default, [type]);

  const isPasswordInput = useMemo(
    () => type === TextInput.password || type === TextInput.passwordConfirmation,
    [type]
  );

  const isEmailInput = useMemo(() => type === TextInput.email, [type]);

  const handleInputChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const newInput: FieldValue = (event.target as HTMLInputElement).value;
      setNewValue(() => {
        const isNewValueValid = !isEqualsDefined(equals) || validate(newInput, equals);
        const validPattern = !isEmailInput || validatePattern(newInput, VALID_EMAIL_PATTERN);
        const passwordLengthCheck =
          !isPasswordInput ||
          size(newInput) >= getOr(DEFAULT_MIN_LENGTH, ['minLength'], passwordRules);

        setIsValid(passwordLengthCheck && isNewValueValid && validPattern);

        return newInput;
      });
    },
    [equals, isEmailInput, isPasswordInput, passwordRules]
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
        {...(isEmailInput && {autoCapitalize: 'none'})}
        {...(isRequired && {required: true})}
        {...(!isValid && {'aria-invalid': true})}
        type={isDefaultType ? 'text' : type}
        aria-label={ariaLabel}
        autoComplete={isDefaultType ? 'on' : autocomplete}
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
