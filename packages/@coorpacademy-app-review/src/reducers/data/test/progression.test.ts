import test from 'ava';
import reducer from '../progression';
import {POST_PROGRESSION_SUCCESS, ReceiveProgression} from '../../../actions/api/post-progression';
import {ProgressionFromAPI} from '../../../types/common';

test('should have inital value', t => {
  const state = reducer(undefined, {} as ReceiveProgression);
  t.is(state, null);
});

test('should set the value of POST_PROGRESSION_SUCCESS action', t => {
  const progression: ProgressionFromAPI = {
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
        ref: 'sli_N1XACJobn',
        type: 'slide'
      },
      pendingSlides: [],
      slides: [],
      step: {
        current: 1
      }
    }
  };

  const state = reducer(null, {
    type: POST_PROGRESSION_SUCCESS,
    payload: progression
  });
  t.deepEqual(state, progression);
});
