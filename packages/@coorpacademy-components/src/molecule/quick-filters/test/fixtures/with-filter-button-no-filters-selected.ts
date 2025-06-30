import {COLORS} from '../../../../variables/colors';
import Default from './default';

export default {
  props: {
    ...Default.props,
    filterButton: {
      label: 'Filters',
      'aria-label': 'open-filters-modal',
      'data-name': 'open-filters-modal',
      icon: {
        position: 'left',
        faIcon: {name: 'sliders', size: 14, color: COLORS.cm_grey_700}
      }
    }
  }
};
