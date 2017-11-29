import test from 'ava';
import map from 'lodash/fp/map';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import identity from 'lodash/fp/identity';
import isFunction from 'lodash/fp/isFunction';
import {mockTranslate} from '@coorpacademy/translate';
import popinEnd from '../popin-end';
import {
  LOCATION_NEXT_CONTENT_REQUEST,
  LOCATION_NEXT_CONTENT_SUCCESS,
  LOCATION_SEE_COMMENT_REQUEST,
  LOCATION_SEE_COMMENT_SUCCESS
} from '../../../actions/ui/location';
import {UI_EDIT_COMMENT, UI_POST_COMMENT} from '../../../actions/ui/comments';
import {SEND_POST_COMMENT_REQUEST, SEND_POST_COMMENT_SUCCESS} from '../../../actions/api/comments';

import popinLearnerSuccess from '../../test/fixtures/popin-end/learner-success';
import popinLearnerFailure from '../../test/fixtures/popin-end/learner-failure';
import popinMicrolearningFailure from '../../test/fixtures/popin-end/fail';

const services = {
  Comments: {
    post: identity
  },
  Location: {
    nextLevel: identity,
    seeComment: identity
  }
};

const createDispatch = state => async action => {
  const dispatched = [];
  const getState = () => state;
  const dispatch = maybeAction =>
    isFunction(maybeAction)
      ? maybeAction(dispatch, getState, {services})
      : dispatched.push(maybeAction);

  await dispatch(action);

  return dispatched;
};

const actionTypes = actions => map(({type}) => type, actions);
const options = {translate: mockTranslate};

test('should create a "Next Level" CTA after success on learner progression', async t => {
  const dispatch = createDispatch(popinLearnerSuccess);
  const props = popinEnd(options, {dispatch})(popinLearnerSuccess);

  const header = props.summary.header;
  t.is(header.rank, '+1');
  t.is(header.stars, '+2');

  const cta = header.cta;
  t.is(cta.title, '__Next level');
  t.true(isFunction(cta.onClick));
  t.falsy(cta.href);
  const dispatchedHeaderCta = await cta.onClick();
  t.deepEqual(actionTypes(dispatchedHeaderCta), [
    LOCATION_NEXT_CONTENT_REQUEST,
    LOCATION_NEXT_CONTENT_SUCCESS
  ]);

  const action = props.summary.action;
  t.is(action.prefix, '__Next level_');
  t.is(action.title, 'La recherche en ligne - Avancé');

  const buttonCta = action.button;
  t.is(buttonCta.title, '__Next level');
  const dispatchedActionCta = await buttonCta.onClick();
  t.deepEqual(actionTypes(dispatchedActionCta), [
    LOCATION_NEXT_CONTENT_REQUEST,
    LOCATION_NEXT_CONTENT_SUCCESS
  ]);
});

test('should write, send, and go see a comment after success on learner progression', async t => {
  const state = pipe(set('ui.comments.isSent', true), set('ui.comments.text', 'textToSend'))(
    popinLearnerSuccess
  );

  const dispatch = createDispatch(state);
  const props = popinEnd(options, {dispatch})(state);

  const comment = props.summary.comment;
  t.is(comment.isSent, true);
  t.is(comment.value, 'textToSend');

  const onChange = comment.onChange;
  t.true(isFunction(onChange));
  const dispatchedOnChange = await onChange({target: {value: 'foo'}});

  t.deepEqual(actionTypes(dispatchedOnChange), [UI_EDIT_COMMENT]);

  const onPost = comment.onPost;
  t.true(isFunction(onPost));
  const dispatchedOnPost = await onPost();

  t.deepEqual(actionTypes(dispatchedOnPost), [
    UI_POST_COMMENT,
    SEND_POST_COMMENT_REQUEST,
    SEND_POST_COMMENT_SUCCESS
  ]);

  const onClick = comment.onClick;
  t.true(isFunction(onClick));
  const dispatchedOnClick = await onClick();

  t.deepEqual(actionTypes(dispatchedOnClick), [
    LOCATION_SEE_COMMENT_REQUEST,
    LOCATION_SEE_COMMENT_SUCCESS
  ]);
});

test('should not see comment section when answer is not correct', t => {
  const dispatch = createDispatch(popinLearnerFailure);
  const props = popinEnd(options, {dispatch})(popinLearnerFailure);
  t.is(props.summary.comment, null);
});

test('should create a "Back to Home" CTA after success on learner progression with coach content', t => {
  const state = pipe(
    set(['data', 'contents', 'level', 'entities', '1.B', 'level'], 'coach'),
    set('data.recommendations.entities.idProgression1234.nextLevel', null)
  )(popinLearnerSuccess);

  const dispatch = createDispatch(state);
  const props = popinEnd(options, {dispatch})(state);

  const header = props.summary.header;
  t.is(header.rank, '+1');
  t.is(header.stars, '+2');

  const cta = header.cta;
  t.is(cta.title, '__Back to home');
  t.falsy(cta.onClick);
  t.is(cta.href, '/');

  t.falsy(props.summary.action);
});

test('should create a "Back to Home" CTA after success on learner progression with content with only base level', t => {
  const state = set(
    ['data', 'recommendations', 'entities', 'idProgression1234', 'nextLevel'],
    null,
    popinLearnerSuccess
  );

  const dispatch = createDispatch(state);
  const props = popinEnd(options, {dispatch})(state);

  const header = props.summary.header;
  t.is(header.rank, '+1');
  t.is(header.stars, '+2');

  const cta = header.cta;
  t.is(cta.title, '__Back to home');
  t.falsy(cta.onClick);
  t.is(cta.href, '/');
});

test('should create a "Retry Level" CTA after failure on learner progression', t => {
  const dispatch = createDispatch(popinLearnerFailure);
  const props = popinEnd(options, {dispatch})(popinLearnerFailure);

  const header = props.summary.header;
  t.is(header.rank, '-1');

  const cta = props.summary.header.cta;
  t.is(cta.title, '__Retry level');
  t.true(isFunction(cta.onClick));
  t.falsy(cta.href);

  const action = props.summary.action;
  t.is(action.prefix, '__Retry level_');
  t.is(action.title, 'La recherche en ligne - Base');

  const buttonCta = action.button;
  t.is(buttonCta.title, '__Retry level');
});

test('should create a "Retry Chapter" CTA after failure on microlearning progression', t => {
  const dispatch = createDispatch(popinMicrolearningFailure);
  const props = popinEnd(options, {dispatch})(popinMicrolearningFailure);

  const header = props.summary.header;
  t.falsy(header.rank);
  t.falsy(header.stars);

  const cta = props.summary.header.cta;
  t.is(cta.title, '__Retry chapter');
  t.true(isFunction(cta.onClick));
  t.falsy(cta.href);
});
