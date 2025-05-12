import {LearnerSkillCardProps} from '../../prop-types';
import defaultProps from './default';

const shortTitleProps: LearnerSkillCardProps = {
  ...defaultProps.props,
  skillTitle: 'Agility'
};

export default {
  props: shortTitleProps
};
