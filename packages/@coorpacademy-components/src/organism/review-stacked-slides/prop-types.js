import PropTypes from 'prop-types';
import ReviewSlideProps, {SlideProp} from '../review-slide/prop-types';

export default {
  validateButton: ReviewSlideProps.validateButton,
  correctionPopinProps: ReviewSlideProps.correctionPopinProps,
  slides: PropTypes.shape({
    '0': SlideProp,
    '1': SlideProp,
    '2': SlideProp,
    '3': SlideProp,
    '4': SlideProp
  }),
  endReview: PropTypes.bool,
  finishedSlides: PropTypes.shape({
    '0': PropTypes.bool,
    '1': PropTypes.bool,
    '2': PropTypes.bool,
    '3': PropTypes.bool,
    '4': PropTypes.bool
  }),
  finishedSlidesSize: PropTypes.number,
  loadingAriaLabel: PropTypes.string
};
