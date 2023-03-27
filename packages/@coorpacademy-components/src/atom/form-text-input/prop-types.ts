import PropTypes from 'prop-types';

const propTypes = {
  'aria-label': PropTypes.string,
  autocomplete: PropTypes.string,
  'data-testid': PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  inputClassName: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  maxlength: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  passwordRules: PropTypes.shape({
    minLength: PropTypes.number
  }),
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    'email',
    'password',
    'firstName',
    'lastName',
    'login',
    'passwordConfirmation',
    'language',
    'country',
    'default'
  ]),
  value: PropTypes.string,
  wrapperClassName: PropTypes.string
};

export const TextInput = {
  email: 'email',
  password: 'password',
  firstName: 'firstName',
  lastName: 'lastName',
  login: 'login',
  passwordConfirmation: 'passwordConfirmation',
  language: 'language',
  country: 'country',
  default: 'default'
} as const;

// type FormTextInputType =
//   | 'email'
//   | 'password'
//   | 'firstName'
//   | 'lastName'
//   | 'login'
//   | 'passwordConfirmation'
//   | 'language'
//   | 'country'
//   | 'default';

type TextInputType = keyof typeof TextInput;

export type FieldValue = string | number;

export type PasswordRulesConfig = {
  minLength: number;
};

export type FormTextInputProps = {
  'aria-label'?: string;
  autocomplete: string;
  'data-testid'?: string;
  disabled?: boolean;
  hint?: string;
  inputClassName?: string | null;
  isRequired: boolean;
  label: string;
  maxlength?: number;
  name: string;
  onChange: (value: FieldValue, isValid?: boolean) => void;
  passwordRules?: PasswordRulesConfig;
  placeholder?: string;
  type: TextInputType;
  value: string;
  wrapperClassName?: string | null;
};

export default propTypes;
