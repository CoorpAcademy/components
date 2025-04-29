import {COLORS} from '../../../../variables/colors';

export default {
  props: {
    type: 'text',
    title: 'Icon color',
    placeholder: 'This is an input',
    theme: 'coorpmanager',
    description: 'This is the tooltip text',
    value: COLORS.cm_turquoise_strong,
    disabled: false,
    valid: false,
    error: '',
    required: true,
    onChange: value => console.log(value),
    inputColor: true
  }
};
