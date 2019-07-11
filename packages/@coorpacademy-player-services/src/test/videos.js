import test from 'ava';

import createVideosService from '../videos';
import videosData from './fixtures/data/videos';
import * as fixtures from './fixtures';

const {findUriById} = createVideosService(fixtures);

test('should find a video uri', async t => {
  t.deepEqual(await findUriById('foobar', 'baz'), videosData.url);
});
