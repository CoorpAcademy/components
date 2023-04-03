import React, {useCallback, useMemo, FormEvent} from 'react';
import classnames from 'classnames';
import isEmpty from 'lodash/fp/isEmpty';
import isEqual from 'lodash/fp/isEqual';
import noop from 'lodash/fp/noop';
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

const DEFAULT_MAX_LENGTH = 150;

const isEqualsDefined = (equals: FieldValue | undefined): equals is FieldValue => !isEmpty(equals);

const FormTextInput = ({
  'aria-label': ariaLabel,
  autocomplete,
  'data-testid': dataTestid = 'form-text-input',
  disabled,
  hint,
  inputClassName,
  isRequired,
  isValid,
  label,
  maxlength = DEFAULT_MAX_LENGTH,
  name,
  onChange = noop,
  passwordValidator = () => false,
  placeholder,
  type = 'default',
  value,
  equals,
  wrapperClassName
}: FormTextInputProps) => {
  const isDefaultType = useMemo(() => !type || type === TextInput.default, [type]);

  const isPasswordInput = useMemo(
    () => type === TextInput.password || type === TextInput.passwordConfirmation,
    [type]
  );

  const isEmailInput = useMemo(() => type === TextInput.email, [type]);

  const handleInputChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const newInput: FieldValue = (event.target as HTMLInputElement).value;
      const isNewValueValid = !isEqualsDefined(equals) || validate(newInput, equals);
      const validPattern = !isEmailInput || validatePattern(newInput, VALID_EMAIL_PATTERN);
      const isPasswordCompliant = !isPasswordInput || passwordValidator(newInput);

      const checkResult = isPasswordCompliant && isNewValueValid && validPattern;

      onChange(newInput, checkResult);
    },
    [equals, isEmailInput, isPasswordInput, onChange, passwordValidator]
  );

  const fieldLabel = useMemo(() => `${label} ${isRequired ? '*' : ''}`, [isRequired, label]);

  const errorStyle = useMemo(
    () => (isValid ? undefined : {border: '2px solid rgb(247, 63, 82)'}),
    [isValid]
  );

  return (
    <div className={classnames(style.wrapper, wrapperClassName)}>
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
        style={errorStyle}
      />
      <div className={style.hintWrapper}>
        <span className={style.hint}>{hint}</span>
      </div>
    </div>
  );
};

FormTextInput.propTypes = propTypes;

export default FormTextInput;
