import test from 'ava';
import {getNext} from '../recommendations';

test('should find recommendations for free run', async t => {
  t.deepEqual(await getNext('chapter'), undefined);
});

test('should find next level for learner with base level', async t => {
  t.deepEqual(await getNext('level', '1.B'), {
    ref: '1.A',
    name: 'Level1',
    level: 'advanced',
    meta: {
      updatedAt: '2017-01-26T09:19:06.874Z',
      createdAt: '2017-01-26T09:19:05.667Z'
    },
    poster: {
      subtitles: [],
      posters: [],
      src: []
    },
    chapterIds: ['5.C7', '5.C8']
  });
});

test('should find next level for learner with advanced level', async t => {
  t.deepEqual(await getNext('level', '1.A'), {
    ref: '1.C',
    name: 'Level1',
    level: 'coach',
    meta: {
      updatedAt: '2017-01-26T09:19:06.874Z',
      createdAt: '2017-01-26T09:19:05.667Z'
    },
    poster: {
      subtitles: [],
      posters: [],
      src: []
    },
    chapterIds: ['1.C1', '1.C2']
  });
});

test('should find next level for learner with coach level', async t => {
  t.deepEqual(await getNext('level', '1.C'), undefined);
});
