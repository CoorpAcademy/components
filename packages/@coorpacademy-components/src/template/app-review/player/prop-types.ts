import PropTypes from 'prop-types';

import {CMPopinProps} from '../../../molecule/cm-popin/types';
import ReviewCongratsPropTypes, {CongratsProps} from '../../../organism/review-congrats/prop-types';

import ReviewBackgroundPropTypes from '../../../atom/review-background/prop-types';
import ReviewHeaderPropTypes, {HeaderProps} from '../../../organism/review-header/types';
import CmPopin from '../../../molecule/cm-popin';
import StackedSlidesPropTypes, {
  Props as StackProps
} from '../../../organism/review-stacked-slides/prop-types';

const propTypes = {
  header: PropTypes.shape(ReviewHeaderPropTypes),
  stack: PropTypes.shape(StackedSlidesPropTypes),
  reviewBackgroundAriaLabel: ReviewBackgroundPropTypes['aria-label'],
  congrats: PropTypes.shape(ReviewCongratsPropTypes),
  quitPopin: PropTypes.shape({...CmPopin.propTypes})
};

export default propTypes;

export type ReviewPlayerProps = {
  header: HeaderProps;
  stack: StackProps;
  reviewBackgroundAriaLabel?: string;
  congrats?: CongratsProps;
  quitPopin?: CMPopinProps;
};
