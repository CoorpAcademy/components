import buildTask from '@coorpacademy/redux-task';
import {Options, ProgressionFromAPI} from '../../types/common';
import {fetchSlide} from './fetch-slide';

export const POST_PROGRESSION_REQUEST = '@@progression/POST_REQUEST' as const;
export const POST_PROGRESSION_SUCCESS = '@@progression/POST_SUCCESS' as const;
export const POST_PROGRESSION_FAILURE = '@@progression/POST_FAILURE' as const;

export type ReceiveProgression = {
  type: typeof POST_PROGRESSION_SUCCESS;
  payload: {
    progression: ProgressionFromAPI;
    token: string;
  };
};

export const postProgression = (skillRef: string, token: string) =>
  buildTask({
    types: [POST_PROGRESSION_REQUEST, POST_PROGRESSION_SUCCESS, POST_PROGRESSION_FAILURE],
    task: (dispatch, getState, {services}: Options) => {
      return services.postProgression(skillRef, token).then((progression: ProgressionFromAPI) => {
        const {ref} = progression.state.nextContent;
        return dispatch(fetchSlide(ref, token));
      });
    }
  });
