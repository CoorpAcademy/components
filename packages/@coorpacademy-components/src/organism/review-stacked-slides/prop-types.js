import omit from 'lodash/fp/omit';
import SlidePropTypes from '../review-slide/prop-types';

export default omit('slideIndex', SlidePropTypes);
