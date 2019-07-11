// @flow

import buildTask from '@coorpacademy/redux-task';

import {getVideoUri} from '../../utils/state-extract';
import type {Services} from '../../definitions/services';
import type {VideoProvider} from '../../definitions/models';
import type {
  Action,
  Dispatch,
  DispatchedAction,
  GetState,
  ThunkAction
} from '../../definitions/redux';

export const VIDEOS_FETCH_URI_REQUEST: string = '@@videos/FETCH_URI_REQUEST';
export const VIDEOS_FETCH_URI_SUCCESS: string = '@@videos/FETCH_URI_SUCCESS';
export const VIDEOS_FETCH_URI_FAILURE: string = '@@videos/FETCH_URI_FAILURE';

export const fetchVideoUri = (id: string, provider: VideoProvider): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
  {services}: {services: Services}
): // $FlowFixMe circular declaration issue with gen-flow-files : type ThunkAction = (Dispatch, GetState, Options) => DispatchedAction
DispatchedAction => {
  const {Videos: VideosService} = services;

  const action: Action = buildTask({
    types: [VIDEOS_FETCH_URI_REQUEST, VIDEOS_FETCH_URI_SUCCESS, VIDEOS_FETCH_URI_FAILURE],
    task: () => VideosService.findUriById(id, provider),
    meta: {id, provider},
    bailout: getVideoUri(id)
  });

  return dispatch(action);
};
