import test from 'ava';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import omit from 'lodash/fp/omit';
import mapStateToProps from '../player';
import stateSlide from './fixtures/player/slide';
import stateClue from './fixtures/player/clue';

test('should display slide', async t => {
  const props = mapStateToProps(stateSlide, identity);

  t.is(props.typeClue, 'answer');
  t.is(props.text, '');

  t.deepEqual(props.step, {current: 2, total: 4});

  t.is(props.question, "Écrivez le mot Text dans l'input.\n");
  t.deepEqual(omit('onClick', props.cta), {
    submitValue: 'Validate',
    light: false,
    small: false,
    secondary: false
  });
  await t.notThrows(props.cta.onClick);
  t.is(props.help, 'Select something below');
  t.truthy(props.answerType);

  t.deepEqual(map(omit('onClick'), props.buttons), [
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

  return Promise.all(map(button => t.notThrows(button.onClick), props.buttons));
});

test('should display clue', async t => {
  const props = mapStateToProps(stateClue, identity);

  t.is(props.typeClue, 'clue');
  t.is(props.text, 'Clue');

  t.deepEqual(props.step, {current: 2, total: 4});

  t.is(props.question, "Écrivez le mot Text dans l'input.\n");
  t.deepEqual(omit('onClick', props.cta), {
    submitValue: 'Validate',
    light: false,
    small: false,
    secondary: false
  });
  await t.notThrows(props.cta.onClick);
  t.is(props.help, 'Select something below');
  t.truthy(props.answerType);

  t.deepEqual(map(omit('onClick'), props.buttons), [
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

  return Promise.all(map(button => t.notThrows(button.onClick), props.buttons));
});
