import {LearnerSkillCardProps} from '../../prop-types';
import defaultProps from './default';

const noQuestionsToReview: LearnerSkillCardProps = {
  ...defaultProps.props,
  metrics: {
    score: 65,
    content: 85
  }
};

export default {
  props: noQuestionsToReview
};
