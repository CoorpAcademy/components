import test from 'ava';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import omit from 'lodash/fp/omit';
import isFunction from 'lodash/fp/isFunction';
import {mockTranslate} from '@coorpacademy/translate';
import microlearningHeader from '../../map-state-to-props/test/fixtures/progression-state';
import learnerHeader from '../../map-state-to-props/test/fixtures/progression-learner';
import stateSlide from '../../map-state-to-props/test/fixtures/player/slide';
import stateNoClue from '../../map-state-to-props/test/fixtures/player/no-clue';
import stateClue from '../../map-state-to-props/test/fixtures/player/clue';
import stateLoadingClue from '../../map-state-to-props/test/fixtures/player/loading-clue';
import stateToVNode from './helpers/state-to-vnode';
import testRendering from './helpers/render';

const options = {translate: mockTranslate};
const store = {dispatch: identity};
const mapStateToVNode = stateToVNode(options, store);

test('should display microlearning header', t => {
  const vNode = mapStateToVNode(microlearningHeader);
  testRendering(vNode);
  const {props: {player: {header: headerProps}}} = vNode;

  t.is(headerProps.type, 'microlearning');
  t.is(headerProps.content.title, 'Les réseaux sociaux au service du crowdfunding');
  t.is(headerProps.subcontent, null);
  t.deepEqual(headerProps.lives, {count: 3});

  const onClick = headerProps.content.onClick;
  t.true(isFunction(onClick));
  const actionOnClick = onClick();
  t.true(isFunction(actionOnClick));
});

test('should display learner header with chapter num', t => {
  const vNode = mapStateToVNode(learnerHeader);
  testRendering(vNode);
  const {props: {player: {header: headerProps}}} = vNode;

  t.is(headerProps.type, 'learner');
  t.is(headerProps.content.title, 'level1');
  t.is(headerProps.content.details, 'base-translation');
  t.is(headerProps.subcontent.title, 'chapter2!');
  t.is(headerProps.subcontent.details, '2/2');
  t.deepEqual(headerProps.lives, {count: 3});

  const onClick = headerProps.content.onClick;
  t.true(isFunction(onClick));
  const actionOnClick = onClick();
  t.true(isFunction(actionOnClick));
});

test('should display learner header with no chapter nums', t => {
  const state = omit('data.contents.level.entities.1.chapterIds', learnerHeader);

  const vNode = mapStateToVNode(state);
  testRendering(vNode);
  const {props: {player: {header: headerProps}}} = vNode;

  t.is(headerProps.type, 'learner');
  t.is(headerProps.content.title, 'level1');
  t.is(headerProps.content.details, 'base-translation');
  t.is(headerProps.subcontent.title, 'chapter2!');
  t.is(headerProps.subcontent.details, null);
  t.deepEqual(headerProps.lives, {count: 3});

  const onClick = headerProps.content.onClick;
  t.true(isFunction(onClick));
  const actionOnClick = onClick();
  t.true(isFunction(actionOnClick));
});

test('should display slide', async t => {
  const vNode = mapStateToVNode(stateSlide);
  testRendering(vNode);
  const {props: {player: playerProps}} = vNode;

  t.is(playerProps.typeClue, 'answer');
  t.is(playerProps.text, null);

  t.deepEqual(playerProps.step, {current: 2, total: 4});

  t.is(playerProps.question, "Écrivez le mot Text dans l'input.\n");
  t.deepEqual(omit('onClick', playerProps.cta), {
    submitValue: '__Validate',
    disabled: true,
    name: 'validateAnswerCTA',
    light: false,
    small: false,
    secondary: false
  });
  await t.notThrows(playerProps.cta.onClick);
  t.is(playerProps.help, 'Saisissez votre réponse.');
  t.truthy(playerProps.answerType);

  t.deepEqual(map(omit('onClick'), playerProps.buttons), [
    {
      title: '__Question',
      type: 'question',
      selected: true
    },
    {
      notify: true,
      disabled: false,
      title: '__Media',
      type: 'media',
      selected: false
    },
    {
      title: '__Clue',
      type: 'clue',
      selected: false,
      disabled: false
    },
    {
      disabled: true,
      title: '__Coach',
      type: 'coach'
    }
  ]);

  return Promise.all(map(button => t.notThrows(button.onClick), playerProps.buttons));
});

test('should display loading clue', async t => {
  const vNode = mapStateToVNode(stateLoadingClue);
  testRendering(vNode);
  const {props: {player: playerProps}} = vNode;

  t.is(playerProps.typeClue, 'clue');
  t.is(playerProps.text, null);

  t.deepEqual(playerProps.step, {current: 1, total: 1});

  t.is(playerProps.question, "Écrivez le mot Text dans l'input.\n");
  t.deepEqual(omit('onClick', playerProps.cta), {
    submitValue: '__Back to question',
    name: 'backToQuestionCTA',
    light: false,
    small: false,
    secondary: true,
    disabled: false
  });
  await t.notThrows(playerProps.cta.onClick);
  t.is(playerProps.help, 'Saisissez votre réponse.');
  t.truthy(playerProps.answerType);

  t.deepEqual(map(omit('onClick'), playerProps.buttons), [
    {
      title: '__Question',
      type: 'question',
      selected: false
    },
    {
      notify: true,
      disabled: false,
      title: '__Media',
      type: 'media',
      selected: false
    },
    {
      title: '__Clue',
      type: 'clue',
      selected: true,
      disabled: false
    },
    {
      disabled: true,
      title: '__Coach',
      type: 'coach'
    }
  ]);

  return Promise.all(map(button => t.notThrows(button.onClick), playerProps.buttons));
});

test('should display clue', async t => {
  const vNode = mapStateToVNode(stateClue);
  testRendering(vNode);
  const {props: {player: playerProps}} = vNode;

  t.is(playerProps.typeClue, 'clue');
  t.is(playerProps.text, 'Clue');

  t.deepEqual(playerProps.step, {current: 2, total: 4});

  t.is(playerProps.question, "Écrivez le mot Text dans l'input.\n");
  t.deepEqual(omit('onClick', playerProps.cta), {
    submitValue: '__Back to question',
    name: 'backToQuestionCTA',
    light: false,
    small: false,
    secondary: true,
    disabled: false
  });
  await t.notThrows(playerProps.cta.onClick);
  t.is(playerProps.help, 'Saisissez votre réponse.');
  t.truthy(playerProps.answerType);

  t.deepEqual(map(omit('onClick'), playerProps.buttons), [
    {
      title: '__Question',
      type: 'question',
      selected: false
    },
    {
      notify: true,
      disabled: false,
      title: '__Media',
      type: 'media',
      selected: false
    },
    {
      title: '__Clue',
      type: 'clue',
      selected: true,
      disabled: false
    },
    {
      disabled: true,
      title: '__Coach',
      type: 'coach'
    }
  ]);

  return Promise.all(map(button => t.notThrows(button.onClick), playerProps.buttons));
});

test('should disable clue button if slide has no clue', t => {
  const vNode = mapStateToVNode(stateNoClue);
  testRendering(vNode);
  const {props: {player: playerProps}} = vNode;

  t.deepEqual(map(omit('onClick'), playerProps.buttons), [
    {
      title: '__Question',
      type: 'question',
      selected: true
    },
    {
      notify: true,
      disabled: false,
      title: '__Media',
      type: 'media',
      selected: false
    },
    {
      title: '__Clue',
      type: 'clue',
      selected: false,
      disabled: true
    },
    {
      disabled: true,
      title: '__Coach',
      type: 'coach'
    }
  ]);

  return Promise.all(map(button => t.notThrows(button.onClick), playerProps.buttons));
});
