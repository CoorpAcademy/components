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
import {find as findContent} from './content';

const generateId = () => uniqueId('progression');

// eslint-disable-next-line require-await
export const getEngineConfig = async engine => {
  return getConfig(engine);
};

export const openAssistance = progression => {
  // eslint-disable-next-line no-console
  console.log('test progression', progression);
  return progression;
};

const getAvailableContent = fixtures => async content => {
  const {getChapterRulesByContent, findSlideByChapter} = fixtures;
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

const save = fixtures => progression => {
  const {saveProgression} = fixtures;
  saveProgression(fixtures);
  return progression;
};

export const findBestOf = (engineRef, contentRef, progressionId = null) => {
  const bestProgression = pipe(
    filter(p => get('content.ref', p) === contentRef && get('_id', p) !== progressionId),
    maxBy(p => p.state.stars || 0)
  )([...progressionStore.values()]);
  return bestProgression || set('state.stars', 0, {});
};

const addActionAndSaveProgression = (progression, action) => {
  const newProgression = update('actions', actions => actions.concat(action), progression);
  const newState = createState(newProgression);
  return pipe(set('state', newState), save)(newProgression);
};

const postAnswer = fixtures => async (progressionId, payload) => {
  const {findSlideById, findProgressionById} = fixtures;
  const userAnswer = getOr([''], 'answer', payload);
  const slideId = payload.content.ref;
  const slide = findSlideById(slideId);
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
  const availableContent = await getAvailableContent(progression.content);
  const config = getConfigForProgression(progression);
  const action = computeNextStepAfterAnswer(
    config,
    state,
    availableContent,
    slide,
    partialAnswerAction
  );

  return addActionAndSaveProgression(progression, action);
};

export const requestClue = async (progressionId, payload) => {
  const progression = await findById(progressionId);

  const action = {
    type: 'clue',
    payload
  };

  return addActionAndSaveProgression(progression, action);
};

export const acceptExtraLife = async (progressionId, payload) => {
  const progression = await findById(progressionId);
  const config = getConfigForProgression(progression);
  const action = computeNextStepOnAcceptExtraLife(
    config,
    progression.state,
    await getAvailableContent(progression.content)
  );

  return addActionAndSaveProgression(progression, action);
};

export const refuseExtraLife = async (progressionId, payload) => {
  const progression = await findById(progressionId);
  const config = getConfigForProgression(progression);
  const action = computeNextStepOnRefuseExtraLife(config, progression.state);

  return addActionAndSaveProgression(progression, action);
};

export const create = async (engine, content) => {
  const _id = generateId();

  const availableContent = await getAvailableContent(content);
  const newProgression = createProgression(engine, content, {}, availableContent);
  const state = createState(newProgression);

  return save({
    ...newProgression,
    _id,
    state
  });
};

export const markResourceAsViewed = async (progressionId, payload) => {
  const progression = await findById(progressionId);

  const action = {
    type: 'resource',
    payload
  };

  return addActionAndSaveProgression(progression, action);
};

export const ProgressionsService = fixtures => ({
  getAvailableContent: getAvailableContent(fixtures),
  postAnswer: postAnswer(fixtures),
  save: save(fixtures)
});
