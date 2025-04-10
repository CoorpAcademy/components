import PropTypes from 'prop-types';

const propTypes = {
  'aria-label': PropTypes.string,
  cardIndex: PropTypes.number,
  skillTitle: PropTypes.string,
  skillAriaLabel: PropTypes.string,
  focus: PropTypes.bool,
  metrics: PropTypes.shape({
    content: PropTypes.number,
    score: PropTypes.number,
    questionsToReview: PropTypes.number
  }),
  icon: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string
  }),
  onExploreClick: PropTypes.func
};

export type LearnerSkillCardProps = {
  'aria-label'?: string;
  cardIndex: number;
  skillTitle: string;
  skillAriaLabel?: string;
  focus: boolean;
  metrics: {
    content: number;
    score: number;
    questionsToReview?: number;
  };
  icon: {
    color: string;
    name: string;
  };
  onExploreClick: () => void;
};

export default propTypes;
