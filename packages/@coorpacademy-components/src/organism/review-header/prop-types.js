import PropTypes from 'prop-types';
import ReviewHeaderStepsPropTypes from '../../molecule/review-header-steps/prop-types';

export default {
  steps: ReviewHeaderStepsPropTypes.steps,
  mode: PropTypes.string.isRequired,
  skillName: PropTypes.string.isRequired,
  'aria-label': PropTypes.string,
  closeButtonAriaLabel: PropTypes.string,
  onQuitClick: PropTypes.func,
  hiddenSteps: PropTypes.bool
};
