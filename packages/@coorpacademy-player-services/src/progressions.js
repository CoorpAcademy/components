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
import Content from './content';

const generateId = () => uniqueId('progression');

const findById = fixtures => async id => {
  const {findProgressionById} = fixtures;
  const progression = await findProgressionById(id);
  return progression;
};

// eslint-disable-next-line require-await
const getEngineConfig = async engine => {
  return getConfig(engine);
};

const openAssistance = progression => {
  return progression;
};

const getAvailableContent = fixtures => async content => {
  const {getChapterRulesByContent, findSlideByChapter} = fixtures;
  const {find: findContent} = Content(fixtures);
  const chapters =
    content.type === 'level'
      ? map(
          ref => ({type: 'chapter', ref}),
          (await findContent(content.type, content.ref)).chapterIds
        )
      : [content];

  return Promise.all(
    chapters.map(async chapter => ({
      ref: chapter.ref,
      slides: findSlideByChapter(chapter.ref),
      rules: await getChapterRulesByContent(chapter.ref)
    }))
  );
};

const createSave = fixtures => progression => {
  const {saveProgression} = fixtures;
  saveProgression(progression);
  return progression;
};

const findBestOf = fixtures => (engineRef, contentRef, progressionId = null) => {
  const {getAllProgressions} = fixtures;
  const progressions = getAllProgressions();

  const bestProgression = pipe(
    filter(p => get('content.ref', p) === contentRef && get('_id', p) !== progressionId),
    maxBy(p => p.state.stars || 0)
  )(progressions);
  return bestProgression || set('state.stars', 0, {});
};

const addActionAndSaveProgression = fixtures => (progression, action) => {
  const newProgression = update('actions', actions => actions.concat(action), progression);
  const newState = createState(newProgression);
  const save = createSave(fixtures);
  return pipe(set('state', newState), save)(newProgression);
};

const postAnswer = fixtures => async (progressionId, payload) => {
  const {findSlideById, findProgressionById} = fixtures;
  const userAnswer = getOr([''], 'answer', payload);
  const slideId = payload.content.ref;
  const slide = await findSlideById(slideId);
  const progression = await findProgressionById(progressionId);
  const state = progression.state;

  const partialAnswerAction = {
    type: 'answer',
    payload: {
      content: payload.content,
      answer: userAnswer,
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

  return addActionAndSaveProgression(fixtures)(progression, action);
};

const requestClue = fixtures => async (progressionId, payload) => {
  const {findProgressionById} = fixtures;
  const progression = await findProgressionById(progressionId);

  const action = {
    type: 'clue',
    payload
  };

  return addActionAndSaveProgression(fixtures)(progression, action);
};

const acceptExtraLife = fixtures => async (progressionId, payload) => {
  const {findProgressionById} = fixtures;
  const progression = await findProgressionById(progressionId);
  const config = getConfigForProgression(progression);

  const _getAvailableContent = getAvailableContent(fixtures);
  const availableContent = await _getAvailableContent(progression.content);
  const action = computeNextStepOnAcceptExtraLife(config, progression.state, availableContent);

  return addActionAndSaveProgression(fixtures)(progression, action);
};

const refuseExtraLife = fixtures => async (progressionId, payload) => {
  const {findProgressionById} = fixtures;
  const progression = await findProgressionById(progressionId);
  const config = getConfigForProgression(progression);
  const action = computeNextStepOnRefuseExtraLife(config, progression.state);

  return addActionAndSaveProgression(fixtures)(progression, action);
};

const create = fixtures => async (engine, content, engineOptions = {}) => {
  const _id = generateId();

  const _getAvailableContent = getAvailableContent(fixtures);
  const availableContent = await _getAvailableContent(content);

  const newProgression = createProgression(engine, content, engineOptions, availableContent);
  const state = createState(newProgression);

  const save = createSave(fixtures);
  return save({
    ...newProgression,
    _id,
    state
  });
};

const markResourceAsViewed = fixtures => async (progressionId, payload) => {
  const {findProgressionById} = fixtures;
  const progression = await findProgressionById(progressionId);

  const action = {
    type: 'resource',
    payload
  };

  return addActionAndSaveProgression(fixtures)(progression, action);
};

const Progressions = fixtures => ({
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
