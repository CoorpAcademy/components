import test from 'ava';
import omit from 'lodash/fp/omit';
import get from 'lodash/fp/get';
import identity from 'lodash/fp/identity';
import type {ProgressionFromAPI} from '@coorpacademy/review-services';
import {SKILL_REF_FOR_DEFAULT_SLIDES} from '@coorpacademy/review-services-mocks';
import {mapStateToSlidesProps} from '..';
import {createTestStore} from '../../../actions/test/create-test-store';
import {StoreState} from '../../../reducers';
import {EDIT_QCM_DRAG} from '../../../actions/ui/answers';
import {QcmDrag} from '../../../types/slides';
import {translate} from '../../../test/utils/translation.mock';
import {skin} from './fixtures/skin';
import {qcmDragSlide} from './fixtures/qcm-drag';

const connectedOptions = {
  translate,
  onQuitClick: identity,
  skin,
  onStartProgression: identity,
  onEndProgression: identity
};

const progression: ProgressionFromAPI = {
  _id: '123456789123',
  content: {type: 'skill', ref: '_skill-ref'},
  engine: {
    ref: 'review',
    version: '1'
  },
  state: {
    allAnswers: [],
    isCorrect: true,
    nextContent: {
      ref: qcmDragSlide._id,
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
      [qcmDragSlide._id]: qcmDragSlide
    },
    token: '1234',
    corrections: {},
    rank: {start: 10, end: Number.NaN},
    currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
    videos: {}
  },
  ui: {
    showCongrats: false,
    currentSlideRef: qcmDragSlide._id,
    navigation: ['slides'],
    positions: [0, 1, 2, 3, 4],
    answers: {},
    slide: {
      [qcmDragSlide._id]: {
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

test('should dispatch EDIT_QCM_DRAG action via the property onClick of a QCM Drag slide', t => {
  t.plan(2);

  const expectedActions = [
    {
      type: EDIT_QCM_DRAG,
      meta: {slideRef: qcmDragSlide._id},
      payload: ['La démoralisation']
    }
  ];

  const {dispatch, getState} = createTestStore(t, initialState, {}, expectedActions);

  const props = mapStateToSlidesProps(getState(), dispatch, connectedOptions);
  t.deepEqual(omit('answerUI', props.stack?.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    disabledContent: false,
    position: 0,
    loading: false,
    parentContentTitle:
      '__Content Parent Title{"contentTitle":"Using redux","contentType":"chapter"}',
    questionText: "Remettez dans l'ordre les quatre étapes du burn out."
  });

  const SlideProps = props.stack?.slides['0'].answerUI?.model as QcmDrag;
  const onClick = get(['0', 'onClick'], SlideProps.answers);
  onClick();
});
