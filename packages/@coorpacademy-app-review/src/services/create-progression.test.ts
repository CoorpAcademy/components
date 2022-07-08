import test from 'ava';
import {ProgressionFromAPI} from '../actions/data/progression';
import {createProgression} from './create-progression';
import {okJSONResponse, token} from './tools/fetch.mocks';

test('should create progression with success', async t => {
  const result: ProgressionFromAPI = {
    _id: '123456123456',
    state: {
      // isCorrect is always true for a 1st progression?
      isCorrect: true,
      step: {
        current: 1
      },
      nextContent: {
        type: 'slide',
        ref: 'sli_NJ3m5KtWh'
      },
      // allAnswers: [];
      pendingSlides: []
    }
  };
  const skillRef = '_skill-ref';

  const mockedCreateProgression = createProgression(okJSONResponse(result));
  const progression = await mockedCreateProgression(skillRef, token);

  t.deepEqual(result, progression);
});

test('should reject bad token', async t => {
  const badToken = 'token is not a jwt';
  const mockedFetchSkills = fetchSkills(okJSONResponse([]));

  const error = await t.throwsAsync(() => mockedFetchSkills(badToken));

  t.is(
    error?.message,
    "Invalid token specified: Cannot read properties of undefined (reading 'replace')"
  );
});
