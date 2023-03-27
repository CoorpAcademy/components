import {FormTextInputProps} from '../../prop-types';

const fixture: {props: FormTextInputProps} = {
  props: {
    'aria-label': 'form text input aria label',
    'data-testid': 'form-text-input',
    autocomplete: 'new-password',
    // disabled: ,
    hint: 'Password hint',
    isRequired: true,
    label: 'Password',
    name: 'password',
    onChange: () => console.log('FormTextInput onChange'),
    passwordRules: {
      minLength: 8
    },
    // placeholder: '',
    type: 'password',
    value: '1234567890what-a-password'
  }
};

export default fixture;
