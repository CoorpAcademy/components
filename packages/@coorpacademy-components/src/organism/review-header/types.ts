import PropTypes from 'prop-types';
import ReviewHeaderStepsPropTypes from '../../molecule/review-header-steps/prop-types';
import {StatusItemProps} from '../../atom/status-item/types';

const propTypes = {
  steps: ReviewHeaderStepsPropTypes.steps,
  mode: PropTypes.string.isRequired,
  skillName: PropTypes.string.isRequired,
  'aria-label': PropTypes.string,
  closeButtonAriaLabel: PropTypes.string,
  onQuitClick: PropTypes.func,
  hiddenSteps: PropTypes.bool
};

export default propTypes;

export type HeaderProps = {
  steps: StatusItemProps[];
  mode: string;
  skillName: string;
  'aria-label': string;
  closeButtonAriaLabel: string;
  onQuitClick: () => void;
  hiddenSteps: boolean;
};
