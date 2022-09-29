import test from 'ava';
import get from 'lodash/fp/get';
import identity from 'lodash/fp/identity';
import {ProgressionFromAPI} from '../../../types/common';
import {StoreState} from '../../../reducers';
import {mapStateToSlidesProps} from '..';
import {services} from '../../../test/util/services.mock';
import {createTestStore} from '../../../actions/test/create-test-store';
import {EDIT_SLIDER} from '../../../actions/ui/answers';
import {QuestionRange} from '../../../types/slides';
import {sliderSlide} from './fixtures/slider';

const progression: ProgressionFromAPI = {
  _id: '123456789123',
  content: {type: 'skill', ref: '_skill-ref'},
  engine: {
    ref: 'review'
  },
  state: {
    allAnswers: [],
    isCorrect: true,
    nextContent: {
      ref: sliderSlide._id,
      type: 'slide'
    },
    pendingSlides: [],
    slides: [],
    step: {
      current: 1
    },
    stars: 0
  }
};

const initialState: StoreState = {
  data: {
    progression,
    slides: {
      [sliderSlide._id]: sliderSlide
    },
    skills: [],
    token: '1234',
    corrections: {},
    rank: {}
  },
  ui: {
    currentSlideRef: sliderSlide._id,
    navigation: ['skills', 'slides'],
    answers: {},
    positions: [0, 1, 2, 3, 4],
    slide: {
      [sliderSlide._id]: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false
      }
    }
  }
};

test('should dispatch EDIT_SLIDER action via the property onSliderChange of a Slider slide', t => {
  t.plan(1);

  const expectedActions = [
    {
      type: EDIT_SLIDER,
      meta: {slideRef: sliderSlide._id},
      payload: ['111']
    }
  ];
  const {dispatch, getState} = createTestStore(t, initialState, services, expectedActions);
  const props = mapStateToSlidesProps(getState(), dispatch, identity);

  const SlideProps = props.stack.slides['0'].answerUI?.model as QuestionRange;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const onSliderChange = get('onSliderChange', SlideProps)!;
  onSliderChange(111);
});
