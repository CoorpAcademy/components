import test from 'ava';
import {createTestStore} from '../../test/create-test-store';
import {services} from '../../../test/util/services.mock';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
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
          ref: 'sli_VJYjJnJhg',
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
    slides: {
      sli_VJYjJnJhg: freeTextSlide
    },
    skills: [],
    token: '1234'
  },
  ui: {
    currentSlideRef: 'sli_VJYjJnJhg',
    navigation: [],
    answers: []
  }
};

test('should dispatch EDIT_BASIC action when editAnswer is called', async t => {
  const expectedActions = [{type: ANSWER_EDIT.basic, payload: ['My Answer']}];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);
  await dispatch(editAnswer('My Answer'));
});
