import test from 'ava';
import {
  postProgressionResponse,
  SKILL_REF_FOR_DEFAULT_SLIDES
} from '@coorpacademy/review-services-mocks';
import reducer from '../progression';
import {
  POST_PROGRESSION_REQUEST,
  POST_PROGRESSION_SUCCESS,
  ReceivedProgression
} from '../../../actions/api/post-progression';
import {POST_ANSWER_SUCCESS} from '../../../actions/api/post-answer';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {templateSlide} from '../../../views/slides/test/fixtures/template';
import {postAnswerResponses} from '../../../test/fixtures';

test('should have initial value', t => {
  const state = reducer(undefined, {} as ReceivedProgression);
  t.is(state, null);
});

test('should set the value of POST_PROGRESSION_SUCCESS action', t => {
  const mockedProgression = postProgressionResponse(SKILL_REF_FOR_DEFAULT_SLIDES);
  const state = reducer(null, {
    type: POST_PROGRESSION_SUCCESS,
    payload: mockedProgression
  });
  t.deepEqual(state, mockedProgression);
});

test('should set the value of POST_ANSWER_SUCCESS action', t => {
  const state = reducer(null, {
    type: POST_ANSWER_SUCCESS,
    meta: {slideRef: freeTextSlide.universalRef},
    payload: postAnswerResponses[freeTextSlide.universalRef]
  });
  t.deepEqual(state, postAnswerResponses[freeTextSlide.universalRef]);
});

test('should set the initial value when POST_PROGRESSION_REQUEST action is received', t => {
  const state = reducer(postAnswerResponses[templateSlide.universalRef], {
    type: POST_PROGRESSION_REQUEST
  });
  t.is(state, null);
});
