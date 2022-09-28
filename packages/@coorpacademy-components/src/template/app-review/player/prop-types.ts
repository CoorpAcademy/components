import PropTypes from 'prop-types';

import ReviewCongratsPropTypes from '../../../organism/review-congrats/prop-types';
import ReviewBackgroundPropTypes from '../../../atom/review-background/prop-types';
import ReviewHeaderPropTypes from '../../../organism/review-header/prop-types';
import CmPopin from '../../../molecule/cm-popin';
import StackedSlidesPropTypes, {
  Props as StackedSlidesProps
} from '../../../organism/review-stacked-slides/prop-types';

export const PlayerReviewPropTypes = {
  header: PropTypes.shape(ReviewHeaderPropTypes),
  stack: PropTypes.shape(StackedSlidesPropTypes),
  reviewBackgroundAriaLabel: ReviewBackgroundPropTypes['aria-label'],
  congrats: PropTypes.shape(ReviewCongratsPropTypes),
  quitPopin: PropTypes.shape({...CmPopin.propTypes})
};

// export type Props = PropTypes.InferProps<typeof PlayerReviewPropTypes> ;

export type Props = {
  header: PropTypes.InferProps<typeof ReviewHeaderPropTypes>;
  stack: StackedSlidesProps;
  reviewBackgroundAriaLabel: string;
  congratsProps: PropTypes.InferProps<typeof ReviewCongratsPropTypes>;
};
