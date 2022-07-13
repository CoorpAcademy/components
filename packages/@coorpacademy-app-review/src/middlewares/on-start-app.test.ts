import test from 'ava';
import {AnyAction, Dispatch, MiddlewareAPI} from 'redux';
import {STORE_TOKEN} from '../actions/data/token';
import {RECEIVE_PROGRESSION} from '../actions/data/progression';
import {Action} from '../actions';
import {AppOptions} from '../types/common';
import {NAVIGATE_TO, startApp} from '../actions/ui/navigation';
import {mockedProgression} from '../services/post-progression.mock';
import {VIEWS} from '../common';
import {sleep} from '../services/tools/sleep';
import onStartApp from './on-start-app';

const appOptions: AppOptions = {
  token: process.env.API_TEST_TOKEN || '',
  skillRef: 'skill_NJC0jFKoH'
};

const otherAction = (
  payload: string
): {
  type: string;
  payload: string;
} => ({
  type: '@@other/OTHER',
  payload
});

test('should not dispatch anything if action is not START_APP', t => {
  t.plan(1);
  const dispatch = (): void => {
    t.fail();
  };
  const next = (): boolean => {
    return t.pass();
  };

  onStartApp({dispatch} as unknown as MiddlewareAPI)(next as Dispatch<AnyAction>)(
    otherAction('other')
  );
});

test('should dispatch actions: STORE_TOKEN && RECEIVE_PROGRESSION if an skillRef is given, on a successful response', async t => {
  t.plan(5);
  const dispatch = (action: Action): void => {
    switch (action.type) {
      case STORE_TOKEN:
        t.is(action.payload, appOptions.token);
        return;
      case RECEIVE_PROGRESSION: {
        const {token, progression} = action.payload;
        t.is(token, appOptions.token);
        t.deepEqual(progression, JSON.parse(JSON.stringify(mockedProgression)));
        return;
      }
      case NAVIGATE_TO:
        t.is(action.payload, VIEWS.slides);
        return;
      default:
        t.fail();
        break;
    }
  };
  const next = (): boolean => {
    return t.pass();
  };
  onStartApp({dispatch} as MiddlewareAPI)(next as Dispatch<AnyAction>)(startApp(appOptions));
  await sleep(1000); // wait for the .then to fire
});
