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
    tag: {
      label: '4',
      size: 'S',
      customStyle: {
        color: COLORS.white,
        backgroundColor: COLORS.cm_primary_blue
      }
    }
  }
};

export default fixture;
