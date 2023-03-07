import PropTypes from 'prop-types';

const propTypes = {
  'aria-label': PropTypes.string,
  autocomplete: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  isOnError: PropTypes.bool,
  maxlength: PropTypes.number,
  onChange: PropTypes.func,
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
  ])
};

type FormTextInputType =
  | 'email'
  | 'password'
  | 'firstName'
  | 'lastName'
  | 'login'
  | 'passwordConfirmation'
  | 'language'
  | 'country'
  | 'default';

export type FormTextInputProps = {
  'aria-label'?: string;
  autocomplete: string;
  className: string;
  id: string;
  isOnError: boolean;
  maxlength?: number; // 150
  onChange: (value: string) => void;
  placeholder: string;
  type: FormTextInputType;
};

export default propTypes;
