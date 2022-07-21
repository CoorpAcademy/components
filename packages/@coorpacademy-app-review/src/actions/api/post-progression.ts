import type {Action, Dispatch} from 'redux';
import buildTask from '@coorpacademy/redux-task';
import {Options, ProgressionFromAPI} from '../../types/common';
import type {StoreState} from '../../reducers';
import {fetchSlide} from './fetch-slide';

export const POST_PROGRESSION_REQUEST = '@@progression/POST_REQUEST' as const;
export const POST_PROGRESSION_SUCCESS = '@@progression/POST_SUCCESS' as const;
export const POST_PROGRESSION_FAILURE = '@@progression/POST_FAILURE' as const;

export type ReceiveProgression = {
  type: typeof POST_PROGRESSION_SUCCESS;
  payload: ProgressionFromAPI;
};

export const postProgression = (skillRef: string, token: string): Action =>
  buildTask({
    types: [POST_PROGRESSION_REQUEST, POST_PROGRESSION_SUCCESS, POST_PROGRESSION_FAILURE],
    task: (dispatch: Dispatch, getState: () => StoreState, {services}: Options) => {
      return services.postProgression(skillRef, token).then((progression: ProgressionFromAPI) => {
        const {ref} = progression.state.nextContent;
        dispatch(fetchSlide(ref, token));
        return progression;
      });
    }
  });
