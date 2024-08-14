import PropTypes from 'prop-types';

export type LearningPriorityCardPropTypes = {
  title: string;
  tag: {
    label: 'Skill' | 'Playlist' | 'Certification';
    type: string;
  };
  progression: number;
  onClick: () => void;
  circularProgress: {
    label: string;
    progression: number;
    size: number;
    strokeWidth: number;
  };
};

export const propTypes = {
  title: PropTypes.string,
  tag: PropTypes.shape({
    label: PropTypes.oneOf(['Playlist', 'Certification', 'Skill']),
    type: PropTypes.string
  }),
  progression: PropTypes.number,
  onClick: PropTypes.func
};
