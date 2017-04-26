// @flow
import {type Props} from '../../';

const props: Props = {
  title: 'Choose a domain name',
  subtitle: 'Domain name',
  description: 'Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula portra felis.',
  field: {
    placeholder: 'My domain name',
    label: '.coorpacademy.com',
    error: undefined,
    value: '',
    onChange: () => {}
  },
  onSubmit: () => {},
  submitValue: 'Create',
  isModified: false,
  isPending: false
};

export default {
  props
};
