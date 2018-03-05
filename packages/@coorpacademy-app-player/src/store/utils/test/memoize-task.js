import test from 'ava';
import memoizeTask from '../memoize-task';

test('it should return the same promise if first argument is the same and last task did not finish yet', async t => {
  const setPlayerScore = memoizeTask((playerId, score) => Promise.resolve(score));
  const firstPromise = setPlayerScore('john', 0);
  const secondPromise = setPlayerScore('john', 1);

  t.is(firstPromise, secondPromise);

  const firstScore = await firstPromise;
  const secondScore = await secondPromise;

  t.is(firstScore, 0);
  t.is(secondScore, 0);
});

test('it not should return the same promise if first argument is not the same and last task did not finish yet', async t => {
  const setPlayerScore = memoizeTask((playerId, score) => Promise.resolve(score));
  const firstPromise = setPlayerScore('john', 0);
  const secondPromise = setPlayerScore('jane', 1);

  t.not(firstPromise, secondPromise);

  const firstScore = await firstPromise;
  const secondScore = await secondPromise;

  t.is(firstScore, 0);
  t.is(secondScore, 1);
});

test('it not should return the same promise if first argument is the same and last task finished before second call', async t => {
  const setPlayerScore = memoizeTask((playerId, score) => Promise.resolve(score));
  const firstScore = await setPlayerScore('john', 0);
  const secondScore = await setPlayerScore('john', 1);

  t.is(firstScore, 0);
  t.is(secondScore, 1);
});
