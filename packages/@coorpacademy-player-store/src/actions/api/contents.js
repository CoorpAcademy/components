// @flow

import buildTask from '@coorpacademy/redux-task';
import type {Content as ContentType, Engine} from '@coorpacademy/progression-engine';
import {getContent, getContentInfo, getSlide} from '../../utils/state-extract';
import type {Dispatch, ContentsActions, GetState} from '../../types';

export const CONTENT_FETCH_REQUEST: string = '@@content/FETCH_REQUEST';
export const CONTENT_FETCH_SUCCESS: string = '@@content/FETCH_SUCCESS';
export const CONTENT_FETCH_FAILURE: string = '@@content/FETCH_FAILURE';

export const fetchContent = (type: string, ref: string) => (
  dispatch: Dispatch,
  getState: GetState,
  {services}
): Dispatch => {
  const {Content} = services;

  const action: ContentsActions = buildTask({
    types: [CONTENT_FETCH_REQUEST, CONTENT_FETCH_SUCCESS, CONTENT_FETCH_FAILURE],
    task: () => Content.find(type, ref),
    meta: {type, ref},
    bailout: getContent(type, ref)
  });

  return dispatch(action);
};

export const CONTENT_INFO_FETCH_REQUEST: string = '@@content-info/FETCH_REQUEST';
export const CONTENT_INFO_FETCH_SUCCESS: string = '@@content-info/FETCH_SUCCESS';
export const CONTENT_INFO_FETCH_FAILURE: string = '@@content-info/FETCH_FAILURE';

export const fetchContentInfo = (content: ContentType, engine: Engine) => (
  dispatch: Dispatch,
  getState: GetState,
  {services}
): Dispatch => {
  const {Content} = services;

  const action: ContentsActions = buildTask({
    types: [CONTENT_INFO_FETCH_REQUEST, CONTENT_INFO_FETCH_SUCCESS, CONTENT_INFO_FETCH_FAILURE],
    task: () => Content.getInfo(content.ref, engine.ref, engine.version),
    meta: content,
    bailout: getContentInfo
  });

  return dispatch(action);
};

export const fetchSlideChapter = (slideRef: string) => async (
  dispatch: Dispatch,
  getState: GetState,
  {services}
): Dispatch => {
  const slideFetchResult = await dispatch(fetchContent('slide', slideRef));
  if (slideFetchResult.error) {
    return slideFetchResult;
  }
  const slide: Slide = getSlide(slideRef)(getState());
  return dispatch(fetchContent('chapter', slide.chapter_id));
};
