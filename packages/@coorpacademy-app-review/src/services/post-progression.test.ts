import test from 'ava';
import {ProgressionFromAPI} from '../actions/data/progression';
import {postProgression} from './post-progression';
import {okJSONResponse, token} from './tools/fetch.mocks';

const skillRef = '_skill-ref';

test('should create progression with success', async t => {
  const result: ProgressionFromAPI = {
    _id: '123456123456',
    state: {
      // is "isCorrect" always true for a 1st progression?
      isCorrect: true,
      step: {
        current: 1
      },
      nextContent: {
        type: 'slide',
        ref: 'sli_NJ3m5KtWh'
      },
      pendingSlides: []
    }
  };

  const mockedPostProgression = postProgression(okJSONResponse(result));
  const progression = await mockedPostProgression(skillRef, token);

  t.deepEqual(result, progression);
});

test('should reject bad token', async t => {
  const badToken = 'token is not a jwt';
  const mockedPostProgression = postProgression(okJSONResponse(null));

  const error = await t.throwsAsync(() => mockedPostProgression(skillRef, badToken));

  t.is(
    error?.message,
    "Invalid token specified: Cannot read properties of undefined (reading 'replace')"
  );
});
