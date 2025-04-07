import {LearnerSkillCardProps} from '../../prop-types';
import defaultProps from './default';

export const noAriaLabelProps: LearnerSkillCardProps = {
  ...defaultProps.props,
  focus: true
};

export default {
  props: noAriaLabelProps
};
