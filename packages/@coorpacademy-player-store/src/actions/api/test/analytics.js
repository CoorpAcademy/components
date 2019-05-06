import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {
  progressionUpdated,
  PROGRESSION_UPDATED_FAILURE,
  PROGRESSION_UPDATED_ON_MOVE,
  PROGRESSION_UPDATED_ON_NODE
} from '../analytics';

test(
  'should fail if progression is not found',
  macro,
  pipe(
    set('ui.current.progressionId', 'bar'),
    set('data.configs.entities.microlearning@1', {
      version: '1'
    })
  )({}),
  t => ({}),
  progressionUpdated('foo', PROGRESSION_UPDATED_ON_MOVE),
  [
    {
      type: PROGRESSION_UPDATED_FAILURE,
      payload: 'progression "foo" could not be found.'
    }
  ],
  0
);

test(
  'should fail if progression has no state.',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo', {
      _id: 'foo',
      content: {ref: '1.B', type: 'level'},
      engine: {version: '1', ref: 'microlearning'}
    }),
    set('data.configs.entities.microlearning@1', {
      version: '1'
    })
  )({}),
  t => ({}),
  progressionUpdated('foo', PROGRESSION_UPDATED_ON_MOVE),
  [
    {
      type: PROGRESSION_UPDATED_FAILURE,
      payload: 'progression "foo" has no state.'
    }
  ],
  0
);

test(
  'should send progression analytics on finished',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo', {
      _id: 'foo',
      content: {ref: '1.B', type: 'level'},
      engine: {version: '1', ref: 'microlearning'},
      state: {nextContent: {type: 'success'}}
    }),
    set('data.configs.entities.microlearning@1', {
      version: '1'
    })
  )({}),
  t => ({
    Analytics: {
      sendProgressionFinished: (currentProgression, engineConfig) => {
        t.is(currentProgression.engine.ref, 'microlearning');
        return 'sent';
      },
      sendProgressionUpdated: (currentProgression, engineConfig) => {
        t.fail();
      }
    }
  }),
  progressionUpdated('foo', PROGRESSION_UPDATED_ON_MOVE),
  [
    {
      type: PROGRESSION_UPDATED_ON_MOVE,
      meta: {id: 'foo'}
    }
  ],
  1
);

test(
  'should send progression analytics on update',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo', {
      _id: 'foo',
      content: {ref: '1.B', type: 'level'},
      engine: {version: '1', ref: 'microlearning'},
      state: {nextContent: {type: 'success'}}
    }),
    set('data.configs.entities.microlearning@1', {
      version: '1'
    })
  )({}),
  t => ({
    Analytics: {
      sendProgressionUpdated: (currentProgression, engineConfig) => {
        t.is(currentProgression.engine.ref, 'microlearning');
        return 'sent';
      }
    }
  }),
  progressionUpdated('foo', PROGRESSION_UPDATED_ON_NODE),
  [
    {
      type: PROGRESSION_UPDATED_ON_NODE,
      meta: {id: 'foo'}
    }
  ],
  1
);
