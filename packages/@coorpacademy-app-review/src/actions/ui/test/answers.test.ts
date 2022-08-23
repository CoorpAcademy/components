import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import {SlideFromAPI} from '../../../types/common';
import {createTestStore} from '../../test/create-test-store';
import {services} from '../../../test/util/services.mock';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {qcmSlide} from '../../../views/slides/test/fixtures/qcm';
import {qcmGraphicSlide} from '../../../views/slides/test/fixtures/qcm-graphic';
import {StoreState} from '../../../reducers';
import {editAnswer, ANSWER_EDIT} from '../answers';

const initialState: StoreState = {
  data: {
    progression: {
      _id: '62b1d1087aa12f00253f40ee',
      content: {
        ref: '_skill-ref',
        type: 'skill'
      },
      engine: {
        ref: 'review'
      },
      state: {
        allAnswers: [],
        isCorrect: true,
        nextContent: {
          ref: '',
          type: 'slide'
        },
        pendingSlides: [],
        slides: [],
        step: {
          current: 1
        },
        stars: 0
      }
    },
    slides: {},
    skills: [],
    token: '1234'
  },
  ui: {
    currentSlideRef: '',
    navigation: [],
    answers: []
  }
};

const buildInitialState = (state: StoreState, question: SlideFromAPI): StoreState => {
  return pipe(
    set(['data', 'progression', 'state', 'nextContent', 'ref'], question.id),
    set(['data', 'slides', question.id], question),
    set(['ui', 'currentSlideRef'], question.id)
  )(state);
};

test('should dispatch EDIT_BASIC action when editAnswer is called', async t => {
  const state = buildInitialState(initialState, freeTextSlide);
  const expectedActions = [{type: ANSWER_EDIT.basic, payload: ['My Answer']}];
  const {dispatch} = createTestStore(t, state, services, expectedActions);
  await dispatch(editAnswer('My Answer'));
});

test('should dispatch EDIT_QCM action when editAnswer is called', async t => {
  let state = buildInitialState(initialState, qcmSlide);
  state = set(['ui', 'answers'], ['My First Answer', 'My Second Answer'], state);
  const expectedActions = [{type: ANSWER_EDIT.qcm, payload: ['My First Answer']}];
  const {dispatch} = createTestStore(t, state, services, expectedActions);
  await dispatch(editAnswer('My Second Answer'));
});

test('should dispatch EDIT_QCM_GRAPHIC action when editAnswer is called', async t => {
  let state = buildInitialState(initialState, qcmGraphicSlide);
  state = set(['ui', 'answers'], ['My First Answer', 'My Second Answer', 'My Third Answer'], state);
  const expectedActions = [
    {type: ANSWER_EDIT.qcmGraphic, payload: ['My First Answer', 'My Third Answer']}
  ];
  const {dispatch} = createTestStore(t, state, services, expectedActions);
  await dispatch(editAnswer('My Second Answer'));
});
