import test from 'ava';

import createRecommendationsService from '../recommendations';
import recommendations from './fixtures/data/recommendations';
import * as fixtures from './fixtures';

const Recommendations = createRecommendationsService(fixtures);
const {find, getNext} = Recommendations;

test('should find recommendations for free run', async t => {
  t.deepEqual(await find('chapter'), recommendations);
});

test('should find recommendations for learner with base level', async t => {
  t.deepEqual(await find('level', '1.B'), recommendations);
});

test('should find recommendations for learner with advanced level', async t => {
  t.deepEqual(await find('level', '1.A'), recommendations);
});

test('should find recommendations for learner with coach level', async t => {
  t.deepEqual(await find('level', '1.C'), recommendations);
});

test('should find next level', async t => {
  t.deepEqual(await getNext('level', '1.B'), {
    ref: '1.A',
    name: 'Level1',
    level: 'advanced',
    meta: {
      updatedAt: '2017-01-26T09:19:06.874Z',
      createdAt: '2017-01-26T09:19:05.667Z'
    },
    poster: {subtitles: [], posters: [], src: []},
    chapterIds: ['5.C7', '5.C8']
  });
});

test('should find next chapter', async t => {
  t.deepEqual(await getNext('chapter', '5.C8'), {
    _id: '5.C8',
    isConditional: false,
    stars: 20,
    name: 'Le chapter 2',
    time: 8,
    poster: {subtitles: [], posters: [], src: []},
    meta: {
      updatedAt: '2017-01-26T09:19:06.874Z',
      createdAt: '2017-01-26T09:19:05.667Z'
    }
  });
});

test('should find undefined next content for unknown type', async t => {
  t.is(await getNext('foo', 'bar'), undefined);
});
