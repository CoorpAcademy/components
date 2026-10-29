import {COLORS} from '../../../../variables/colors';

export default {
  props: {
    segments: [
      {value: 0, label: 'Completed', color: COLORS.cm_positive_500},
      {value: 380, label: 'In progress', color: COLORS.cm_primary_blue},
      {value: 1432, label: 'Not started', color: COLORS.cm_grey_200}
    ],
    title: '1,812 active learners',
    subtitle: '0% completed · 28 removed, outside the bar',
    ariaLabel: '0 completed, 380 in progress, 1,432 not started'
  }
};
