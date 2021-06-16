// @flow

import buildTask from '@coorpacademy/redux-task';

import {getVideoUri, getVideoTracks} from '../../utils/state-extract';
import type {Services} from '../../definitions/services';
import type {VideoProvider, VideoTrackType} from '../../definitions/models';
import {VIDEO_TRACK_TYPE} from '../../definitions/models';
import type {
  Action,
  Dispatch,
  DispatchedAction,
  GetState,
  ThunkAction,
} from '../../definitions/redux';

export const FETCH_VIDEOS_URI_REQUEST: string = '@@videos/FETCH_URI_REQUEST';
export const FETCH_VIDEOS_URI_SUCCESS: string = '@@videos/FETCH_URI_SUCCESS';
export const FETCH_VIDEOS_URI_FAILURE: string = '@@videos/FETCH_URI_FAILURE';

export const FETCH_VIDEOS_TRACKS_REQUEST: string = '@@videos/FETCH_VIDEOS_TRACKS_REQUEST';
export const FETCH_VIDEOS_TRACKS_SUCCESS: string = '@@videos/FETCH_VIDEOS_TRACKS_SUCCESS';
export const FETCH_VIDEOS_TRACKS_FAILURE: string = '@@videos/FETCH_VIDEOS_TRACKS_FAILURE';

export const fetchVideoUri =
  (id: string, provider: VideoProvider): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    const {Videos: VideosService} = services;

    const action: Action = buildTask({
      types: [FETCH_VIDEOS_URI_REQUEST, FETCH_VIDEOS_URI_SUCCESS, FETCH_VIDEOS_URI_FAILURE],
      task: () => VideosService.findUriById(id, provider),
      meta: {id, provider},
      bailout: getVideoUri(id),
    });

    return dispatch(action);
  };

export const fetchVideoTracks =
  (id: string, type?: VideoTrackType = VIDEO_TRACK_TYPE.SRT): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    const {Videos: VideosService} = services;

    const action: Action = buildTask({
      types: [
        FETCH_VIDEOS_TRACKS_REQUEST,
        FETCH_VIDEOS_TRACKS_SUCCESS,
        FETCH_VIDEOS_TRACKS_FAILURE,
      ],
      task: () => VideosService.findTracksById(id, type),
      meta: {id, type},
      bailout: getVideoTracks(id),
    });

    return dispatch(action);
  };
