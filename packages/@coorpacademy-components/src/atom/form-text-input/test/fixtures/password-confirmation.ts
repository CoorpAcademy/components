import size from 'lodash/fp/size';
import {FormTextInputProps} from '../../prop-types';

const fixture: {props: FormTextInputProps} = {
  props: {
    'aria-label': 'form text input aria label',
    'data-testid': 'form-text-input',
    autocomplete: 'new-password',
    equals: '1234567890what-a-password',
    hint: 'passwordConfirmation hint',
    isRequired: true,
    label: 'Password Confirmation',
    name: 'passwordConfirmation',
    passwordValidator: password => size(password) >= 8,
    onChange: () => console.log('FormTextInput onChange'),
    type: 'passwordConfirmation',
    value: '1234567890what-a-password'
  }
};

export default fixture;
