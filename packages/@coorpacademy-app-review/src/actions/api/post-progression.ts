import type {AnyAction} from 'redux';
import type {ThunkAction, ThunkDispatch} from 'redux-thunk';
import buildTask from '@coorpacademy/redux-task';
import {Options, ProgressionFromAPI} from '../../types/common';
import type {StoreState} from '../../reducers';
import {fetchSlide} from './fetch-slide';

export const POST_PROGRESSION_REQUEST = '@@progression/POST_REQUEST' as const;
export const POST_PROGRESSION_SUCCESS = '@@progression/POST_SUCCESS' as const;
export const POST_PROGRESSION_FAILURE = '@@progression/POST_FAILURE' as const;

export interface ReceiveProgression extends AnyAction {
  type: typeof POST_PROGRESSION_SUCCESS;
  payload: ProgressionFromAPI;
}

export type PostProgressionAction = ThunkAction<
  Promise<ProgressionFromAPI>,
  StoreState,
  Options,
  AnyAction
>;

type Dispatch = ThunkDispatch<StoreState, Options, AnyAction>;

export const postProgression = (skillRef: string, token: string): PostProgressionAction =>
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
