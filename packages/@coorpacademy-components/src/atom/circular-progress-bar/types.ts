import PropTypes from 'prop-types';

export type LearningPriorityCardPropTypes = {
  label: string;
  progression: number;
  size: number;
  strokeWidth: number;
};

export const CircularProgressBarPropTypes = {
  label: PropTypes.string,
  progression: PropTypes.number.isRequired,
  size: PropTypes.number,
  strokeWidth: PropTypes.number
};
