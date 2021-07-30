import test from 'ava';
import {pipe, set, flatten, constant} from 'lodash/fp';
import macro from '../../../test/helpers/macro';
import {VALIDATE_ERROR, validateAnswer} from '../../answers';
import {UI_TOGGLE_ACCORDION} from '../../corrections';
import {UI_SELECT_ROUTE} from '../../route';
import {
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS,
  PROGRESSION_CREATE_ANSWER_FAILURE
} from '../../../api/progressions';
import {ANSWER_FETCH_REQUEST, ANSWER_FETCH_FAILURE} from '../../../api/answers';
import {progressionUpdated} from './helpers/shared';

test('should throw an error if slide is undefined', t => {
  const dispatch = action => {
    t.is(action.type, VALIDATE_ERROR);
  };
  const getState = constant(
    pipe(
      set('ui.answers.foo.value', ['bar']),
      set('ui.current.progressionId', 'foo'),
      set('data.progressions.entities.foo.engine', {
        ref: 'learner',
        version: '1'
      }),
      set('data.progressions.entities.foo.state.nextContent', {
        type: 'slide',
        ref: 'baz'
      })
    )({})
  );

  validateAnswer()(dispatch, getState, {});
});

test(
  'should dispatch failure on request fail',
  macro,
  pipe(
    set('ui.answers.foo.value', ['bar']),
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo.engine', {
      ref: 'learner',
      version: '1'
    }),
    set('data.progressions.entities.foo.state.nextContent', {
      type: 'slide',
      ref: 'baz'
    }),
    set('data.contents.slide.entities.baz', {})
  )({}),
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    Progressions: {
      postAnswer: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          content: {type: 'slide', ref: 'baz'},
          answer: ['bar']
        });
        throw new Error('some error');
      }
    }
  }),
  validateAnswer(),
  [
    {
      type: PROGRESSION_CREATE_ANSWER_REQUEST,
      meta: {
        progressionId: 'foo',
        answer: ['bar'],
        content: {
          ref: 'baz',
          type: 'slide'
        }
      }
    },
    {
      type: UI_SELECT_ROUTE,
      payload: 'correction',
      meta: {
        progressionId: 'foo'
      }
    },
    {
      type: PROGRESSION_CREATE_ANSWER_FAILURE,
      meta: {
        progressionId: 'foo',
        answer: ['bar'],
        content: {
          ref: 'baz',
          type: 'slide'
        }
      },
      error: true,
      payload: new Error('some error')
    },
    {
      type: UI_SELECT_ROUTE,
      payload: 'answer',
      meta: {
        progressionId: 'foo'
      }
    }
  ],
  3
);

test(
  'should dispatch failure when answer request fail',
  macro,
  pipe(
    set('ui.answers.foo.value', ['bar']),
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo.engine', {
      ref: 'learner',
      version: '1'
    }),
    set('data.configs.entities.learner@1', {
      version: '1'
    }),
    set('data.progressions.entities.foo.state.nextContent', {
      type: 'slide',
      ref: 'baz'
    }),
    set('data.contents.slide.entities.baz.lessons', [
      {
        ref: 'lesson_ref'
      }
    ])
  )({}),
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    Progressions: {
      postAnswer: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          content: {type: 'slide', ref: 'baz'},
          answer: ['bar']
        });
        return pipe(
          set('state.content.ref', 'baz'),
          set('state.nextContent', {type: 'success', ref: 'successExitNode'}),
          set('state.isCorrect', false),
          set('state.viewedResources', [])
        )({});
      }
    },
    Answers: {
      findById: id => {
        t.is(id, 'foo');
        throw new Error('some error');
      }
    },
    Analytics: {
      sendProgressionFinished: (currentProgression, engineConfig) => {
        t.is(currentProgression.engine.ref, 'learner');
        t.deepEqual(currentProgression.state.nextContent, {
          type: 'success',
          ref: 'successExitNode'
        });
        return 'sent';
      }
    }
  }),
  validateAnswer(),
  flatten([
    {
      type: PROGRESSION_CREATE_ANSWER_REQUEST,
      meta: {
        progressionId: 'foo',
        answer: ['bar'],
        content: {
          ref: 'baz',
          type: 'slide'
        }
      }
    },
    {
      type: UI_SELECT_ROUTE,
      payload: 'correction',
      meta: {
        progressionId: 'foo'
      }
    },
    {
      type: PROGRESSION_CREATE_ANSWER_SUCCESS,
      meta: {
        progressionId: 'foo',
        answer: ['bar'],
        content: {
          ref: 'baz',
          type: 'slide'
        }
      },
      payload: pipe(
        set('state.content.ref', 'baz'),
        set('state.nextContent', {type: 'success', ref: 'successExitNode'}),
        set('state.isCorrect', false),
        set('state.viewedResources', [])
      )({})
    },
    {
      type: UI_TOGGLE_ACCORDION,
      payload: {
        id: 0
      }
    },
    progressionUpdated,
    {
      type: ANSWER_FETCH_REQUEST,
      meta: {
        progressionId: 'foo',
        slideId: 'baz'
      }
    },
    {
      type: ANSWER_FETCH_FAILURE,
      meta: {
        progressionId: 'foo',
        slideId: 'baz'
      },
      error: true,
      payload: new Error('some error')
    }
  ]),
  6
);
