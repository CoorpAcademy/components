import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import set from 'lodash/fp/set';
import {StoreToken, STORE_TOKEN} from '../actions/token';
import {IsFetching, IS_FETCHING_TRUE} from '../actions/data/is-fetching';
import {ValidateSlide, VALIDATE_SLIDE} from '../actions/data/validate-slide';
import {DataState} from '../types/data';
import {setToken} from './token';

const defaultState = {
  isFetching: true,
  slideValidationResult: null,
  token: null
};

type ApiActions = IsFetching | ValidateSlide | StoreToken;

// eslint-disable-next-line default-param-last
const data = (state: DataState = defaultState, action: ApiActions): DataState => {
  switch (action.type) {
    case STORE_TOKEN: {
      return setToken(action.payload, state);
    }
    case VALIDATE_SLIDE: {
      const previousSlideNumber: number = getOr(-1, 'slideValidationResult.slideNumber', state);
      // hard coded for now
      return set(
        'slideValidationResult',
        {
          slideNumber: previousSlideNumber + 1,
          result: 'success',
          // exitNode
          nextSlide: {
            questionText: 'Test',
            answerUI: {
              model: {
                answers: [
                  {
                    title: 'There is no need for a password',
                    onClick: noop,
                    selected: false
                  },
                  {
                    title: 'Lorem ipsum',
                    onClick: noop,
                    selected: false
                  },
                  {
                    title: 'Lorem',
                    onClick: noop,
                    selected: true,
                    order: 1
                  },
                  {
                    title: 'You need to have a password',
                    onClick: noop,
                    selected: false
                  },
                  {
                    title: 'Pouet',
                    onClick: noop,
                    selected: true,
                    order: 0
                  }
                ],
                type: 'qcmDrag'
              },
              help: 'Help text will appear here'
            }
          }
        },
        state
      );
    }
    case IS_FETCHING_TRUE: {
      return set('isFetching', true, state);
    }

    // case VALIDATE_SLIDE_FAILURE: {
    //   return set('entities.isFetching', false, state);
    // }

    default:
      return state;
  }
};

export default data;
