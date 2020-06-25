import test from 'ava';
import {map, get, set} from 'lodash/fp';
import createPlayer from '../player';

import {data, options, store} from './player';

test('memoize choices > QCM', t => {
  // state fixture
  const initialState = set(
    ['data', 'configs', 'entities', 'microlearning@1'],
    {version: '1', shuffleChoices: true},
    {
      data,
      ui: {
        route: {qcm: 'answer'},
        current: {progressionId: 'qcm'},
        coaches: {availableCoaches: 1}
      }
    }
  );
  const secondState = set(
    ['data', 'contents', 'slide', 'entities', 'qcmSlide-1', 'question', 'content', 'choices'],
    [
      {
        label: 'foo'
      },
      {
        label: 'bar'
      }
    ],
    initialState
  );

  // initiate player
  const player = createPlayer(options, store);

  // test answers values
  const props = player(initialState);
  const expected = map('title', get(['answerType', 'model', 'answers'], props));

  // test new answers values when state is updated
  const props2 = player(secondState);
  const expected2 = map('title', get(['answerType', 'model', 'answers'], props2));
  t.deepEqual(expected2, expected);

  // new player instance
  const newPlayer = createPlayer(options, store);

  // test new answers values when store and state are updated
  const props3 = newPlayer(secondState);
  const expected3 = map('title', get(['answerType', 'model', 'answers'], props3));
  t.deepEqual([...expected3].sort(), ['bar', 'foo']);
});

test('memoize choices > QCM DRAG', t => {
  // state fixture
  const initialState = set(
    ['data', 'configs', 'entities', 'microlearning@1'],
    {version: '1', shuffleChoices: true},
    {
      data,
      ui: {
        route: {qcmDrag: 'answer'},
        current: {progressionId: 'qcmDrag'},
        coaches: {availableCoaches: 1}
      }
    }
  );
  const secondState = set(
    ['data', 'contents', 'slide', 'entities', '8.B2.2', 'question', 'content', 'choices'],
    [
      {
        label: 'foo'
      },
      {
        label: 'bar'
      }
    ],
    {...initialState}
  );

  // initiate player
  const player = createPlayer(options, store);

  // test answers values
  const props = player(initialState);
  const expected = map('title', get(['answerType', 'model', 'answers'], props));
  t.deepEqual([...expected].sort(), ["L'ordinateur", 'La tablette', 'Le smartphone']);

  // test new answers values when state is updated
  const props2 = player(secondState);

  const expected2 = map('title', get(['answerType', 'model', 'answers'], props2));
  t.deepEqual(expected2, expected);

  // new player instance
  const newPlayer = createPlayer(options, store);

  // test new answers values when store and state are updated
  const props3 = newPlayer(secondState);
  const expected3 = map('title', get(['answerType', 'model', 'answers'], props3));
  t.deepEqual([...expected3].sort(), ['bar', 'foo']);
});
