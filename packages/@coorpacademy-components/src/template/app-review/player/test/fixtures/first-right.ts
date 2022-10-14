import FirstCorrectStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/first-correct';
import Header from '../../../../../organism/review-header/test/fixtures/first-question-current-right';
import {ReviewPlayerProps} from '../../prop-types';

type Fixture = {
  props: ReviewPlayerProps;
};

const fixture: Fixture = {
  props: {
    header: Header.props,
    stack: FirstCorrectStackedSlides.props,
    reviewBackgroundAriaLabel: 'image background'
  }
};

export default fixture;
