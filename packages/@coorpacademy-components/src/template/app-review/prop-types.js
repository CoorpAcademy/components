import PropTypes from 'prop-types';
import keys from 'lodash/fp/keys';
import Onboarding from './onboarding';
import Skills from './skills';
import Slides from './player';

export const ViewNames = {
  skills: 'skills',
  onboarding: 'onboarding',
  slides: 'slides',
  loader: 'loader'
};

export default {
  viewName: PropTypes.oneOf(keys(ViewNames)),
  onboarding: PropTypes.shape({...Onboarding.propTypes}),
  skills: PropTypes.shape({...Skills.propTypes}),
  slides: PropTypes.shape({...Slides.propTypes})
};
