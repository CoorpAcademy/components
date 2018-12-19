// @flow strict

import {
  createProgression,
  createState,
  computeNextStepAfterAnswer,
  computeNextStepOnAcceptExtraLife,
  computeNextStepOnRefuseExtraLife,
  getConfig,
  getConfigForProgression
} from '@coorpacademy/progression-engine';
import uniqueId from 'lodash/fp/uniqueId';
import update from 'lodash/fp/update';
import pipe from 'lodash/fp/pipe';
import filter from 'lodash/fp/filter';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import set from 'lodash/fp/set';
import maxBy from 'lodash/fp/maxBy';
import map from 'lodash/fp/map';
import type {
  Action,
  AvailableContent,
  Config,
  Content,
  ContentSlide,
  Engine,
  EngineOptions,
  Instruction,
  Progression,
  ResourceContent
} from '@coorpacademy/progression-engine';
import {CONTENT_TYPE} from './definitions';
import type {Fixtures, UserAnswer} from './definitions';

const generateId = () => uniqueId('progression');

const findById = (fixtures: Fixtures) => async (id: string): Promise<Progression | void> => {
  const {findProgressionById} = fixtures;
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

const getAvailableContent = (fixtures: Fixtures) => async (
  content: Content
): Promise<AvailableContent> => {
  const {getChapterRulesByContent, findSlideByChapter} = fixtures;
  const {findLevelById} = fixtures;
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
      slides: findSlideByChapter(chapter.ref),
      rules: await getChapterRulesByContent(chapter.ref)
    }))
  );
};

const createSave = (fixtures: Fixtures) => (progression: Progression): Progression => {
  const {saveProgression} = fixtures;
  saveProgression(progression);
  return progression;
};

const findBestOf = (fixtures: Fixtures) => (
  engineRef: string,
  contentRef: string,
  progressionId: string = ''
): Progression => {
  const {getAllProgressions} = fixtures;
  const progressions = getAllProgressions();

  const bestProgression = pipe(
    filter(p => get('content.ref', p) === contentRef && get('_id', p) !== progressionId),
    maxBy(p => (p.state && p.state.stars) || 0)
  )(progressions);
  return bestProgression || set('state.stars', 0, {});
};

const addActionAndSaveProgression = (fixtures: Fixtures) => (
  progression: Progression,
  action: Action
): Progression => {
  const newProgression = update('actions', actions => actions.concat(action), progression);
  const newState = createState(newProgression);
  const save = createSave(fixtures);
  return pipe(set('state', newState), save)(newProgression);
};

const postAnswer = (fixtures: Fixtures) => async (
  progressionId: string,
  payload: UserAnswer
): Promise<Progression> => {
  const {findSlideById, findProgressionById} = fixtures;
  const answer = getOr([''], 'answer', payload);
  const slideId = payload.content.ref;
  const slide = await findSlideById(slideId);
  const progression = await findProgressionById(progressionId);

  if (!progression) {
    throw new Error(`progression ${progressionId} not found`);
  }

  const state = progression.state;

  if (!state) {
    throw new Error(`progression ${progressionId} has not state`);
  }

  const partialAnswerAction = {
    type: 'answer',
    payload: {
      content: payload.content,
      answer,
      godMode: false
    }
  };

  const _getAvailableContent = getAvailableContent(fixtures);
  const availableContent = await _getAvailableContent(progression.content);
  const config = getConfigForProgression(progression);
  const action = computeNextStepAfterAnswer(
    config,
    state,
    availableContent,
    slide,
    partialAnswerAction
  );

  if (!action) {
    throw new Error(`computeNextStepAfterAnswer failed`);
  }

  return addActionAndSaveProgression(fixtures)(progression, action);
};

const requestClue = (fixtures: Fixtures) => async (
  progressionId: string,
  payload: {content: ContentSlide}
): Promise<Progression> => {
  const {findProgressionById} = fixtures;
  const progression = await findProgressionById(progressionId);

  if (!progression) {
    throw new Error(`progression ${progressionId} not found`);
  }

  const action = {
    type: 'clue',
    payload
  };

  return addActionAndSaveProgression(fixtures)(progression, action);
};

const acceptExtraLife = (fixtures: Fixtures) => async (
  progressionId: string,
  payload: {
    content: Content,
    nextContent: Content,
    instructions: Array<Instruction> | null
  }
): Promise<Progression> => {
  const {findProgressionById} = fixtures;
  const progression = await findProgressionById(progressionId);

  if (!progression) {
    throw new Error(`progression ${progressionId} not found`);
  }

  const state = progression.state;

  if (!state) {
    throw new Error(`progression ${progressionId} has not state`);
  }

  const config = getConfigForProgression(progression);
  const _getAvailableContent = getAvailableContent(fixtures);
  const availableContent = await _getAvailableContent(progression.content);
  const action = computeNextStepOnAcceptExtraLife(config, state, availableContent);

  if (!action) {
    throw new Error(`computeNextStepOnAcceptExtraLife failed`);
  }

  return addActionAndSaveProgression(fixtures)(progression, action);
};

const refuseExtraLife = (fixtures: Fixtures) => async (
  progressionId: string,
  payload: {
    content: Content,
    nextContent: Content
  }
): Promise<Progression> => {
  const {findProgressionById} = fixtures;
  const progression = await findProgressionById(progressionId);

  if (!progression) {
    throw new Error(`progression ${progressionId} not found`);
  }

  const state = progression.state;

  if (!state) {
    throw new Error(`progression ${progressionId} has not state`);
  }

  const config = getConfigForProgression(progression);
  const action = computeNextStepOnRefuseExtraLife(config, state);

  return addActionAndSaveProgression(fixtures)(progression, action);
};

const create = (fixtures: Fixtures) => async (
  engine: Engine,
  content: Content,
  engineOptions: EngineOptions = {}
): Promise<Progression> => {
  const _id = generateId();

  const _getAvailableContent = getAvailableContent(fixtures);
  const availableContent = await _getAvailableContent(content);

  const newProgression = createProgression(engine, content, engineOptions, availableContent);

  if (!newProgression) {
    throw new Error(`progression could not be created properly`);
  }

  const state = createState(newProgression);

  const save = createSave(fixtures);
  return save({
    ...newProgression,
    _id,
    state
  });
};

const markResourceAsViewed = (fixtures: Fixtures) => async (
  progressionId: string,
  payload: {
    resource: ResourceContent,
    content: Content
  }
): Promise<Progression> => {
  const {findProgressionById} = fixtures;
  const progression = await findProgressionById(progressionId);

  if (!progression) {
    throw new Error(`progression ${progressionId} not found`);
  }

  const action = {
    type: 'resource',
    payload
  };

  return addActionAndSaveProgression(fixtures)(progression, action);
};

const Progressions = (fixtures: Fixtures) => ({
  acceptExtraLife: acceptExtraLife(fixtures),
  create: create(fixtures),
  findBestOf: findBestOf(fixtures),
  findById: findById(fixtures),
  getAvailableContent: getAvailableContent(fixtures),
  getEngineConfig,
  markResourceAsViewed: markResourceAsViewed(fixtures),
  openAssistance,
  postAnswer: postAnswer(fixtures),
  refuseExtraLife: refuseExtraLife(fixtures),
  requestClue: requestClue(fixtures),
  save: createSave(fixtures)
});

export default Progressions;
