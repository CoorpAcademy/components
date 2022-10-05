import PropTypes from 'prop-types';

import ReviewHeaderStepItemPropTypes, {
  Props as StepProps
} from '../../atom/review-header-step-item/types';

const propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape(ReviewHeaderStepItemPropTypes))
};

export default propTypes;

export type Props = {
  steps: StepProps[];
};
