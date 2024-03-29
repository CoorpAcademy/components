import test from 'ava';
import get from 'lodash/fp/get';
import omit from 'lodash/fp/omit';
import identity from 'lodash/fp/identity';
import type {ProgressionFromAPI} from '@coorpacademy/review-services';
import {SKILL_REF_FOR_DEFAULT_SLIDES} from '@coorpacademy/review-services-mocks';
import {StoreState} from '../../../reducers';
import {mapStateToSlidesProps} from '..';
import {createTestStore} from '../../../actions/test/create-test-store';
import {EDIT_SLIDER} from '../../../actions/ui/answers';
import {QuestionRange} from '../../../types/slides';
import {translate} from '../../../test/utils/translation.mock';
import {sliderSlide} from './fixtures/slider';
import {skin} from './fixtures/skin';

const connectedOptions = {
  translate,
  onQuitClick: identity,
  skin,
  onStartProgression: identity,
  onEndProgression: identity
};

const progression: ProgressionFromAPI = {
  _id: '123456789123',
  content: {type: 'skill', ref: SKILL_REF_FOR_DEFAULT_SLIDES},
  engine: {
    ref: 'review',
    version: '1'
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
    token: '1234',
    corrections: {},
    rank: {start: 10, end: Number.NaN},
    currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
    videos: {}
  },
  ui: {
    showCongrats: false,
    currentSlideRef: sliderSlide._id,
    navigation: ['slides'],
    answers: {},
    positions: [0, 1, 2, 3, 4],
    slide: {
      [sliderSlide._id]: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false,
        pendingAnswerRequest: false
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
  const {dispatch, getState} = createTestStore(t, initialState, {}, expectedActions);
  const props = mapStateToSlidesProps(getState(), dispatch, connectedOptions);

  const slideProps = props.stack?.slides['0'].answerUI?.model as QuestionRange;
  t.deepEqual(omit('answerUI', props.stack?.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    disabledContent: false,
    position: 0,
    loading: false,
    parentContentTitle:
      '__Content Parent Title{"contentTitle":"Developing the review app","contentType":"course"}',
    questionText:
      'En combien d’années la communauté de communes du Thouarsais est-elle passée de zéro à un tiers d’énergies renouvelables ?'
  });
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const onSliderChange = get('onSliderChange', slideProps)!;
  onSliderChange(111);
});
