import PropTypes from 'prop-types';
import ReviewSlideProps, {SlidePropsTypes} from '../review-slide/prop-types';

const propTypes = {
  validateButton: ReviewSlideProps.validateButton,
  correctionPopinProps: ReviewSlideProps.correctionPopinProps,
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

export type Props = PropTypes.InferProps<typeof propTypes>;
