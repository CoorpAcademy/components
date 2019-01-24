import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {
  sendProgressionAnalytics,
  SEND_PROGRESSION_ANALYTICS_REQUEST,
  SEND_PROGRESSION_ANALYTICS_SUCCESS,
  SEND_PROGRESSION_ANALYTICS_FAILURE
} from '../analytics';

test(
  'should send progression analytics',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo', {
      content: {ref: '1.B', type: 'level'},
      engine: {version: '1', ref: 'microlearning'}
    }),
    set('data.configs.entities.microlearning@1', {
      version: '1'
    })
  )({}),
  t => ({
    Analytics: {
      sendProgressionAnalytics: (currentProgression, engineConfig) => {
        t.is(currentProgression.engine.ref, 'microlearning');
        return 'sent';
      }
    }
  }),
  sendProgressionAnalytics('foo'),
  [
    {
      type: SEND_PROGRESSION_ANALYTICS_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: SEND_PROGRESSION_ANALYTICS_SUCCESS,
      meta: {id: 'foo'},
      payload: 'sent'
    }
  ],
  1
);

test(
  'should fail to send progression analytics no progression is not found',
  macro,
  {},
  t => ({}),
  sendProgressionAnalytics('foo'),
  [
    {
      type: SEND_PROGRESSION_ANALYTICS_FAILURE,
      payload: 'progression "foo" could not be found.'
    }
  ],
  0
);

test(
  'should fail to send progression analytics when engineConfig is not found',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set(['data', 'progressions', 'entities', 'foo'], {
      content: {ref: '1.B', type: 'level'},
      engine: {version: '1', ref: 'microlearning'}
    })
  )({}),
  t => ({
    Clues: {
      findById: (progressionId, slideId) => {
        t.is(progressionId, 'foo');
        t.is(slideId, 'bar');
        return 'baz';
      }
    }
  }),
  sendProgressionAnalytics('foo'),
  [
    {
      type: SEND_PROGRESSION_ANALYTICS_FAILURE,
      payload: 'progression "foo" has no config.'
    }
  ],
  0
);
