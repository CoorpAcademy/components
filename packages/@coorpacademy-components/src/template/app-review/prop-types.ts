import PropTypes from 'prop-types';
import Onboarding from './onboarding';
import Skills from './skills';
import Player from './player';
import {ReviewPlayerProps} from './player/prop-types';

export type ViewName = 'skills' | 'onboarding' | 'slides' | 'loader';

export type SlideView = {
  viewName: 'slides';
  slides: ReviewPlayerProps;
};
export type SkillsView = {
  viewName: 'skills';
  skills: PropTypes.InferProps<typeof Skills.propTypes>;
};
export type OnboardingView = {
  viewName: 'onboarding';
  onboarding: PropTypes.InferProps<typeof Onboarding.propTypes>;
};
export type LoadingView = {
  viewName: 'loader';
};

export type AppReviewProps = (SlideView | SkillsView | OnboardingView | LoadingView) & {
  navigateBack?: () => void;
};

const propTypes = {
  viewName: PropTypes.oneOf(['skills', 'onboarding', 'slides', 'loader']),
  onboarding: PropTypes.shape({...Onboarding.propTypes}),
  skills: PropTypes.shape({...Skills.propTypes}),
  slides: PropTypes.shape({...Player.propTypes})
};

export default propTypes;
