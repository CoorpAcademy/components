import test from 'ava';
import get from 'lodash/fp/get';
import omit from 'lodash/fp/omit';
import identity from 'lodash/fp/identity';
import {ProgressionFromAPI} from '../../../types/common';
import {StoreState} from '../../../reducers';
import {mapStateToSlidesProps} from '..';
import {services, translate} from '../../../test/util/services.mock';
import {createTestStore} from '../../../actions/test/create-test-store';
import {EDIT_SLIDER} from '../../../actions/ui/answers';
import {QuestionRange} from '../../../types/slides';
import {sliderSlide} from './fixtures/slider';

const connectedOptions = {translate, onQuitClick: identity};
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
    rank: {start: 10, end: Number.NaN}
  },
  ui: {
    showCongrats: false,
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
    },
    showQuitPopin: false,
    showButtonRevising: false
  }
};

test('should dispatch EDIT_SLIDER action via the property onSliderChange of a Slider slide', t => {
  t.plan(2);

  const expectedActions = [
    {
      type: EDIT_SLIDER,
      meta: {slideRef: sliderSlide._id},
      payload: ['111']
    }
  ];
  const {dispatch, getState} = createTestStore(t, initialState, {services}, expectedActions);
  const props = mapStateToSlidesProps(getState(), dispatch, connectedOptions);

  const slideProps = props.stack.slides['0'].answerUI?.model as QuestionRange;
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    position: 0,
    loading: false,
    parentContentTitle: '___Content Parent Title',
    questionText:
      'En combien d’années la communauté de communes du Thouarsais est-elle passée de zéro à un tiers d’énergies renouvelables ?'
  });
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const onSliderChange = get('onSliderChange', slideProps)!;
  onSliderChange(111);
});
