import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import {isRSAA, RSAA} from 'redux-api-middleware';
import {
  PROGRESSION_FETCH_REQUEST,
  PROGRESSION_FETCH_SUCCESS,
  PROGRESSION_FETCH_FAILURE,
  ANSWER_CREATE_REQUEST,
  ANSWER_CREATE_SUCCESS,
  ANSWER_CREATE_FAILURE
} from '../actions/progressions';
import {SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS, SLIDE_FETCH_FAILURE} from '../actions/slides';

const createApiStore = () => ({
  progressions: {
    0: {
      id: 0,
      contentRef: 'foo'
    }
  },
  slides: {
    foo: {
      id: 'foo'
    },
    bar: {
      id: 'bar'
    }
  }
});

const readCommands = [
  {
    types: [PROGRESSION_FETCH_REQUEST, PROGRESSION_FETCH_SUCCESS, PROGRESSION_FETCH_FAILURE],
    entities: 'progressions'
  },
  {
    types: [SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS, SLIDE_FETCH_FAILURE],
    entities: 'slides'
  }
];

const editCommands = [
  {
    types: [ANSWER_CREATE_REQUEST, ANSWER_CREATE_SUCCESS, ANSWER_CREATE_FAILURE],
    entities: 'progressions',
    transform: (progression, body) => ({...progression, ...body})
  }
];

export default options => {
  let apiStore = createApiStore();

  return ({dispatch}) => next => async action => {
    if (!isRSAA(action)) return next(action);

    const readCommand = find(
      {
        types: pipe(get([RSAA, 'types']), map('type'))(action)
      },
      readCommands
    );

    if (readCommand) {
      const {entities, types} = readCommand;
      const [REQUEST, SUCCESS, FAILURE] = types;

      await dispatch({
        type: REQUEST,
        meta: get([RSAA, 'types', 0, 'meta'], action)
      });

      const {id} = get([RSAA, 'types', 0, 'meta'], action);
      const entity = get([entities, id], apiStore);

      if (entity)
        return next({
          type: SUCCESS,
          meta: get([RSAA, 'types', 1, 'meta'], action),
          payload: entity
        });
      else
        return next({
          type: FAILURE,
          meta: get([RSAA, 'types', 2, 'meta'], action),
          error: true
        });
    }

    const editCommand = find(
      {
        types: pipe(get([RSAA, 'types']), map('type'))(action)
      },
      editCommands
    );

    if (editCommand) {
      const {entities, types, transform} = editCommand;
      const [REQUEST, SUCCESS, FAILURE] = types;

      await dispatch({
        type: REQUEST,
        meta: get([RSAA, 'types', 0, 'meta'], action)
      });

      const {id} = get([RSAA, 'types', 0, 'meta'], action);
      const entity = get([entities, id], apiStore);

      if (entity) {
        const newEntity = transform(entity, action[RSAA].body);
        apiStore = set([entities, id], newEntity, apiStore);
        return next({
          type: SUCCESS,
          meta: get([RSAA, 'types', 1, 'meta'], action),
          payload: newEntity
        });
      } else
        return next({
          type: FAILURE,
          meta: get([RSAA, 'types', 2, 'meta'], action),
          error: true
        });
    }

    return next(action);
  };
};
