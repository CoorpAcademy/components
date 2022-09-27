import test from 'ava';
import reducer from '../progressions';
import {
  PROGRESSION_CREATE_SUCCESS,
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS,
  PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
  PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
  PROGRESSION_FETCH_FAILURE,
  PROGRESSION_FETCH_REQUEST,
  PROGRESSION_FETCH_SUCCESS,
  PROGRESSION_REQUEST_CLUE_SUCCESS,
  PROGRESSION_RESOURCE_VIEWED_SUCCESS,
  PROGRESSION_CREATE_ANSWER_FAILURE,
  PROGRESSION_CREATE_FAILURE,
  ENGINE_CONFIG_FETCH_FAILURE,
  PROGRESSION_REQUEST_CLUE_FAILURE,
  PROGRESSION_EXTRALIFEREFUSED_FAILURE,
  PROGRESSION_EXTRALIFEACCEPTED_FAILURE,
  PROGRESSION_FETCH_BESTOF_FAILURE,
  PROGRESSION_RESOURCE_VIEWED_FAILURE
} from '../../../actions/api/progressions';
import macro from '../../test/helpers/macro';

test('should have initial value', macro, reducer, undefined, {}, {entities: {}});

test(
  'should return a progression on createProgression success',
  macro,
  reducer,
  {},
  {
    type: PROGRESSION_CREATE_SUCCESS,
    payload: {_id: 'foo', baz: 'bar'}
  },
  {entities: {foo: {_id: 'foo', baz: 'bar'}}, isFailure: false}
);

test(
  "shouldn't reset entities map",
  macro,
  reducer,
  {entities: {bar: {_id: 'bar', baz: 'bar'}}},
  {
    type: PROGRESSION_CREATE_SUCCESS,
    payload: {_id: 'foo', baz: 'bar'}
  },
  {entities: {foo: {_id: 'foo', baz: 'bar'}, bar: {_id: 'bar', baz: 'bar'}}, isFailure: false}
);

test(
  'should set default progression id on createProgression success',
  macro,
  reducer,
  {},
  {
    type: PROGRESSION_CREATE_SUCCESS,
    payload: {baz: 'bar'}
  },
  {entities: {'_no-id': {baz: 'bar'}}, isFailure: false}
);

test(
  'should set entity to null on request',
  macro,
  reducer,
  {},
  {
    type: PROGRESSION_FETCH_REQUEST,
    meta: {id: 'foo'}
  },
  {entities: {foo: null}}
);

test(
  "should set entity to null if doesn't exist on request",
  macro,
  reducer,
  {},
  {
    type: PROGRESSION_FETCH_REQUEST,
    meta: {id: 'foo'}
  },
  {entities: {foo: null}}
);

test(
  'should do nothing if entity already exists on request',
  macro,
  reducer,
  {entities: {foo: 'foo'}},
  {
    type: PROGRESSION_FETCH_REQUEST,
    meta: {id: 'foo'}
  },
  {entities: {foo: 'foo'}}
);

test(
  'should set entity on success',
  macro,
  reducer,
  {},
  {
    type: PROGRESSION_FETCH_SUCCESS,
    meta: {id: 'foo'},
    payload: 'foo'
  },
  {entities: {foo: 'foo'}, isFailure: false}
);

test(
  'should remove null on failure',
  macro,
  reducer,
  {entities: {foo: null}},
  {
    type: PROGRESSION_FETCH_FAILURE,
    meta: {id: 'foo'},
    error: true,
    payload: {}
  },
  {entities: {}, isFailure: true}
);

test(
  'should do nothing on failure if entity already exists',
  macro,
  reducer,
  {entities: {foo: 'foo'}},
  {
    type: PROGRESSION_FETCH_FAILURE,
    meta: {id: 'foo'},
    error: true,
    payload: {}
  },
  {entities: {foo: 'foo'}, isFailure: true}
);

test(
  'should make isFailure true when PROGRESSION_CREATE_ANSWER_FAILURE',
  macro,
  reducer,
  {entities: {foo: 'foo'}},
  {
    type: PROGRESSION_CREATE_ANSWER_FAILURE
  },
  {entities: {foo: 'foo'}, isFailure: true}
);

test(
  'should make isFailure true when PROGRESSION_CREATE_FAILURE',
  macro,
  reducer,
  {entities: {foo: 'foo'}},
  {
    type: PROGRESSION_CREATE_FAILURE
  },
  {entities: {foo: 'foo'}, isFailure: true}
);

test(
  'should make isFailure true when ENGINE_CONFIG_FETCH_FAILURE',
  macro,
  reducer,
  {entities: {foo: 'foo'}},
  {
    type: ENGINE_CONFIG_FETCH_FAILURE
  },
  {entities: {foo: 'foo'}, isFailure: true}
);

test(
  'should make isFailure true when PROGRESSION_REQUEST_CLUE_FAILURE',
  macro,
  reducer,
  {entities: {foo: 'foo'}},
  {
    type: PROGRESSION_REQUEST_CLUE_FAILURE
  },
  {entities: {foo: 'foo'}, isFailure: true}
);

test(
  'should make isFailure true when PROGRESSION_EXTRALIFEREFUSED_FAILURE',
  macro,
  reducer,
  {entities: {foo: 'foo'}},
  {
    type: PROGRESSION_EXTRALIFEREFUSED_FAILURE
  },
  {entities: {foo: 'foo'}, isFailure: true}
);

test(
  'should make isFailure true when PROGRESSION_EXTRALIFEACCEPTED_FAILURE',
  macro,
  reducer,
  {entities: {foo: 'foo'}},
  {
    type: PROGRESSION_EXTRALIFEACCEPTED_FAILURE
  },
  {entities: {foo: 'foo'}, isFailure: true}
);

test(
  'should make isFailure true when PROGRESSION_FETCH_BESTOF_FAILURE',
  macro,
  reducer,
  {entities: {foo: 'foo'}},
  {
    type: PROGRESSION_FETCH_BESTOF_FAILURE
  },
  {entities: {foo: 'foo'}, isFailure: true}
);

test(
  'should make isFailure true when PROGRESSION_RESOURCE_VIEWED_FAILURE',
  macro,
  reducer,
  {entities: {foo: 'foo'}},
  {
    type: PROGRESSION_RESOURCE_VIEWED_FAILURE
  },
  {entities: {foo: 'foo'}, isFailure: true}
);

test(
  'should set isCorrect null',
  macro,
  reducer,
  {},
  {
    type: PROGRESSION_CREATE_ANSWER_REQUEST,
    meta: {progressionId: 'foo'}
  },
  {entities: {foo: {state: {isCorrect: null}}}}
);

test(
  'should merge answer result with progression',
  macro,
  reducer,
  {entities: {foo: {foo: 'foo'}}},
  {
    type: PROGRESSION_CREATE_ANSWER_SUCCESS,
    meta: {progressionId: 'foo'},
    payload: {bar: 'bar'}
  },
  {entities: {foo: {foo: 'foo', bar: 'bar'}}, isFailure: false}
);

test(
  'should merge clue result with progression',
  macro,
  reducer,
  {entities: {foo: {foo: 'foo'}}},
  {
    type: PROGRESSION_REQUEST_CLUE_SUCCESS,
    meta: {progressionId: 'foo'},
    payload: {bar: 'bar'}
  },
  {entities: {foo: {foo: 'foo', bar: 'bar'}}, isFailure: false}
);

test(
  'should merge resource view result with progression',
  macro,
  reducer,
  {entities: {foo: {foo: 'foo'}}},
  {
    type: PROGRESSION_RESOURCE_VIEWED_SUCCESS,
    meta: {progressionId: 'foo'},
    payload: {bar: 'bar'}
  },
  {entities: {foo: {foo: 'foo', bar: 'bar'}}, isFailure: false}
);

[
  PROGRESSION_FETCH_SUCCESS,
  PROGRESSION_REQUEST_CLUE_SUCCESS,
  PROGRESSION_RESOURCE_VIEWED_SUCCESS,
  PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
  PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
  PROGRESSION_CREATE_ANSWER_SUCCESS
].forEach(type =>
  test(
    `should return identity for type=${type}`,
    macro,
    reducer,
    {entities: {foo: {foo: 'foo'}}},
    {
      type,
      payload: {}
    },
    {entities: {foo: {foo: 'foo'}}, isFailure: false}
  )
);

[PROGRESSION_FETCH_REQUEST, PROGRESSION_CREATE_ANSWER_REQUEST].forEach(type =>
  test(
    `should return identity for type=${type} without isFailure`,
    macro,
    reducer,
    {entities: {foo: {foo: 'foo'}}},
    {
      type,
      payload: {}
    },
    {entities: {foo: {foo: 'foo'}}}
  )
);

test(
  `should return identity for type=${PROGRESSION_FETCH_FAILURE} with is failure`,
  macro,
  reducer,
  {entities: {foo: {foo: 'foo'}}},
  {
    type: PROGRESSION_FETCH_FAILURE,
    payload: {}
  },
  {entities: {foo: {foo: 'foo'}}, isFailure: true}
);
