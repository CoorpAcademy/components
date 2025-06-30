import {COLORS} from '../../../../variables/colors';
import {Fixture} from '../../types';

const fixture: Fixture = {
  props: {
    type: 'tertiary',
    label: 'Filters',
    icon: {
      position: 'left',
      faIcon: {
        name: 'sliders',
        size: 16,
        color: COLORS.cm_grey_700
      }
    },
    tagLabel: '4'
  }
};

export default fixture;
