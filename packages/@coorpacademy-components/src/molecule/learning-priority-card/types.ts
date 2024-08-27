import PropTypes from 'prop-types';

export type LearningPriorityCardPropTypes = {
  title: string;
  tagLabel: 'Skill' | 'Playlist' | 'Certification';
  progression: number;
  onClick: () => void;
};

export const propTypes = {
  title: PropTypes.string,
  tagLabel: PropTypes.oneOf(['Playlist', 'Certification', 'Skill']),
  progression: PropTypes.number,
  onClick: PropTypes.func
};
