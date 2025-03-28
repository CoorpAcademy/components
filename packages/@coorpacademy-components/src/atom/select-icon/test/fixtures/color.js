import {COLORS} from '../../../../variables/colors';

export default {
  props: {
    size: 'responsive',
    'data-name': 'default-button',
    'aria-label': 'aria button',
    faIcon: 'bullseye-pointer',
    options: {
      selectionMode: 'single',
      isSelected: true,
      iconColor: COLORS.cm_positive_500
    },
    onClick: () => console.log('click')
  }
};
