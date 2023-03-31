import PropTypes from 'prop-types';
import keys from 'lodash/fp/keys';

export const TextInput = {
  country: 'country',
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName',
  language: 'language',
  login: 'login',
  password: 'password',
  passwordConfirmation: 'passwordConfirmation',
  default: 'default'
} as const;

const propTypes = {
  'aria-label': PropTypes.string,
  autocomplete: PropTypes.string,
  'data-testid': PropTypes.string,
  disabled: PropTypes.bool,
  equals: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hint: PropTypes.string,
  inputClassName: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  maxlength: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  passwordValidator: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(keys(TextInput)),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  wrapperClassName: PropTypes.string
};

type TextInputType = keyof typeof TextInput;

export type FieldValue = string | number;

export type FormTextInputProps = {
  'aria-label'?: string;
  autocomplete?: string;
  'data-testid'?: string;
  disabled?: boolean;
  equals?: FieldValue;
  hint?: string;
  inputClassName?: string | null;
  isRequired?: boolean;
  label: string;
  maxlength?: number;
  name: string;
  onChange?: (value: FieldValue, isValid?: boolean) => void;
  passwordValidator?: (password: string) => boolean;
  placeholder?: string;
  type?: TextInputType;
  value: FieldValue;
  wrapperClassName?: string | null;
};

export default propTypes;
