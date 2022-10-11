import test from 'ava';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import omit from 'lodash/fp/omit';
import {Question, SlideFromAPI} from '../../../types/common';
import {createTestStore} from '../../test/create-test-store';
import {services} from '../../../test/util/services.mock';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {qcmDragSlide} from '../../../views/slides/test/fixtures/qcm-drag';
import {qcmSlide} from '../../../views/slides/test/fixtures/qcm';
import {qcmGraphicSlide} from '../../../views/slides/test/fixtures/qcm-graphic';
import {sliderSlide} from '../../../views/slides/test/fixtures/slider';
import {templateSlide} from '../../../views/slides/test/fixtures/template';

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
    token: '1234',
    lambdaReviewURL: 'http://localhost:7006',
    corrections: {},
    rank: {start: 10, end: Number.NaN}
  },
  ui: {
    showCongrats: false,
    positions: [0, 1, 2, 3, 4],
    currentSlideRef: '',
    navigation: [],
    answers: {},
    slide: {},
    showQuitPopin: false
  }
};

const buildInitialState = (state: StoreState, question: SlideFromAPI): StoreState => {
  return pipe(
    set(['data', 'progression', 'state', 'nextContent', 'ref'], question._id),
    set(['data', 'slides', question._id], question),
    set(['ui', 'currentSlideRef'], question._id)
  )(state);
};

test('editAnswer should throw an Error if the slide is not found', async t => {
  const state = buildInitialState(initialState, freeTextSlide);
  const expectedActions = [{type: undefined, meta: {slideRef: ''}, payload: []}];
  const {dispatch} = createTestStore(
    t,
    omit(['data', 'slides'], state) as StoreState,
    {services},
    expectedActions
  );
  await t.throws(
    () => dispatch(editAnswer(['Some kind of answer'])),
    undefined,
    'No slide was found or questionType was not found'
  );
});

test('editAnswer should throw an Error for unsupported questions', async t => {
  const state = buildInitialState(initialState, {
    ...freeTextSlide,
    question: {...freeTextSlide.question, type: 'unsupportedType'} as unknown as Question
  });
  const {dispatch} = createTestStore(t, state, {services}, []);
  await t.throws(
    () => dispatch(editAnswer(['Some kind of answer'])),
    undefined,
    'Question type unsupportedType is not supported'
  );
});

test('should dispatch EDIT_BASIC action when editAnswer is called', async t => {
  const state = buildInitialState(initialState, freeTextSlide);
  const expectedActions = [
    {type: ANSWER_EDIT.basic, meta: {slideRef: freeTextSlide.universalRef}, payload: ['My Answer']}
  ];
  const {dispatch} = createTestStore(t, state, {services}, expectedActions);
  await dispatch(editAnswer(['My Answer']));
});

test('should dispatch EDIT_QCM action when editAnswer is called', async t => {
  let state = buildInitialState(initialState, qcmSlide);
  const currentSlideRef = get(['ui', 'currentSlideRef'], state);
  state = set(['ui', 'answers', currentSlideRef], ['My First Answer', 'My Second Answer'], state);
  const expectedActions = [
    {type: ANSWER_EDIT.qcm, meta: {slideRef: qcmSlide.universalRef}, payload: ['My First Answer']}
  ];
  const {dispatch} = createTestStore(t, state, {services}, expectedActions);
  await dispatch(editAnswer(['My Second Answer']));
});

test('should dispatch EDIT_QCM_GRAPHIC action when editAnswer is called', async t => {
  let state = buildInitialState(initialState, qcmGraphicSlide);
  const currentSlideRef = get(['ui', 'currentSlideRef'], state);
  state = set(
    ['ui', 'answers', currentSlideRef],
    ['My First Answer', 'My Second Answer', 'My Third Answer'],
    state
  );
  const expectedActions = [
    {
      type: ANSWER_EDIT.qcmGraphic,
      meta: {slideRef: qcmGraphicSlide.universalRef},
      payload: ['My First Answer', 'My Third Answer']
    }
  ];
  const {dispatch} = createTestStore(t, state, {services}, expectedActions);
  await dispatch(editAnswer(['My Second Answer']));
});

test('should dispatch EDIT_QCM_DRAG action when editAnswer is called', async t => {
  let state = buildInitialState(initialState, qcmDragSlide);
  const currentSlideRef = get(['ui', 'currentSlideRef'], state);
  state = set(['ui', 'answers', currentSlideRef], ['My First Answer', 'My Second Answer'], state);
  const expectedActions = [
    {
      type: ANSWER_EDIT.qcmDrag,
      meta: {slideRef: qcmDragSlide.universalRef},
      payload: ['My First Answer', 'My Second Answer', 'My Third Answer']
    }
  ];
  const {dispatch} = createTestStore(t, state, {services}, expectedActions);
  await dispatch(editAnswer(['My Third Answer']));
});

test('should dispatch EDIT_SLIDER action when editAnswer is called', async t => {
  const state = buildInitialState(initialState, sliderSlide);
  const expectedActions = [
    {type: ANSWER_EDIT.slider, meta: {slideRef: sliderSlide.universalRef}, payload: ['5']}
  ];
  const {dispatch} = createTestStore(t, state, {services}, expectedActions);
  await dispatch(editAnswer(['5']));
});

test('should dispatch EDIT_TEMPLATE action when editAnswer is called', async t => {
  let state = buildInitialState(initialState, templateSlide);
  state = set(['ui', 'answers'], ['Catalogue', '', 'étoiles'], state);
  const expectedActions = [
    {
      type: ANSWER_EDIT.template,
      meta: {slideRef: templateSlide.universalRef},
      payload: ['Catalogue', 'My Answer', 'étoiles']
    }
  ];
  const {dispatch} = createTestStore(t, state, {services}, expectedActions);
  await dispatch(editAnswer(['Catalogue', 'My Answer', 'étoiles']));
});
