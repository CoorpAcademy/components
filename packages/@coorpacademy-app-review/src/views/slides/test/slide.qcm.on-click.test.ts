import test from 'ava';
import omit from 'lodash/fp/omit';
import get from 'lodash/fp/get';
import identity from 'lodash/fp/identity';
import {ProgressionFromAPI} from '@coorpacademy/review-services/es/types/services-types';
import {services, translate} from '@coorpacademy/review-services/es/mock/services.mock';
import {qcmSlide} from '@coorpacademy/review-services/es/mock/fixtures/qcm';
import {mapStateToSlidesProps} from '..';
import {createTestStore} from '../../../actions/test/create-test-store';
import {StoreState} from '../../../reducers';
import {EDIT_QCM} from '../../../actions/ui/answers';
import {Qcm} from '../../../types/slides';
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
      ref: qcmSlide._id,
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
      [qcmSlide._id]: qcmSlide
    },
    skills: [],
    token: '1234',
    corrections: {},
    rank: {start: 10, end: Number.NaN},
    currentSkill: {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'}
  },
  ui: {
    showCongrats: false,
    currentSlideRef: qcmSlide._id,
    navigation: ['skills', 'slides'],
    positions: [0, 1, 2, 3, 4],
    answers: {},
    slide: {
      [qcmSlide._id]: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false
      }
    },
    showQuitPopin: false,
    showButtonRevising: false
  }
};

test('should dispatch EDIT_QCM action via the property onClick of a QCM slide', t => {
  t.plan(2);

  const expectedActions = [
    {
      type: EDIT_QCM,
      meta: {slideRef: qcmSlide._id},
      payload: [
        "Pour chaque transaction il existe un pourcentage fixe déterminé par le droit d'auteur du pays où se tient la vente"
      ]
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
    questionText: "Après la vente d'un NFT, son créateur peut-il toucher de l'argent ?"
  });

  const SlideProps = props.stack.slides['0'].answerUI?.model as Qcm;
  const onClick = get(['1', 'onClick'], SlideProps.answers);
  onClick();
});
