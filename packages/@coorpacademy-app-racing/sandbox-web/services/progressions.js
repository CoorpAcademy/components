import {
  createProgression,
  createState,
  computeNextStepAfterAnswer,
  getConfig,
  getConfigForProgression
} from '@coorpacademy/progression-engine';
import getOr from 'lodash/fp/getOr';
import map from 'lodash/fp/map';
import toPairs from 'lodash/fp/toPairs';
import groupBy from 'lodash/fp/groupBy';
import uniqueId from 'lodash/fp/uniqueId';
import update from 'lodash/fp/update';
import pipe from 'lodash/fp/pipe';
import sample from 'lodash/fp/sample';
import set from 'lodash/fp/set';
import reduce from 'lodash/fp/reduce';
import filter from 'lodash/fp/filter';
import {find as findContent} from './content';
import progressionsData from './fixtures/progressions';
import slidesData from './fixtures/slides';

const delay = (t, v) => {
  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
};

const slideStore = reduce(
  (slideMap, slide) => slideMap.set(slide._id, slide),
  new Map(),
  slidesData
);

const generateId = () => uniqueId('progression');
const progressionStore = reduce(
  (progressionMap, progression) => progressionMap.set(progression._id, progression),
  new Map(),
  progressionsData
);

export const save = progression => {
  progressionStore.set(progression._id, progression);
  return progression;
};

const addActionAndSaveProgression = (progression, action) => {
  const newProgression = update('actions', actions => actions.concat(action), progression);
  const newState = createState(newProgression);
  return pipe(
    set('state', newState),
    save
  )(newProgression);
};

export const findById = id => {
  if (!progressionStore.has(id)) throw new Error('Progression not found');
  const progression = progressionStore.get(id);
  return progression;
};

export const getEngineConfig = engine => {
  return getConfig(engine);
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
    chapters.map(chapter => ({
      ref: chapter.ref,
      slides: filter({chapter_id: chapter.ref}, slidesData),
      rules: []
    }))
  );
};

const createSlidePools = () => {
  return pipe(
    groupBy('chapter_id'),
    toPairs,
    map(([chapterId, slides]) => ({chapterId, slides}))
  )(slidesData);
};

export const postAnswer = async (progressionId, payload, forcedUser, godMode = false) => {
  const userId = forcedUser || 'user_1';
  const userAnswer = getOr([''], 'answer', payload);
  const slideId = payload.content.ref;
  const slide = slideStore.get(slideId);
  const progression = progressionStore.get(progressionId);
  const state = progression.state;

  const partialAnswerAction = {
    type: 'answer',
    authors: [userId],
    payload: {
      content: payload.content,
      answer: userAnswer,
      godMode
    }
  };

  const availableContent = await getAvailableContent(progression.content);
  const config = getConfigForProgression(progression);
  const action = computeNextStepAfterAnswer(
    config,
    state.users[userId],
    availableContent,
    slide,
    partialAnswerAction
  );

  if (!action) {
    throw new Error('could not record the action and find a next slide');
  }

  const nextProgression = addActionAndSaveProgression(progression, action);
  return nextProgression;
};

export const waitForRefresh = async progressionId => {
  await delay(3000);

  const userId = 'user_2';
  const teamIndex = 0;
  const isCorrect = true;

  const progression = progressionStore.get(progressionId);
  const content = progression.state.users[userId].nextContent;

  const nextProgression = await postAnswer(progressionId, {content}, userId, true);

  return {
    progression: nextProgression,
    userId,
    teamIndex,
    isCorrect
  };
};

// eslint-disable-next-line require-await
export const create = async progression => {
  const _id = generateId();
  const slidePools = createSlidePools();
  const chapter = {
    ref: 'cha_Ny1BTxRp~',
    type: 'chapter'
  };
  const initialContent = {
    ref: sample(slidePools[0].slides)._id,
    type: 'slide'
  };

  const newProgression = createProgression(progression.engine, chapter, initialContent);
  return save({
    _id,
    ...newProgression
  });
};
