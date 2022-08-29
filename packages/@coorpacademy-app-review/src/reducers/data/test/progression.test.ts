import test from 'ava';
import reducer from '../progression';
import {POST_PROGRESSION_SUCCESS, ReceivedProgression} from '../../../actions/api/post-progression';
import {POST_ANSWER_SUCCESS} from '../../../actions/api/post-answer';
import {postAnswerResponses, postProgressionResponse} from '../../../test/util/services.mock';

test('should have initial value', t => {
  const state = reducer(undefined, {} as ReceivedProgression);
  t.is(state, null);
});

test('should set the value of POST_PROGRESSION_SUCCESS action', t => {
  const state = reducer(null, {
    type: POST_PROGRESSION_SUCCESS,
    payload: postProgressionResponse
  });
  t.deepEqual(state, postProgressionResponse);
});

test('should set the value of POST_ANSWER_SUCCESS action', t => {
  const state = reducer(null, {
    type: POST_ANSWER_SUCCESS,
    payload: postAnswerResponses.sli_VJYjJnJhg
  });
  t.deepEqual(state, postAnswerResponses.sli_VJYjJnJhg);
});
