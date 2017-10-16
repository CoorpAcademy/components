import test from 'ava';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import unset from 'lodash/fp/unset';
import pipe from 'lodash/fp/pipe';
import identity from 'lodash/fp/identity';
import isFunction from 'lodash/fp/isFunction';
import {mockTranslate} from '@coorpacademy/translate';
import popinEnd from '../popin-end';

import popinLearnerSuccess from '../../test/fixtures/popin-end/learner-success';
import popinLearnerFailure from '../../test/fixtures/popin-end/learner-failure';
import popinMicrolearningFailure from '../../test/fixtures/popin-end/fail';

const options = {translate: mockTranslate};
const store = {dispatch: identity};
const getPopinEndProps = popinEnd(options, store);

test('should create a "Next Level" CTA after success on learner progression', t => {
  const props = getPopinEndProps(popinLearnerSuccess);

  const header = get('summary.header', props);
  t.is(header.rank, '+1');
  t.is(header.stars, '+2');

  const cta = get('cta', header);
  t.is(cta.title, '__Next level');
  t.true(isFunction(cta.onClick));
  t.falsy(cta.href);
});

test('should create a "Back to Home" CTA after success on learner progression with coach content', t => {
  const state = pipe(
    set(['data', 'contents', 'level', 'entities', '1.B', 'level'], 'coach'),
    unset('ui.current.nextContentRef')
  )(popinLearnerSuccess);

  const props = getPopinEndProps(state);

  const header = get('summary.header', props);
  t.is(header.rank, '+1');
  t.is(header.stars, '+2');

  const cta = get('cta', header);
  t.is(cta.title, '__Back to home');
  t.falsy(cta.onClick);
  t.is(cta.href, '/');
});

test('should create a "Back to Home" CTA after success on learner progression with content with only base level', t => {
  const state = pipe(
    unset(['data', 'contents', 'level', 'entities', '1.A']),
    set(['data', 'nextContent', '1.B'], null)
  )(popinLearnerSuccess);

  const props = getPopinEndProps(state);

  const header = get('summary.header', props);
  t.is(header.rank, '+1');
  t.is(header.stars, '+2');

  const cta = get('cta', header);
  t.is(cta.title, '__Back to home');
  t.falsy(cta.onClick);
  t.is(cta.href, '/');
});

test('should create a "Retry Level" CTA after failure on learner progression', t => {
  const props = getPopinEndProps(popinLearnerFailure);

  const header = get('summary.header', props);
  t.is(header.rank, '-1');

  const cta = get('summary.header.cta', props);
  t.is(cta.title, '__Retry level');
  t.true(isFunction(cta.onClick));
  t.falsy(cta.href);
});

test('should create a "Retry Chapter" CTA after failure on microlearning progression', t => {
  const props = getPopinEndProps(popinMicrolearningFailure);

  const header = get('summary.header', props);
  t.falsy(header.rank);
  t.falsy(header.stars);

  const cta = get('summary.header.cta', props);
  t.is(cta.title, '__Retry chapter');
  t.true(isFunction(cta.onClick));
  t.falsy(cta.href);
});
