import {FormTextInputProps} from '../../prop-types';

const fixture: {props: FormTextInputProps} = {
  props: {
    'aria-label': 'form text input aria label',
    'data-testid': 'form-text-input',
    autocomplete: 'new-password',
    hint: 'Password hint',
    isRequired: true,
    label: 'Password',
    name: 'password',
    onChange: () => console.log('FormTextInput onChange'),
    passwordValidator: password => !!password,
    type: 'password',
    value: '1234567890what-a-password',
    isValid: true
  }
};

export default fixture;
