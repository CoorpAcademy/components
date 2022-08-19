import type {AnyAction} from 'redux';
import type {ThunkDispatch} from 'redux-thunk';
import buildTask from '@coorpacademy/redux-task';
import get from 'lodash/fp/get';
import has from 'lodash/fp/has';
import isEmpty from 'lodash/fp/isEmpty';
import type {StoreState} from '../../reducers';
import type {Options, ProgressionFromAPI, SlideFromAPI} from '../../types/common';
import {setCurrentSlide} from '../ui/slides';

export const SLIDE_FETCH_REQUEST = '@@slides/FETCH_REQUEST' as const;
export const SLIDE_FETCH_SUCCESS = '@@slides/FETCH_SUCCESS' as const;
export const SLIDE_FETCH_FAILURE = '@@slides/FETCH_FAILURE' as const;

export interface ReceivedSlide extends AnyAction {
  type: typeof SLIDE_FETCH_SUCCESS;
  payload: SlideFromAPI;
}

type Dispatch = ThunkDispatch<StoreState, Options, AnyAction>;

export const fetchSlide =
  (progressionFromAPI: ProgressionFromAPI, token: string) =>
  async (dispatch: Dispatch, getState: () => StoreState, {services}: Options): Promise<void> => {
    const action = buildTask({
      types: [SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS, SLIDE_FETCH_FAILURE],
      bailout: (state: StoreState): boolean => {
        const {ref: slideRef} = get('state.nextContent', progressionFromAPI);
        return has(`data.slide.${slideRef}`, state);
      },
      task: () => {
        const {ref: slideRef} = get('state.nextContent', progressionFromAPI);
        return services.fetchSlide(slideRef, token);
      }
    });
    const response = await dispatch(action);

    if (response.type === SLIDE_FETCH_SUCCESS) {
      const slideFromAPI = response.payload;
      if (!slideFromAPI) throw new Error('Slide not found');
      const state = getState();
      const slides = get('data.progression.state.slides', state);
      if (isEmpty(slides)) {
        dispatch(setCurrentSlide(slideFromAPI));
      }
    }
  };
