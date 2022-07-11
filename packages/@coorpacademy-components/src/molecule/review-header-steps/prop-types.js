import PropTypes from 'prop-types';

import ReviewHeaderStepItemPropTypes from '../../atom/review-header-step-item/prop-types';

export default {
  steps: PropTypes.arrayOf(PropTypes.shape(ReviewHeaderStepItemPropTypes))
};
