import test from 'ava';
import {AnyAction, Dispatch, MiddlewareAPI} from 'redux';
import {receiveProgression} from '../actions/data/progression';
import {Action} from '../actions';
import {AppOptions} from '../types/common';
import {mockedProgression} from '../services/post-progression.mock';
import {sleep} from '../services/tools/sleep';
import {STORE_FIRST_SLIDE} from '../actions/data/slides';
import onReceiveProgression from './on-receive-progression';

const appOptions: AppOptions = {
  token: process.env.API_TEST_TOKEN || ''
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

test('should not dispatch anything if action is not RECEIVE_PROGRESSION', t => {
  t.plan(1);
  const dispatch = (): void => {
    t.fail();
  };
  const next = (): boolean => {
    return t.pass();
  };

  onReceiveProgression({dispatch} as unknown as MiddlewareAPI)(next as Dispatch<AnyAction>)(
    otherAction('other')
  );
});

test('should dispatch actions: STORE_FIRST_SLIDE', async t => {
  t.plan(2);
  const dispatch = (action: Action): void => {
    switch (action.type) {
      case STORE_FIRST_SLIDE: {
        const slide = action.payload;
        t.deepEqual(slide, {});
        return;
      }
      default:
        t.fail();
        break;
    }
  };
  const next = (): boolean => {
    return t.pass();
  };
  onReceiveProgression({dispatch} as MiddlewareAPI)(next as Dispatch<AnyAction>)(
    receiveProgression({token: appOptions.token, progression: mockedProgression})
  );
  await sleep(1000); // wait for the .then to fire
});
