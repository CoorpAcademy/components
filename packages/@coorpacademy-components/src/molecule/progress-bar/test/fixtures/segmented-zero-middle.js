import {COLORS} from '../../../../variables/colors';

export default {
  props: {
    segments: [
      {value: 1147, label: 'Completed', color: COLORS.cm_positive_500},
      {value: 0, label: 'In progress', color: COLORS.cm_primary_blue},
      {value: 665, label: 'Not started', color: COLORS.cm_grey_200}
    ],
    title: '1,812 active learners',
    subtitle: '63% completed · 28 removed, outside the bar',
    ariaLabel: '1,147 completed, 0 in progress, 665 not started'
  }
};
