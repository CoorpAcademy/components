// @flow strict

import {get, pipe, includes} from 'lodash/fp';
import buildTask from '@coorpacademy/redux-task';
import type {
  Answer,
  Content,
  Lesson,
  Engine,
  EngineConfig,
  Progression,
  ProgressionId,
} from '@coorpacademy/progression-engine';
import type {Services} from '../../definitions/services';
import type {PostAnswerPartialPayload} from '../../definitions/services/progressions';
import {
  getProgression,
  getBestScore,
  getEngine,
  getEngineConfig,
  getCurrentSlide,
  getPreviousSlide,
} from '../../utils/state-extract';
import type {Dispatch, DispatchedAction, GetState, ThunkAction} from '../../definitions/redux';

export type Action = {|
  type: '@@progression/FETCH_SUCCESS' | '@@progression/CREATE_SUCCESS',
  payload: Progression,
  meta?: {
    id?: ProgressionId,
    progressionId?: ProgressionId,
  },
|};

export const PROGRESSION_CREATE_REQUEST: string = '@@progression/CREATE_REQUEST';
export const PROGRESSION_CREATE_SUCCESS: string = '@@progression/CREATE_SUCCESS';
export const PROGRESSION_CREATE_FAILURE: string = '@@progression/CREATE_FAILURE';

export const createProgression =
  (_id: string, engine: Engine, content: Content, config: EngineConfig): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    const {Progressions} = services;

    const action = buildTask({
      types: [PROGRESSION_CREATE_REQUEST, PROGRESSION_CREATE_SUCCESS, PROGRESSION_CREATE_FAILURE],
      task: () => Progressions.create(_id, engine, content, config),
      meta: {},
    });

    return dispatch(action);
  };

export const PROGRESSION_FETCH_REQUEST: string = '@@progression/FETCH_REQUEST';
export const PROGRESSION_FETCH_SUCCESS: string = '@@progression/FETCH_SUCCESS';
export const PROGRESSION_FETCH_FAILURE: string = '@@progression/FETCH_FAILURE';

export const fetchProgression =
  (id: ProgressionId): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    const {Progressions} = services;

    const action = buildTask({
      types: [PROGRESSION_FETCH_REQUEST, PROGRESSION_FETCH_SUCCESS, PROGRESSION_FETCH_FAILURE],
      task: () => Progressions.findById(id),
      meta: {id},
      bailout: getProgression(id),
    });

    return dispatch(action);
  };

export const ENGINE_CONFIG_FETCH_REQUEST: string = '@@progression/CONFIG_REQUEST';
export const ENGINE_CONFIG_FETCH_SUCCESS: string = '@@progression/CONFIG_SUCCESS';
export const ENGINE_CONFIG_FETCH_FAILURE: string = '@@progression/CONFIG_FAILURE';

export const fetchEngineConfig =
  (engine: Engine): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    const {Progressions} = services;

    const action = buildTask({
      types: [
        ENGINE_CONFIG_FETCH_REQUEST,
        ENGINE_CONFIG_FETCH_SUCCESS,
        ENGINE_CONFIG_FETCH_FAILURE,
      ],
      task: () => Progressions.getEngineConfig(engine),
      meta: {engine},
      bailout: getEngineConfig,
    });

    return dispatch(action);
  };

export const PROGRESSION_CREATE_ANSWER_REQUEST: string = '@@progression/CREATE_ANSWER_REQUEST';
export const PROGRESSION_CREATE_ANSWER_SUCCESS: string = '@@progression/CREATE_ANSWER_SUCCESS';
export const PROGRESSION_CREATE_ANSWER_FAILURE: string = '@@progression/CREATE_ANSWER_FAILURE';

export const createAnswer =
  (progressionId: string, answer: Answer, partialPayload: PostAnswerPartialPayload): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    const {Progressions} = services;
    const progression: Progression = getProgression(progressionId)(getState());

    if (!progression.state) {
      return dispatch({
        type: PROGRESSION_CREATE_ANSWER_FAILURE,
        payload: `progression "${progressionId}" has no state.`,
      });
    }

    const nextContent: Content = progression.state.nextContent;

    const action = buildTask({
      types: [
        PROGRESSION_CREATE_ANSWER_REQUEST,
        PROGRESSION_CREATE_ANSWER_SUCCESS,
        PROGRESSION_CREATE_ANSWER_FAILURE,
      ],
      task: () =>
        Progressions.postAnswer(
          progressionId,
          {
            content: nextContent,
            answer,
          },
          partialPayload
        ),
      meta: {
        progressionId,
        content: nextContent,
        answer,
      },
    });

    return dispatch(action);
  };

export const PROGRESSION_REQUEST_CLUE_REQUEST: string = '@@progression/REQUEST_CLUE_REQUEST';
export const PROGRESSION_REQUEST_CLUE_SUCCESS: string = '@@progression/REQUEST_CLUE_SUCCESS';
export const PROGRESSION_REQUEST_CLUE_FAILURE: string = '@@progression/REQUEST_CLUE_FAILURE';

export const requestClue =
  (progressionId: string, slideId: string): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    const {Progressions} = services;
    const state = getState();
    const progression: Progression = getProgression(progressionId)(state);
    const requestedClues = get('state.requestedClues', progression);

    const action = buildTask({
      types: [
        PROGRESSION_REQUEST_CLUE_REQUEST,
        PROGRESSION_REQUEST_CLUE_SUCCESS,
        PROGRESSION_REQUEST_CLUE_FAILURE,
      ],
      task: () =>
        Progressions.requestClue(progressionId, {
          content: {
            ref: slideId,
            type: 'slide',
          },
        }),
      bailout: () => includes(slideId, requestedClues),
      meta: {progressionId},
    });

    return dispatch(action);
  };

export const PROGRESSION_EXTRALIFEREFUSED_REQUEST: string =
  '@@progression/EXTRALIFEREFUSED_REQUEST';
export const PROGRESSION_EXTRALIFEREFUSED_SUCCESS: string =
  '@@progression/EXTRALIFEREFUSED_SUCCESS';
export const PROGRESSION_EXTRALIFEREFUSED_FAILURE: string =
  '@@progression/EXTRALIFEREFUSED_FAILURE';

export const registerRefuseExtraLife =
  (progressionId: string): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    const {Progressions} = services;
    const progression: Progression = getProgression(progressionId)(getState());
    const nextContent: Content = get('state.nextContent', progression);

    const action = buildTask({
      types: [
        PROGRESSION_EXTRALIFEREFUSED_REQUEST,
        PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
        PROGRESSION_EXTRALIFEREFUSED_FAILURE,
      ],
      task: () =>
        Progressions.refuseExtraLife(progressionId, {
          content: nextContent,
        }),
      meta: {progressionId},
    });

    return dispatch(action);
  };

export const PROGRESSION_EXTRALIFEACCEPTED_REQUEST: string =
  '@@progression/EXTRALIFEACCEPTED_REQUEST';
export const PROGRESSION_EXTRALIFEACCEPTED_SUCCESS: string =
  '@@progression/EXTRALIFEACCEPTED_SUCCESS';
export const PROGRESSION_EXTRALIFEACCEPTED_FAILURE: string =
  '@@progression/EXTRALIFEACCEPTED_FAILURE';

export const registerAcceptExtraLife =
  (progressionId: string): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    const {Progressions} = services;
    const progression: Progression = getProgression(progressionId)(getState());
    const nextContent: Content = get('state.nextContent', progression);

    const action = buildTask({
      types: [
        PROGRESSION_EXTRALIFEACCEPTED_REQUEST,
        PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
        PROGRESSION_EXTRALIFEACCEPTED_FAILURE,
      ],
      task: () =>
        Progressions.acceptExtraLife(progressionId, {
          content: nextContent,
        }),
      meta: {progressionId},
    });

    return dispatch(action);
  };

export const PROGRESSION_FETCH_BESTOF_REQUEST: string = '@@progression/FETCH_BESTOF_REQUEST';
export const PROGRESSION_FETCH_BESTOF_SUCCESS: string = '@@progression/FETCH_BESTOF_SUCCESS';
export const PROGRESSION_FETCH_BESTOF_FAILURE: string = '@@progression/FETCH_BESTOF_FAILURE';

export const fetchBestProgression =
  (progressionContent: Content, progressionId: string, force?: boolean): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    const {Progressions} = services;
    const {type, ref} = progressionContent;
    const engine = getEngine(getState());

    if (!engine) {
      return dispatch({
        type: PROGRESSION_FETCH_BESTOF_FAILURE,
        payload: `progression "${progressionId}" has no engine.`,
      });
    }

    const action = buildTask({
      types: [
        PROGRESSION_FETCH_BESTOF_REQUEST,
        PROGRESSION_FETCH_BESTOF_SUCCESS,
        PROGRESSION_FETCH_BESTOF_FAILURE,
      ],
      task: () => Progressions.findBestOf(engine.ref, type, ref, progressionId),
      bailout: force ? undefined : pipe(getBestScore, (score) => score !== undefined && score >= 0),
      meta: {type, ref},
    });

    return dispatch(action);
  };

export const PROGRESSION_RESOURCE_VIEWED_REQUEST: string = '@@progression/RESOURCE_VIEWED_REQUEST';
export const PROGRESSION_RESOURCE_VIEWED_SUCCESS: string = '@@progression/RESOURCE_VIEWED_SUCCESS';
export const PROGRESSION_RESOURCE_VIEWED_FAILURE: string = '@@progression/RESOURCE_VIEWED_FAILURE';

export const markResourceAsViewed =
  (progressionId: string, resource: Lesson): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    const {Progressions} = services;
    const state = getState();
    const {_id, ref = _id, type} = resource;
    const slide = getCurrentSlide(state) || getPreviousSlide(state);

    if (!slide) {
      return dispatch({
        type: PROGRESSION_RESOURCE_VIEWED_FAILURE,
        payload: 'slide not found.',
      });
    }

    const payload = {
      resource: {
        ref,
        type,
        version: '1',
      },
      content: {
        type: 'chapter',
        ref: slide.chapter_id,
      },
    };

    const action = buildTask({
      types: [
        PROGRESSION_RESOURCE_VIEWED_REQUEST,
        PROGRESSION_RESOURCE_VIEWED_SUCCESS,
        PROGRESSION_RESOURCE_VIEWED_FAILURE,
      ],
      task: () => Progressions.markResourceAsViewed(progressionId, payload),
      meta: {progressionId, resource},
    });

    return dispatch(action);
  };
