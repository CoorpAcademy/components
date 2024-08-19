import PropTypes from 'prop-types';

export type LearningPriorityCardPropTypes = {
  title: string;
  tag: {
    label: 'Skill' | 'Playlist' | 'Certification';
  };
  progression: number;
  onClick: () => void;
};

export const propTypes = {
  title: PropTypes.string,
  tag: PropTypes.shape({
    label: PropTypes.oneOf(['Playlist', 'Certification', 'Skill'])
  }),
  progression: PropTypes.number,
  onClick: PropTypes.func
};
