import PropTypes from 'prop-types';
import ReviewSlideProps, {SlideProp} from '../review-slide/prop-types';

const propTypes = {
  validateButton: ReviewSlideProps.validateButton,
  correctionPopinProps: ReviewSlideProps.correctionPopinProps,
  slides: PropTypes.shape({
    '0': SlideProp,
    '1': SlideProp,
    '2': SlideProp,
    '3': SlideProp,
    '4': SlideProp
  }).isRequired,
  endReview: PropTypes.bool
};

export default propTypes;

export type Props = PropTypes.InferProps<typeof propTypes>;
