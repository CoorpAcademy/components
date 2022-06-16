import omit from 'lodash/fp/omit';
import oneRightState from './one-right';

const props = oneRightState.props;

export default {
  props: {
    ...omit(['slides'], props),
    slides: {
      ...props.slides,
      0: {
        ...props.slides[0],
        validationResult: 'success',
        // exitNode: '',
        endReview: true
      }
    }
  }
};
