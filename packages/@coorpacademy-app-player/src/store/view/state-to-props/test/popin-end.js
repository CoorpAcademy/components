import test from 'ava';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import identity from 'lodash/fp/identity';
import isFunction from 'lodash/fp/isFunction';
import {mockTranslate} from '@coorpacademy/translate';
import popinEnd from '../popin-end';
import {
  LOCATION_NEXT_CONTENT_REQUEST,
  LOCATION_NEXT_CONTENT_SUCCESS
} from '../../../actions/ui/location';

import popinLearnerSuccess from '../../test/fixtures/popin-end/learner-success';
import popinLearnerFailure from '../../test/fixtures/popin-end/learner-failure';
import popinMicrolearningFailure from '../../test/fixtures/popin-end/fail';

const services = {
  Location: {
    nextLevel: identity
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

  const header = get('summary.header', props);
  t.is(header.rank, '+1');
  t.is(header.stars, '+2');

  const cta = get('cta', header);
  t.is(cta.title, '__Next level');
  t.true(isFunction(cta.onClick));
  t.falsy(cta.href);
  const dispatchedHeaderCta = await cta.onClick();
  t.deepEqual(actionTypes(dispatchedHeaderCta), [
    LOCATION_NEXT_CONTENT_REQUEST,
    LOCATION_NEXT_CONTENT_SUCCESS
  ]);

  const action = get('summary.action', props);
  t.is(action.prefix, '__Next level_');
  t.is(action.title, 'La recherche en ligne - Avancé');

  const buttonCta = get('button', action);
  t.is(buttonCta.title, '__Next level');
  const dispatchedActionCta = await buttonCta.onClick();
  t.deepEqual(actionTypes(dispatchedActionCta), [
    LOCATION_NEXT_CONTENT_REQUEST,
    LOCATION_NEXT_CONTENT_SUCCESS
  ]);
});

test('should create a "Back to Home" CTA after success on learner progression with coach content', t => {
  const state = pipe(
    set(['data', 'contents', 'level', 'entities', '1.B', 'level'], 'coach'),
    set('data.recommendations.entities.idProgression1234.nextLevel', null)
  )(popinLearnerSuccess);

  const dispatch = createDispatch(state);
  const props = popinEnd(options, {dispatch})(state);

  const header = get('summary.header', props);
  t.is(header.rank, '+1');
  t.is(header.stars, '+2');

  const cta = get('cta', header);
  t.is(cta.title, '__Back to home');
  t.falsy(cta.onClick);
  t.is(cta.href, '/');

  const action = get('summary.action', props);
  const buttonCta = get('button', action);
  t.falsy(buttonCta);
});

test('should create a "Back to Home" CTA after success on learner progression with content with only base level', t => {
  const state = set(
    ['data', 'recommendations', 'entities', 'idProgression1234', 'nextLevel'],
    null,
    popinLearnerSuccess
  );

  const dispatch = createDispatch(state);
  const props = popinEnd(options, {dispatch})(state);

  const header = get('summary.header', props);
  t.is(header.rank, '+1');
  t.is(header.stars, '+2');

  const cta = get('cta', header);
  t.is(cta.title, '__Back to home');
  t.falsy(cta.onClick);
  t.is(cta.href, '/');
});

test('should create a "Retry Level" CTA after failure on learner progression', t => {
  const dispatch = createDispatch(popinLearnerFailure);
  const props = popinEnd(options, {dispatch})(popinLearnerFailure);

  const header = get('summary.header', props);
  t.is(header.rank, '-1');

  const cta = get('summary.header.cta', props);
  t.is(cta.title, '__Retry level');
  t.true(isFunction(cta.onClick));
  t.falsy(cta.href);
});

test('should create a "Retry Chapter" CTA after failure on microlearning progression', t => {
  const dispatch = createDispatch(popinMicrolearningFailure);
  const props = popinEnd(options, {dispatch})(popinMicrolearningFailure);

  const header = get('summary.header', props);
  t.falsy(header.rank);
  t.falsy(header.stars);

  const cta = get('summary.header.cta', props);
  t.is(cta.title, '__Retry chapter');
  t.true(isFunction(cta.onClick));
  t.falsy(cta.href);
});
