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
        size: 14,
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
    },
    customStyle: {
      border: `2px solid ${COLORS.cm_primary_blue}`,
      borderRadius: '12px'
    }
  }
};

export default fixture;
