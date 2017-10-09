import test from 'ava';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import omit from 'lodash/fp/omit';
import {mockTranslate} from '@coorpacademy/translate';
import stateHeader from '../../../store/view/test/fixtures/progression-state';
import stateSlide from '../../../store/view/test/fixtures/player/slide';
import stateClue from '../../../store/view/test/fixtures/player/clue';
import stateLoadingClue from '../../../store/view/test/fixtures/player/loading-clue';
import stateToVNode from './helpers/state-to-vnode';
import testRendering from './helpers/render';

const options = {translate: mockTranslate};
const store = {dispatch: identity};
const mapStateToVNode = stateToVNode(options, store);

test('should display header', t => {
  const vNode = mapStateToVNode(stateHeader);
  testRendering(vNode);
  const {props: {header: headerProps}} = vNode;

  t.deepEqual(headerProps.primary, {title: 'Les réseaux sociaux au service du crowdfunding'});
  t.deepEqual(headerProps.lives, {count: 3});
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
      notify: true,
      title: '__Media',
      type: 'media',
      selected: false
    },
    {
      title: '__Clue',
      type: 'clue',
      selected: false
    }
    // {
    //   title: 'Coach',
    //   type: 'coach'
    // }
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
    secondary: true
  });
  await t.notThrows(playerProps.cta.onClick);
  t.is(playerProps.help, 'Saisissez votre réponse.');
  t.truthy(playerProps.answerType);

  t.deepEqual(map(omit('onClick'), playerProps.buttons), [
    {
      notify: true,
      title: '__Media',
      type: 'media',
      selected: false
    },
    {
      title: '__Clue',
      type: 'clue',
      selected: true
    }
    // {
    //   title: 'Coach',
    //   type: 'coach'
    // }
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
    secondary: true
  });
  await t.notThrows(playerProps.cta.onClick);
  t.is(playerProps.help, 'Saisissez votre réponse.');
  t.truthy(playerProps.answerType);

  t.deepEqual(map(omit('onClick'), playerProps.buttons), [
    {
      notify: true,
      title: '__Media',
      type: 'media',
      selected: false
    },
    {
      title: '__Clue',
      type: 'clue',
      selected: true
    }
    // {
    //   title: 'Coach',
    //   type: 'coach'
    // }
  ]);

  return Promise.all(map(button => t.notThrows(button.onClick), playerProps.buttons));
});
