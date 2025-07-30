import {COLORS} from '../../../../variables/colors';

export default {
  props: {
    text: 'Short (>5mins)',
    selected: false,
    backgroundColor: COLORS.cm_primary_blue,
    onClick: () => console.log('click'),
    customIcon: 'none'
  }
};
