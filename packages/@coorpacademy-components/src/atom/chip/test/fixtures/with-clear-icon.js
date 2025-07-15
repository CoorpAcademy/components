import {COLORS} from '../../../../variables/colors';

export default {
  props: {
    text: 'Show all languages',
    backgroundColor: COLORS.cm_grey_150,
    customIcon: 'xmark',
    onClick: () => console.log('show all languages'),
    customStyle: {
      height: '28px',
      padding: '4px 8px'
    }
  }
};
