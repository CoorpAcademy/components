import {LearnerSkillCardProps} from '../../prop-types';
import defaultProps from './default';

const longTitleProps: LearnerSkillCardProps = {
  ...defaultProps.props,
  skillTitle: 'Effective Communication, Team Collaboration & Strong Problem-Solving Mindset'
};

export default {
  props: longTitleProps
};
