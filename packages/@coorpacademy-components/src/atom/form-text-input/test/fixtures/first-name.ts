import {FormTextInputProps} from '../../prop-types';

const fixture: {props: FormTextInputProps} = {
  props: {
    'aria-label': 'form text input aria label',
    'data-testid': 'form-text-input',
    autocomplete: 'given-name',
    isRequired: true,
    label: 'First Name',
    name: 'firstName',
    placeholder: 'firstName',
    type: 'firstName',
    value: 'Phineas'
  }
};

export default fixture;
