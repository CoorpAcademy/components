import test from 'ava';
import omit from 'lodash/fp/omit';
import get from 'lodash/fp/get';
import identity from 'lodash/fp/identity';
import {mapStateToSlidesProps} from '..';
import {ProgressionFromAPI} from '../../../types/common';
import {services, translate} from '../../../test/util/services.mock';
import {createTestStore} from '../../../actions/test/create-test-store';
import {StoreState} from '../../../reducers';
import {EDIT_QCM_GRAPHIC} from '../../../actions/ui/answers';
import {QcmGraphic} from '../../../types/slides';
import {qcmGraphicSlide} from './fixtures/qcm-graphic';
import {skin} from './fixtures/skin';

const connectedOptions = {translate, onQuitClick: identity, skin};
const progression: ProgressionFromAPI = {
  _id: '123456789123',
  content: {type: 'skill', ref: 'skill_NyxtYFYir'},
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
    corrections: {},
    rank: {start: 10, end: Number.NaN},
    currentSkill: {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'}
  },
  ui: {
    showCongrats: false,
    currentSlideRef: qcmGraphicSlide._id,
    navigation: ['skills', 'slides'],
    positions: [0, 1, 2, 3, 4],
    answers: {},
    slide: {
      [qcmGraphicSlide._id]: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false
      }
    },
    showQuitPopin: false,
    showButtonRevising: false
  }
};

test('should dispatch EDIT_QCM_GRAPHIC action via the property onClick of a QCM Graphic slide', t => {
  t.plan(2);

  const expectedActions = [
    {
      type: EDIT_QCM_GRAPHIC,
      meta: {slideRef: qcmGraphicSlide._id},
      payload: ['Le retour d’information']
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
    parentContentTitle:
      '__Content Parent Title{"contentTitle":"Developing the review app","contentType":"course"}',
    questionText: 'Quels sont les 4 piliers de l’apprentissage ?'
  });

  const SlideProps = props.stack.slides['0'].answerUI?.model as QcmGraphic;
  const onClick = get(['1', 'onClick'], SlideProps.answers);
  onClick();
});
