import PropTypes from 'prop-types';
import type {ImageSourcePropType} from 'react-native';
import {CMPopinProps} from '../../../molecule/cm-popin/types';
import ReviewCongratsPropTypes, {
  ReviewCongratsProps
} from '../../../organism/review-congrats/prop-types';

import ReviewHeaderPropTypes, {HeaderProps} from '../../../organism/review-header/types';
import CmPopin from '../../../molecule/cm-popin';
import StackedSlidesPropTypes, {
  ReviewStackProps
} from '../../../organism/review-stacked-slides/prop-types';

const propTypes = {
  header: PropTypes.shape(ReviewHeaderPropTypes),
  stack: PropTypes.shape(StackedSlidesPropTypes),
  congrats: PropTypes.shape(ReviewCongratsPropTypes),
  quitPopin: PropTypes.shape({...CmPopin.propTypes})
};

export default propTypes;

export type ReviewPlayerProps = {
  header: HeaderProps;
  stack: ReviewStackProps | null;
  backgroundImage?: ImageSourcePropType;
  congrats?: ReviewCongratsProps;
  quitPopin?: CMPopinProps;
};
