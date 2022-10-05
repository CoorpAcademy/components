import Header from '../../../../../organism/review-header/test/fixtures/current-question-wrong';
import WrongStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/wrong';

import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
};

const fixture: Fixture = {
  props: {
    header: {
      ...Header.props,
      steps: [
        {
          icon: 'right',
          current: false,
          value: '1'
        },
        {
          icon: 'right',
          current: false,
          value: '2'
        },
        {
          icon: 'wrong',
          current: true,
          value: '3'
        },
        {
          icon: 'no-answer',
          current: false,
          value: '4'
        },
        {
          icon: 'no-answer',
          current: false,
          value: '5'
        }
      ]
    },
    stack: WrongStackedSlides.props,
    reviewBackgroundAriaLabel: 'image background'
  }
};

export default fixture;
