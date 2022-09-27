import PropTypes from 'prop-types';

import ReviewCongratsPropTypes from '../../../organism/review-congrats/prop-types';
import ReviewBackgroundPropTypes from '../../../atom/review-background/prop-types';
import ReviewHeaderPropTypes from '../../../organism/review-header/prop-types';
import StackedSlidesPropTypes from '../../../organism/review-stacked-slides/prop-types';
import CmPopin from '../../../molecule/cm-popin';

export const PlayerReviewPropTypes = {
  header: PropTypes.shape(ReviewHeaderPropTypes),
  stack: PropTypes.shape(StackedSlidesPropTypes),
  reviewBackgroundAriaLabel: ReviewBackgroundPropTypes['aria-label'],
  congratsProps: PropTypes.shape(ReviewCongratsPropTypes),
  popin: PropTypes.shape({...CmPopin.propTypes})
};

export type Props = PropTypes.InferProps<typeof PlayerReviewPropTypes>;
