import PropTypes from 'prop-types';

export type LearningPriorityCardPropTypes = {
  label: string;
  progression: number;
  size: number;
  strokeWidth: number;
  'aria-label': string;
  'data-name': string;
};

export const CircularProgressBarPropTypes = {
  label: PropTypes.string,
  progression: PropTypes.number.isRequired,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string
};
