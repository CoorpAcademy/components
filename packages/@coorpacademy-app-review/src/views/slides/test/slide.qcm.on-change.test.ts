import test from 'ava';
import omit from 'lodash/fp/omit';
import get from 'lodash/fp/get';
import {mapStateToSlidesProps} from '..';
import {ProgressionFromAPI} from '../../../types/common';
import {services} from '../../../test/util/services.mock';
import {createTestStore} from '../../../actions/test/create-test-store';
import {StoreState} from '../../../reducers';
import {EDIT_QCM} from '../../../actions/ui/answers';
import {Qcm} from '../../../types/slides';
import {qcmSlide} from './fixtures/qcm';

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
    token: '1234'
  },
  ui: {
    currentSlideRef: qcmSlide._id,
    navigation: ['skills', 'slides'],
    answers: [],
    slide: {
      validateButton: false
    }
  }
};

test('should dispatch EDIT_QCM action via the property onChange of a QCM slide', t => {
  t.plan(2);

  const expectedActions = [
    {
      type: EDIT_QCM,
      payload: [
        "Pour chaque transaction il existe un pourcentage fixe déterminé par le droit d'auteur du pays où se tient la vente"
      ]
    }
  ];
  const {dispatch, getState} = createTestStore(t, initialState, services, expectedActions);

  const props = mapStateToSlidesProps(getState(), dispatch);
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    hidden: false,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText: "Après la vente d'un NFT, son créateur peut-il toucher de l'argent ?"
  });

  const SlideProps = props.stack.slides['0'].answerUI?.model as Qcm;
  const onClick = get(['1', 'onClick'], SlideProps.answers);
  onClick([
    "Pour chaque transaction il existe un pourcentage fixe déterminé par le droit d'auteur du pays où se tient la vente"
  ]);
});
