import test from 'ava';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import omit from 'lodash/fp/omit';
import createMapStateToProps from '../slide';
import stateHeader from './fixtures/progression-state';
import stateSlide from './fixtures/player/slide';
import stateClue from './fixtures/player/clue';
import stateLoadingClue from './fixtures/player/loading-clue';
import testRendering from './utils/render';

const options = {translate: identity};
const store = {dispatch: identity};
const mapStateToProps = createMapStateToProps(options, store);

test('should display header', t => {
  const vNode = mapStateToProps(stateHeader);
  testRendering(vNode);
  const {props: {header: headerProps}} = vNode;

  t.deepEqual(headerProps.primary, {title: 'Les réseaux sociaux au service du crowdfunding'});
  t.deepEqual(headerProps.lives, {count: 3});
});

test('should display slide', async t => {
  const vNode = mapStateToProps(stateSlide);
  testRendering(vNode);
  const {props: {player: playerProps}} = vNode;

  t.is(playerProps.typeClue, 'answer');
  t.is(playerProps.text, null);

  t.deepEqual(playerProps.step, {current: 2, total: 4});

  t.is(playerProps.question, "Écrivez le mot Text dans l'input.\n");
  t.deepEqual(omit('onClick', playerProps.cta), {
    submitValue: 'Validate',
    light: false,
    small: false,
    secondary: false
  });
  await t.notThrows(playerProps.cta.onClick);
  t.is(playerProps.help, 'Select something below');
  t.truthy(playerProps.answerType);

  t.deepEqual(map(omit('onClick'), playerProps.buttons), [
    {
      title: 'Media',
      type: 'media',
      selected: false
    },
    {
      title: 'Clue',
      type: 'clue',
      selected: false
    },
    {
      title: 'Coach',
      type: 'coach'
    }
  ]);

  return Promise.all(map(button => t.notThrows(button.onClick), playerProps.buttons));
});

test('should display loading clue', async t => {
  const vNode = mapStateToProps(stateLoadingClue);
  testRendering(vNode);
  const {props: {player: playerProps}} = vNode;

  t.is(playerProps.typeClue, 'clue');
  t.is(playerProps.text, null);

  t.deepEqual(playerProps.step, {current: 2, total: 4});

  t.is(playerProps.question, "Écrivez le mot Text dans l'input.\n");
  t.deepEqual(omit('onClick', playerProps.cta), {
    submitValue: 'Back',
    light: false,
    small: false,
    secondary: false
  });
  await t.notThrows(playerProps.cta.onClick);
  t.is(playerProps.help, 'Select something below');
  t.truthy(playerProps.answerType);

  t.deepEqual(map(omit('onClick'), playerProps.buttons), [
    {
      title: 'Media',
      type: 'media',
      selected: false
    },
    {
      title: 'Clue',
      type: 'clue',
      selected: true
    },
    {
      title: 'Coach',
      type: 'coach'
    }
  ]);

  return Promise.all(map(button => t.notThrows(button.onClick), playerProps.buttons));
});

test('should display clue', async t => {
  const vNode = mapStateToProps(stateClue);
  testRendering(vNode);
  const {props: {player: playerProps}} = vNode;

  t.is(playerProps.typeClue, 'clue');
  t.is(playerProps.text, 'Clue');

  t.deepEqual(playerProps.step, {current: 2, total: 4});

  t.is(playerProps.question, "Écrivez le mot Text dans l'input.\n");
  t.deepEqual(omit('onClick', playerProps.cta), {
    submitValue: 'Back',
    light: false,
    small: false,
    secondary: false
  });
  await t.notThrows(playerProps.cta.onClick);
  t.is(playerProps.help, 'Select something below');
  t.truthy(playerProps.answerType);

  t.deepEqual(map(omit('onClick'), playerProps.buttons), [
    {
      title: 'Media',
      type: 'media',
      selected: false
    },
    {
      title: 'Clue',
      type: 'clue',
      selected: true
    },
    {
      title: 'Coach',
      type: 'coach'
    }
  ]);

  return Promise.all(map(button => t.notThrows(button.onClick), playerProps.buttons));
});
