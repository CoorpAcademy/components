// @flow

import buildTask from '@coorpacademy/redux-task';
import type {Content, ContentType, Engine, Slide} from '@coorpacademy/progression-engine';
import {getContent, getContentInfo, getSlide} from '../../utils/state-extract';
import type {Services} from '../../definitions/services';
import type {
  Action,
  Dispatch,
  DispatchedAction,
  GetState,
  ThunkAction
} from '../../definitions/redux';

export const CONTENT_FETCH_REQUEST: string = '@@content/FETCH_REQUEST';
export const CONTENT_FETCH_SUCCESS: string = '@@content/FETCH_SUCCESS';
export const CONTENT_FETCH_FAILURE: string = '@@content/FETCH_FAILURE';

export const fetchContent =
  (
    type: ContentType,
    ref: string,
    // This is an optional parameter object, which you can you to pass
    // data down to any of your functions
    // eslint-disable-next-line flowtype/no-weak-types
    options?: {[key: string]: any} = {}
  ): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    const {Content: ContentService} = services;

    const action: Action = buildTask({
      types: [CONTENT_FETCH_REQUEST, CONTENT_FETCH_SUCCESS, CONTENT_FETCH_FAILURE],
      task: () => ContentService.find(type, ref, options),
      meta: {type, ref},
      bailout: getContent(type, ref)
    });

    return dispatch(action);
  };

export const CONTENT_INFO_FETCH_REQUEST: string = '@@content-info/FETCH_REQUEST';
export const CONTENT_INFO_FETCH_SUCCESS: string = '@@content-info/FETCH_SUCCESS';
export const CONTENT_INFO_FETCH_FAILURE: string = '@@content-info/FETCH_FAILURE';

export const fetchContentInfo =
  (content: Content, engine: Engine): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    const {Content: ContentService} = services;

    const action: Action = buildTask({
      types: [CONTENT_INFO_FETCH_REQUEST, CONTENT_INFO_FETCH_SUCCESS, CONTENT_INFO_FETCH_FAILURE],
      task: () => ContentService.getInfo(content.ref, engine.ref, engine.version),
      meta: content,
      bailout: getContentInfo
    });

    return dispatch(action);
  };

export const fetchSlideChapter =
  (slideRef: string): ThunkAction =>
  async (
    dispatch: Dispatch,
    getState: GetState,
    {services}: {services: Services}
  ): DispatchedAction => {
    const slideFetchResult = await dispatch(fetchContent('slide', slideRef));
    if (slideFetchResult.error) {
      return slideFetchResult;
    }
    const slide: Slide = getSlide(slideRef)(getState());

    return dispatch(fetchContent('chapter', slide.chapter_id));
  };
