import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {validateAnswer} from '../answers';
import {
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS,
  PROGRESSION_CREATE_ANSWER_FAILURE
} from '../../api/progressions';
import {UI_TOGGLE_ACCORDION} from '../../ui/corrections';
import {ANSWER_FETCH_REQUEST, ANSWER_FETCH_SUCCESS, ANSWER_FETCH_FAILURE} from '../../api/answers';

test(
  'should submit answers with the current content and refresh progression state',
  macro,
  set('data.progressions.entities.foo.state.nextContent', {
    type: 'slide',
    ref: 'baz'
  })({}),
  t => ({
    Progressions: {
      createAnswer: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          content: {type: 'slide', ref: 'baz'},
          answers: ['bar']
        });
        return pipe(set('state.content.ref', 'baz'), set('state.isCorrect', true))({});
      },
      findById: id => {
        t.is(id, 'foo');
        return 'foo';
      }
    },
    Answers: {
      findById: (id, slideId, givenAnswer) => {
        t.is(id, 'foo');
        return {
          correctAnswer: ['Bonne réponse'],
          corrections: givenAnswer.map(answer => ({answer, isCorrect: false}))
        };
      }
    }
  }),
  validateAnswer('foo', {answers: ['bar']}),
  [
    [
      {
        type: PROGRESSION_CREATE_ANSWER_REQUEST,
        meta: {progressionId: 'foo'}
      },
      set('ui.current.progressionId', 'foo', {})
    ],
    [
      {
        type: PROGRESSION_CREATE_ANSWER_SUCCESS,
        meta: {progressionId: 'foo'},
        payload: pipe(set('state.content.ref', 'baz'), set('state.isCorrect', true))({})
      },
      set('data.progressions.entities.foo', null, {})
    ],
    [
      {
        type: UI_TOGGLE_ACCORDION,
        payload: {
          id: 2
        }
      }
    ],
    [
      {
        type: ANSWER_FETCH_REQUEST,
        meta: {
          progressionId: 'foo',
          slideId: 'baz'
        }
      },
      set('ui.answers.0.correction', null, {})
    ],
    [
      {
        type: ANSWER_FETCH_SUCCESS,
        meta: {
          progressionId: 'foo',
          slideId: 'baz'
        },
        payload: {
          correctAnswer: ['Bonne réponse'],
          corrections: [{answer: 'bar', isCorrect: false}]
        }
      },
      set('ui.answers.0.correction', 'Bonne réponse', {})
    ]
  ]
);

test(
  'should dispatch failure on request fail',
  macro,
  set('data.progressions.entities.foo.state.nextContent', {
    type: 'slide',
    ref: 'baz'
  })({}),
  t => ({
    Progressions: {
      createAnswer: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          content: {type: 'slide', ref: 'baz'},
          answers: ['bar']
        });
        throw new Error();
      }
    }
  }),
  validateAnswer('foo', {answers: ['bar']}),
  [
    [
      {
        type: PROGRESSION_CREATE_ANSWER_REQUEST,
        meta: {progressionId: 'foo'}
      },
      set('ui.current.progressionId', 'foo', {})
    ],
    {
      type: PROGRESSION_CREATE_ANSWER_FAILURE,
      meta: {progressionId: 'foo'},
      error: true,
      payload: new Error()
    }
  ]
);

test(
  'should dispatch failure when answers request fail',
  macro,
  set('data.progressions.entities.foo.state.nextContent', {
    type: 'slide',
    ref: 'baz'
  })({}),
  t => ({
    Progressions: {
      createAnswer: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          content: {type: 'slide', ref: 'baz'},
          answers: ['bar']
        });
        return pipe(
          set('state.content.ref', 'baz'),
          set('state.isCorrect', false),
          set('state.viewedResources', [])
        )({});
      },
      findById: id => {
        t.is(id, 'foo');
        return 'foo';
      }
    },
    Answers: {
      findById: id => {
        t.is(id, 'foo');
        throw new Error();
      }
    }
  }),
  validateAnswer('foo', {answers: ['bar']}),
  [
    [
      {
        type: PROGRESSION_CREATE_ANSWER_REQUEST,
        meta: {progressionId: 'foo'}
      },
      set('ui.current.progressionId', 'foo', {})
    ],
    [
      {
        type: PROGRESSION_CREATE_ANSWER_SUCCESS,
        meta: {progressionId: 'foo'},
        payload: pipe(
          set('state.content.ref', 'baz'),
          set('state.isCorrect', false),
          set('state.viewedResources', [])
        )({})
      },
      set('data.progressions.entities.foo', null, {})
    ],
    [
      {
        type: UI_TOGGLE_ACCORDION,
        payload: {
          id: 0
        }
      }
    ],
    [
      {
        type: ANSWER_FETCH_REQUEST,
        meta: {
          progressionId: 'foo',
          slideId: 'baz'
        }
      },
      set('ui.answers.0.correction', null, {})
    ],
    {
      type: ANSWER_FETCH_FAILURE,
      meta: {
        progressionId: 'foo',
        slideId: 'baz'
      },
      error: true,
      payload: new Error()
    }
  ]
);

test(
  'should submit answers with current content with wrong answer and viewed resources and refresh progression state',
  macro,
  pipe(
    set('data.progressions.entities.foo.state.nextContent', {type: 'slide', ref: 'baz'}),
    set('data.progressions.entities.foo.content', {ref: 'chapter.ref'})
  )({}),
  t => ({
    Progressions: {
      createAnswer: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          content: {type: 'slide', ref: 'baz'},
          answers: ['bar']
        });
        return pipe(
          set('state.content.ref', 'baz'),
          set('state.isCorrect', false),
          set('state.viewedResources', ['bar'])
        )({});
      },
      findById: id => {
        t.is(id, 'foo');
        return 'foo';
      }
    },
    Answers: {
      findById: id => {
        t.is(id, 'foo');
        return ['Bonne réponse'];
      }
    }
  }),
  validateAnswer('foo', {answers: ['bar']}),
  [
    [
      {
        type: PROGRESSION_CREATE_ANSWER_REQUEST,
        meta: {progressionId: 'foo'}
      },
      set('ui.current.progressionId', 'foo', {})
    ],
    [
      {
        type: PROGRESSION_CREATE_ANSWER_SUCCESS,
        meta: {progressionId: 'foo'},
        payload: pipe(
          set('state.content.ref', 'baz'),
          set('state.isCorrect', false),
          set('state.viewedResources', {'chapter.ref': ['plop']})
        )({})
      },
      set('data.progressions.entities.foo', null, {})
    ],
    [
      {
        type: UI_TOGGLE_ACCORDION,
        payload: {
          id: 1
        }
      }
    ],
    [
      {
        type: ANSWER_FETCH_REQUEST,
        meta: {
          progressionId: 'foo',
          slideId: 'baz'
        }
      },
      set('ui.answers.0.correction', null, {})
    ],
    [
      {
        type: ANSWER_FETCH_SUCCESS,
        meta: {
          progressionId: 'foo',
          slideId: 'baz'
        },
        payload: ['Bonne réponse']
      },
      set('ui.answers.0.correction', 'Bonne réponse', {})
    ]
  ]
);

test(
  'should submit last answer',
  macro,
  set('data.progressions.entities.foo.state.nextContent', {type: 'slide', ref: 'baz'})({}),
  t => ({
    Progressions: {
      createAnswer: (id, payload) => {
        t.is(id, 'foo');
        return set('state.content.ref', 'baz', {});
      },
      findById: id => {
        t.is(id, 'foo');
        return 'foo';
      }
    },
    Answers: {
      findById: id => {
        t.is(id, 'foo');
        return ['Bonne réponse'];
      }
    }
  }),
  validateAnswer('foo', {answers: ['bar']}),
  [
    [
      {
        type: PROGRESSION_CREATE_ANSWER_REQUEST,
        meta: {progressionId: 'foo'}
      },
      set('ui.current.progressionId', 'foo', {})
    ],
    [
      {
        type: PROGRESSION_CREATE_ANSWER_SUCCESS,
        meta: {progressionId: 'foo'},
        payload: set('state.content.ref', 'baz', {})
      },
      pipe(
        set('data.progressions.entities.foo', null),
        set('data.progressions.entities.foo.state.nextContent', {
          type: 'success',
          ref: 'successExitNode'
        })
      )({})
    ],
    [
      {
        type: UI_TOGGLE_ACCORDION,
        payload: {
          id: 0
        }
      }
    ],
    [
      {
        type: ANSWER_FETCH_REQUEST,
        meta: {
          progressionId: 'foo',
          slideId: 'baz'
        }
      },
      set('ui.answers.0.correction', null, {})
    ],
    [
      {
        type: ANSWER_FETCH_SUCCESS,
        meta: {
          progressionId: 'foo',
          slideId: 'baz'
        },
        payload: ['Bonne réponse']
      },
      set('ui.answers.0.correction', 'Bonne réponse', {})
    ]
  ]
);
