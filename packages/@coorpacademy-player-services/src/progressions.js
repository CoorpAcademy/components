// @flow strict

import {
  createProgression,
  createState,
  computeNextStepAfterAnswer,
  computeNextStepOnAcceptExtraLife,
  computeNextStepOnRefuseExtraLife,
  getConfig,
  getConfigForProgression,
  getFastSlideExitNode
} from '@coorpacademy/progression-engine';
import {update, pipe, filter, get, getOr, set, maxBy, map} from 'lodash/fp';
import type {
  Action,
  AvailableContent,
  Config,
  Content,
  ContentType,
  ContentSlide,
  Engine,
  EngineConfig,
  GenericContent,
  Progression,
  ResourceContent
} from '@coorpacademy/progression-engine';
import {CONTENT_TYPE} from './definitions';
import type {DataLayer, UserAnswerAPI, PartialPayload} from './definitions';

type AcceptExtraLife = (
  progressionId: string,
  payload: {
    content: Content
  }
) => Promise<Progression>;

type CreateProgression = (string, Engine, GenericContent, EngineConfig) => Promise<Progression>;

type FindBestOf = (
  engineRef: string,
  contentType: ContentType,
  contentRef: string,
  progressionId: string
) => Promise<{|stars: number|}>;
type FindById = (id: string) => Promise<Progression | void>;
type GetAvailableContent = Content => Promise<AvailableContent>;
type MarkResourceAsViewed = (
  progressionId: string,
  payload: {
    resource: ResourceContent,
    content: Content
  }
) => Promise<Progression>;

type PostAnswer = (
  progressionId: string,
  payload: UserAnswerAPI,
  partialPayload?: PartialPayload
) => Promise<Progression>;
type RefuseExtraLife = (
  progressionId: string,
  payload: {
    content: Content
  }
) => Promise<Progression>;

type RequestClue = (
  progressionId: string,
  payload: {content: ContentSlide}
) => Promise<Progression>;

type ProgressionsService = {|
  acceptExtraLife: AcceptExtraLife,
  create: CreateProgression,
  findBestOf: FindBestOf,
  findById: FindById,
  getAvailableContent: GetAvailableContent,
  getEngineConfig: Engine => Promise<Config>,
  markResourceAsViewed: MarkResourceAsViewed,
  openAssistance: Progression => Progression,
  postAnswer: PostAnswer,
  refuseExtraLife: RefuseExtraLife,
  requestClue: RequestClue,
  save: Progression => Promise<Progression>
|};

const findById = (dataLayer: DataLayer): FindById => async (
  id: string
): Promise<Progression | void> => {
  const {findProgressionById} = dataLayer;
  const progression = await findProgressionById(id);
  return progression;
};

// eslint-disable-next-line require-await
const getEngineConfig = async (engine: Engine): Promise<Config> => {
  return getConfig(engine);
};

const openAssistance = (progression: Progression): Progression => {
  return progression;
};

const getAvailableContent = (dataLayer: DataLayer): GetAvailableContent => async (
  content: Content
): Promise<AvailableContent> => {
  const {getChapterRulesByContent, findSlideByChapter} = dataLayer;
  const {findLevelById} = dataLayer;
  let chapters: Array<Content>;

  if (content.type === CONTENT_TYPE.LEVEL) {
    const level = await findLevelById(content.ref);
    if (!level) {
      throw new Error(`level ${content.ref} has no chapterIds`);
    }
    chapters = map(ref => ({type: CONTENT_TYPE.CHAPTER, ref}), level.chapterIds);
  } else {
    chapters = [content];
  }

  return Promise.all(
    chapters.map(async chapter => ({
      ref: chapter.ref,
      slides: await findSlideByChapter(chapter.ref),
      rules: await getChapterRulesByContent(chapter.ref)
    }))
  );
};

const createSave = (dataLayer: DataLayer): (Progression => Promise<Progression>) => (
  progression: Progression
): Promise<Progression> => {
  const {saveProgression} = dataLayer;
  return saveProgression(progression);
};

const findBestOf = (dataLayer: DataLayer): FindBestOf => async (
  engineRef: string,
  contentType: ContentType,
  contentRef: string,
  progressionId: string = ''
): Promise<{|stars: number|}> => {
  const {getAllProgressions} = dataLayer;
  const progressions = await getAllProgressions();

  const bestProgression: Progression | void = pipe(
    filter(p => get('content.ref', p) === contentRef && get('_id', p) !== progressionId),
    maxBy(p => (p.state && p.state.stars) || 0)
  )(progressions);

  return {
    stars: (bestProgression && get('state.stars', bestProgression)) || 0
  };
};

const addActionAndSaveProgression = (
  dataLayer: DataLayer
): ((Progression, Action) => Promise<Progression>) => (
  progression: Progression,
  action: Action
): Promise<Progression> => {
  const newProgression = update('actions', actions => actions.concat(action), progression);
  const newState = createState(newProgression);
  const save = createSave(dataLayer);
  return pipe(set('state', newState), save)(newProgression);
};

const postAnswer = (dataLayer: DataLayer): PostAnswer => async (
  progressionId: string,
  payload: UserAnswerAPI,
  partialPayload: PartialPayload = {godMode: false, fastSlide: false}
): Promise<Progression> => {
  const {findSlideById, findProgressionById} = dataLayer;
  const progression = await findProgressionById(progressionId);

  if (!progression) {
    throw new Error(`progression "${progressionId}" not found`);
  }

  const state = progression.state;

  if (!state) {
    throw new Error(`progression "${progressionId}" has no state`);
  }

  const answer = getOr([''], 'answer', payload);
  const godMode = get('godMode', partialPayload);
  const fastSlide = get('fastSlide', partialPayload);
  const slideId = payload.content.ref;
  const slide = await findSlideById(slideId);

  const partialAnswerAction = {
    type: 'answer',
    payload: {
      content: payload.content,
      answer,
      godMode,
      fastSlide
    }
  };

  const _getAvailableContent = getAvailableContent(dataLayer);
  const availableContent: AvailableContent = await _getAvailableContent(progression.content);
  const config = getConfigForProgression(progression);
  let action = computeNextStepAfterAnswer(
    config,
    state,
    availableContent,
    slide,
    partialAnswerAction
  );

  /* istanbul ignore if */
  if (!action) {
    throw new Error(`computeNextStepAfterAnswer failed`);
  }

  if (fastSlide) {
    action = {
      ...action,
      payload: {...action.payload, ...getFastSlideExitNode(config, godMode, availableContent)}
    };
  }

  // $FlowFixMe: While waiting on a good solution to have a dummy initial State
  return addActionAndSaveProgression(dataLayer)(progression, action);
};

const requestClue = (dataLayer: DataLayer): RequestClue => async (
  progressionId: string,
  payload: {content: ContentSlide}
): Promise<Progression> => {
  const {findProgressionById} = dataLayer;
  const progression = await findProgressionById(progressionId);

  if (!progression) {
    throw new Error(`progression "${progressionId}" not found`);
  }

  const action = {
    type: 'clue',
    payload
  };

  return addActionAndSaveProgression(dataLayer)(progression, action);
};

const acceptExtraLife = (dataLayer: DataLayer): AcceptExtraLife => async (
  progressionId: string,
  payload: {
    content: Content
  }
): Promise<Progression> => {
  const {findProgressionById} = dataLayer;
  const progression = await findProgressionById(progressionId);

  if (!progression) {
    throw new Error(`progression "${progressionId}" not found`);
  }

  const state = progression.state;

  if (!state) {
    throw new Error(`progression "${progressionId}" has no state`);
  }

  const config = getConfigForProgression(progression);
  const _getAvailableContent = getAvailableContent(dataLayer);
  const availableContent = await _getAvailableContent(progression.content);
  const action = computeNextStepOnAcceptExtraLife(config, state, availableContent);

  /* istanbul ignore if */
  if (!action) {
    throw new Error(`computeNextStepOnAcceptExtraLife failed`);
  }

  return addActionAndSaveProgression(dataLayer)(progression, action);
};

const refuseExtraLife = (dataLayer: DataLayer): RefuseExtraLife => async (
  progressionId: string,
  payload: {
    content: Content
  }
): Promise<Progression> => {
  const {findProgressionById} = dataLayer;
  const progression = await findProgressionById(progressionId);

  if (!progression) {
    throw new Error(`progression "${progressionId}" not found`);
  }

  const state = progression.state;

  if (!state) {
    throw new Error(`progression "${progressionId}" has no state`);
  }

  const config = getConfigForProgression(progression);
  const action = computeNextStepOnRefuseExtraLife(config, state);

  return addActionAndSaveProgression(dataLayer)(progression, action);
};

const create = (dataLayer: DataLayer): CreateProgression => async (
  _id: string,
  engine: Engine,
  content: GenericContent,
  engineOptions: EngineConfig
): Promise<Progression> => {
  const _getAvailableContent = getAvailableContent(dataLayer);
  const availableContent = await _getAvailableContent(content);

  const newProgression = createProgression(engine, content, engineOptions, availableContent);
  const state = createState(newProgression);

  const save = createSave(dataLayer);
  return save({
    ...newProgression,
    _id,
    state
  });
};

const markResourceAsViewed = (dataLayer: DataLayer): MarkResourceAsViewed => async (
  progressionId: string,
  payload: {
    resource: ResourceContent,
    content: Content
  }
): Promise<Progression> => {
  const {findProgressionById} = dataLayer;
  const progression = await findProgressionById(progressionId);

  if (!progression) {
    throw new Error(`progression "${progressionId}" not found`);
  }

  const action = {
    type: 'resource',
    payload
  };

  return addActionAndSaveProgression(dataLayer)(progression, action);
};

const createProgressionsService = (dataLayer: DataLayer): ProgressionsService => ({
  acceptExtraLife: acceptExtraLife(dataLayer),
  create: create(dataLayer),
  findBestOf: findBestOf(dataLayer),
  findById: findById(dataLayer),
  getAvailableContent: getAvailableContent(dataLayer),
  getEngineConfig,
  markResourceAsViewed: markResourceAsViewed(dataLayer),
  openAssistance,
  postAnswer: postAnswer(dataLayer),
  refuseExtraLife: refuseExtraLife(dataLayer),
  requestClue: requestClue(dataLayer),
  save: createSave(dataLayer)
});

export type {ProgressionsService};
export default createProgressionsService;
