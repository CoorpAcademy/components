import PropTypes from 'prop-types';

import ReviewCongratsPropTypes from '../../../organism/review-congrats/prop-types';
import ReviewBackgroundPropTypes from '../../../atom/review-background/prop-types';
import ReviewHeaderPropTypes from '../../../organism/review-header/prop-types';
import StackedSlidesPropTypes from '../../../organism/review-stacked-slides/prop-types';

export const PlayerReviewPropTypes = {
  header: PropTypes.shape(ReviewHeaderPropTypes),
  stack: PropTypes.shape(StackedSlidesPropTypes),
  reviewBackgroundAriaLabel: ReviewBackgroundPropTypes['aria-label'],
  congratsProps: PropTypes.shape(ReviewCongratsPropTypes)
};

export type Props = PropTypes.InferProps<typeof PlayerReviewPropTypes>;
