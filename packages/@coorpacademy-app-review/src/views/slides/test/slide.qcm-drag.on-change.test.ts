import test from 'ava';
import omit from 'lodash/fp/omit';
import get from 'lodash/fp/get';
import {mapStateToSlidesProps} from '..';
import {ProgressionFromAPI} from '../../../types/common';
import {services} from '../../../test/util/services.mock';
import {createTestStore} from '../../../actions/test/create-test-store';
import {StoreState} from '../../../reducers';
import {EDIT_QCM_DRAG} from '../../../actions/ui/answers';
import {QcmDrag} from '../../../types/slides';
import {qcmDragSlide} from './fixtures/qcm-drag';

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
    corrections: {}
  },
  ui: {
    currentSlideRef: qcmDragSlide._id,
    navigation: ['skills', 'slides'],
    answers: [],
    slide: {
      validateButton: false
    }
  }
};

test('should dispatch EDIT_QCM_DRAG action via the property onChange of a QCM Drag slide', t => {
  t.plan(2);

  const expectedActions = [
    {
      type: EDIT_QCM_DRAG,
      payload: ['La démoralisation']
    }
  ];
  const {dispatch, getState} = createTestStore(t, initialState, services, expectedActions);

  const props = mapStateToSlidesProps(getState(), dispatch);
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    hidden: false,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Using redux" chapter',
    questionText: "Remettez dans l'ordre les quatre étapes du burn out."
  });

  const SlideProps = props.stack.slides['0'].answerUI?.model as QcmDrag;
  const onClick = get(['0', 'onClick'], SlideProps.answers);
  onClick();
});
