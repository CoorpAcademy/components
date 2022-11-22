import test from 'ava';
import nock from 'nock';
import {fetchSlide} from '../fetch-slide';
import {qcmDragSlide} from '../mock/fixtures/qcm-drag';

test.before(() => {
  nock('http://localhost:3000')
    .get('/api/v1/slides/sli_123546/parentContentTitle')
    .reply(200, qcmDragSlide);
});

test.after(() => {
  nock.cleanAll();
});

test('should fetch a slide with the parentTitleContent info successfully', async t => {
  const token = process.env.API_TEST_TOKEN || '';
  const slide = await fetchSlide('sli_123546', token);
  t.deepEqual(qcmDragSlide, slide);
});

test('should reject if a bad token is passed', async t => {
  const badToken = 'token is not a jwt';
  const error = await t.throwsAsync(() => fetchSlide('sli_123546', badToken));

  t.is(
    error?.message,
    "Invalid token specified: Cannot read properties of undefined (reading 'replace')"
  );
});
