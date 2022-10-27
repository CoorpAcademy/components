import PropTypes from 'prop-types';
import {SkillsProps} from '../../organism/review-skills/prop-types';
import Onboarding from './onboarding';
import Skills from './skills';
import Player from './player';
import {ReviewPlayerProps} from './player/prop-types';

export type ViewName = 'skills' | 'onboarding' | 'slides' | 'loader';

export type AppReviewProps = {
  viewName: ViewName;
  slides?: ReviewPlayerProps;
  skills?: SkillsProps;
  onboarding?: PropTypes.InferProps<typeof Onboarding.propTypes>;
  navigateBack?: () => void;
};

const propTypes = {
  viewName: PropTypes.oneOf(['skills', 'onboarding', 'slides', 'loader']),
  onboarding: PropTypes.shape({...Onboarding.propTypes}),
  skills: PropTypes.shape({...Skills.propTypes}),
  slides: PropTypes.shape({...Player.propTypes})
};

export default propTypes;
