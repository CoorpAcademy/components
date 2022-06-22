import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import set from 'lodash/fp/set';
import {IsFetching, IS_FETCHING_TRUE} from '../actions/api/is-fetching';
import {ValidateSlide, VALIDATE_SLIDE} from '../actions/api/validate-slide';
import {ApiState} from '../types/api';

const defaultState = {
  entities: {isFetching: true, slideValidationResult: null}
};

type ApiActions = IsFetching | ValidateSlide;

// eslint-disable-next-line default-param-last
const api = (state = defaultState, action: ApiActions): ApiState => {
  switch (action.type) {
    case VALIDATE_SLIDE: {
      const previousSlideNumber: number = getOr(
        -1,
        'entities.slideValidationResult.slideNumber',
        state
      );
      // hard coded for now
      return set(
        ['entities', 'slideValidationResult'],
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
      return set('entities.isFetching', true, state);
    }

    // case VALIDATE_SLIDE_FAILURE: {
    //   return set('entities.isFetching', false, state);
    // }

    default:
      return state;
  }
};

export default api;
