import PropTypes from 'prop-types';

import ReviewHeaderStepItemPropTypes, {
  HeaderStepItemProps
} from '../../atom/review-header-step-item/types';

const propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape(ReviewHeaderStepItemPropTypes))
};

export default propTypes;

export type ReviewHeaderStepsProps = {
  steps: HeaderStepItemProps[];
};
