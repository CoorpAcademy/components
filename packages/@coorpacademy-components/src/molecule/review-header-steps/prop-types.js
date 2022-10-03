import PropTypes from 'prop-types';

import ReviewHeaderStepItemPropTypes from '../../atom/review-header-step-item/types';

export default {
  steps: PropTypes.arrayOf(PropTypes.shape(ReviewHeaderStepItemPropTypes))
};
