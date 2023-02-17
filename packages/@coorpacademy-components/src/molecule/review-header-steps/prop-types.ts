import PropTypes from 'prop-types';

import ReviewHeaderStepItemPropTypes, {StatusItemProps} from '../../atom/status-item/types';

const propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape(ReviewHeaderStepItemPropTypes))
};

export default propTypes;

export type ReviewHeaderStepsProps = {
  steps: StatusItemProps[];
};
