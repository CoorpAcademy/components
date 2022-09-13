import test from 'ava';
import omit from 'lodash/fp/omit';
import get from 'lodash/fp/get';
import {mapStateToSlidesProps} from '..';
import {ProgressionFromAPI} from '../../../types/common';
import {services} from '../../../test/util/services.mock';
import {createTestStore} from '../../../actions/test/create-test-store';
import {StoreState} from '../../../reducers';
import {EDIT_QCM_GRAPHIC} from '../../../actions/ui/answers';
import {QcmGraphic} from '../../../types/slides';
import {qcmGraphicSlide} from './fixtures/qcm-graphic';

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
      ref: qcmGraphicSlide._id,
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
      [qcmGraphicSlide._id]: qcmGraphicSlide
    },
    skills: [],
    token: '1234',
    corrections: {}
  },
  ui: {
    currentSlideRef: qcmGraphicSlide._id,
    navigation: ['skills', 'slides'],
    answers: [],
    slide: {
      validateButton: false
    }
  }
};

test('should dispatch EDIT_QCM_GRAPHIC action via the property onClick of a QCM Graphic slide', t => {
  t.plan(2);

  const expectedActions = [
    {
      type: EDIT_QCM_GRAPHIC,
      payload: ['Le retour d’information']
    }
  ];
  const {dispatch, getState} = createTestStore(t, initialState, services, expectedActions);

  const props = mapStateToSlidesProps(getState(), dispatch);
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    hidden: false,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText: 'Quels sont les 4 piliers de l’apprentissage ?'
  });

  const SlideProps = props.stack.slides['0'].answerUI?.model as QcmGraphic;
  const onClick = get(['1', 'onClick'], SlideProps.answers);
  onClick();
});
