import test from 'ava';
import reducer from '../progression';
import {
  POST_PROGRESSION_REQUEST,
  POST_PROGRESSION_SUCCESS,
  ReceivedProgression
} from '../../../actions/api/post-progression';
import {POST_ANSWER_SUCCESS} from '../../../actions/api/post-answer';
import {postAnswerResponses, postProgressionResponse} from '../../../test/util/services.mock';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {templateSlide} from '../../../views/slides/test/fixtures/template';

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
    meta: {slideRef: freeTextSlide.universalRef},
    payload: postAnswerResponses[freeTextSlide.universalRef]
  });
  t.deepEqual(state, postAnswerResponses[freeTextSlide.universalRef]);
});

test('should have an initial value when POST_PROGRESSION_REQUEST action is received', t => {
  const state = reducer(postAnswerResponses[templateSlide.universalRef], {
    type: POST_PROGRESSION_REQUEST
  });
  t.is(state, null);
});
