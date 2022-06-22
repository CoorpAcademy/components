import test from 'ava';
import {fetchCourse as _fetchCourse} from './fetch-demo';
import {okJSONResponse} from './tools/fetch.mocks';
import type {CatalogHits} from './fetch-demo';

test('should fetch a demo course', async t => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  const language = 'fr';
  const universalRef = 'bar';

  const result: CatalogHits = {hits: [{title: 'Digital IQ test'}]};
  const fetchCourse = _fetchCourse(okJSONResponse(result));
  const course = await fetchCourse(token, language, universalRef);
  t.is(course.title, 'Digital IQ test');
});
