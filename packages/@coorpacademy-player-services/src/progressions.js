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
import reduce from 'lodash/fp/reduce';
import map from 'lodash/fp/map';
import {find as findContent} from './content';
import progressionsData from './fixtures/progressions';
import chapterRulesData from './fixtures/chapter-rules';
import slidesData from './fixtures/slides';

const slideStore = reduce(
  (slideMap, slide) => slideMap.set(slide._id, slide),
  new Map(),
  slidesData
);

const toMapByChapterRef = reduce((m, object) => m.set(object.chapterRef, object));
const chapterRules = toMapByChapterRef(new Map(), chapterRulesData);

const getChapterRulesByContent = ref => {
  return get('rules', chapterRules.get(ref));
};

const generateId = () => uniqueId('progression');
const progressionStore = reduce(
  (progressionMap, progression) => {
    const newState = createState(progression);
    progressionMap.set(progression._id, set('state', newState, progression));
    return progressionMap;
  },
  new Map(),
  progressionsData
);

// eslint-disable-next-line require-await
export const findById = async id => {
  if (!progressionStore.has(id)) throw new Error('Progression not found');
  return progressionStore.get(id);
};

// eslint-disable-next-line require-await
export const getEngineConfig = async engine => {
  return getConfig(engine);
};

export const openAssistance = progression => {
  // eslint-disable-next-line no-console
  console.log('test progression', progression);
  return progression;
};

const getAvailableContent = async content => {
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
      slides: filter({chapter_id: chapter.ref}, slidesData),
      rules: await getChapterRulesByContent(chapter.ref)
    }))
  );
};

export const save = progression => {
  progressionStore.set(progression._id, progression);
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

export const postAnswer = async (progressionId, payload) => {
  const userAnswer = getOr([''], 'answer', payload);
  const slideId = payload.content.ref;
  const slide = slideStore.get(slideId);
  const progression = await findById(progressionId);
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
