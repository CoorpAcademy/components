import test from 'ava';
import fetchCourse from './fetch-demo.js';
import dotenv from 'dotenv';
dotenv.config();

test('should fetch a demo course with mobile-staging dev token', async t => {
  const token = process.env.API_TEST_TOKEN;
  const language = 'fr';
  const universalRef = 'dis_NkAPG3m4U';

  const course = await fetchCourse(token, language, universalRef);
  t.is(course.title, 'March-ing towards a greener tomorrow');
});
