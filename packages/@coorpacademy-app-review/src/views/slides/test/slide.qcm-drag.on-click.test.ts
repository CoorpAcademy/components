import test from 'ava';
import omit from 'lodash/fp/omit';
import get from 'lodash/fp/get';
import identity from 'lodash/fp/identity';
import {mapStateToSlidesProps} from '..';
import {ProgressionFromAPI} from '../../../types/common';
import {services, translate} from '../../../test/util/services.mock';
import {createTestStore} from '../../../actions/test/create-test-store';
import {StoreState} from '../../../reducers';
import {EDIT_QCM_DRAG} from '../../../actions/ui/answers';
import {QcmDrag} from '../../../types/slides';
import {qcmDragSlide} from './fixtures/qcm-drag';

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
    skills: [],
    token: '1234',
    corrections: {},
    rank: {start: 10, end: Number.NaN},
    currentSkill: {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'}
  },
  ui: {
    showCongrats: false,
    currentSlideRef: qcmDragSlide._id,
    navigation: ['skills', 'slides'],
    positions: [0, 1, 2, 3, 4],
    answers: {},
    slide: {
      [qcmDragSlide._id]: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false
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
  const {dispatch, getState} = createTestStore(t, initialState, {services}, expectedActions);

  const props = mapStateToSlidesProps(getState(), dispatch, connectedOptions);
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Using redux" chapter',
    questionText: "Remettez dans l'ordre les quatre étapes du burn out."
  });

  const SlideProps = props.stack.slides['0'].answerUI?.model as QcmDrag;
  const onClick = get(['0', 'onClick'], SlideProps.answers);
  onClick();
});
