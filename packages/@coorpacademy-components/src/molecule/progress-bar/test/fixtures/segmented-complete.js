import {COLORS} from '../../../../variables/colors';

export default {
  props: {
    segments: [
      {value: 1812, label: 'Completed', color: COLORS.cm_positive_500},
      {value: 0, label: 'In progress', color: COLORS.cm_primary_blue},
      {value: 0, label: 'Not started', color: COLORS.cm_grey_200}
    ],
    title: '1,812 active learners',
    subtitle: '100% completed · 28 removed, outside the bar',
    ariaLabel: '1,812 completed, 0 in progress, 0 not started'
  }
};
