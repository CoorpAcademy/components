import {FormTextInputProps} from '../../prop-types';

const fixture: {props: FormTextInputProps} = {
  props: {
    'aria-label': 'form text input aria label email',
    autocomplete: 'email',
    isRequired: true,
    label: 'Email',
    name: 'email',
    onChange: () => console.log('FormTextInput onChange'),
    // placeholder: '',
    type: 'email',
    value: 'phyneas@summer.com'
  }
};

export default fixture;
