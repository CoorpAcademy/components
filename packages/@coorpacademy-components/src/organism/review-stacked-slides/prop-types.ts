import PropTypes from 'prop-types';
import {Props as CorrectionPopinProps} from '../../molecule/review-correction-popin/prop-types';

import ReviewSlidePropTypes, {
  Props as ReviewSlideProps,
  SlideProps,
  SlidePropsTypes
} from '../review-slide/prop-types';

const propTypes = {
  validateButton: ReviewSlidePropTypes.validateButton,
  correctionPopinProps: ReviewSlidePropTypes.correctionPopinProps,
  slides: PropTypes.shape({
    '0': SlidePropsTypes,
    '1': SlidePropsTypes,
    '2': SlidePropsTypes,
    '3': SlidePropsTypes,
    '4': SlidePropsTypes
  }).isRequired,
  endReview: PropTypes.bool
};

export default propTypes;

export type Props = {
  validateButton: ReviewSlideProps['validateButton'];
  correctionPopinProps?: CorrectionPopinProps;
  slides: {[key: string]: SlideProps};
  endReview: boolean;
};
