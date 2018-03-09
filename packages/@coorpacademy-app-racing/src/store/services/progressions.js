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
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import reduce from 'lodash/fp/reduce';
import filter from 'lodash/fp/filter';
import progressionsData from './progressions.data';
import slidesData from './slides.data';

const lastUserAnswerTime = Date.now();

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
  return pipe(set('state', newState), save)(newProgression);
};

// eslint-disable-next-line require-await
export const findById = async id => {
  if (!progressionStore.has(id)) throw new Error('Progression not found');
  let progression = progressionStore.get(id);

  if (
    Date.now() - lastUserAnswerTime >= 2000 &&
    get('users.user_1.questionNum', progression.state) !==
      get('users.user_2.questionNum', progression.state)
  ) {
    progression = set(
      'state',
      pipe(
        set('users.user_2.questionNum', get('users.user_2.questionNum', progression.state) + 1),
        set('users.user_2.slides', get('users.user_1.slides', progression.state)),
        set('teams.0.step', get('teams.0.step', progression.state) + 1)
      )(progression.state),
      progression
    );

    progressionStore.set(id, progression);
  }

  return progression;
};

// eslint-disable-next-line require-await
export const getEngineConfig = async engine => {
  return getConfig(engine);
};

const getAvailableContent = content => {
  const chapters = [content];
  return Promise.all(
    chapters.map(chapter => ({
      ref: chapter.ref,
      slides: filter({chapter_id: chapter.ref}, slidesData),
      rules: []
    }))
  );
};

const createSlidePools = () => {
  return pipe(groupBy('chapter_id'), toPairs, map(([chapterId, slides]) => ({chapterId, slides})))(
    slidesData
  );
};

export const postAnswer = async (progressionId, payload) => {
  const userId = 'user_1';
  const userAnswer = getOr([''], 'answer', payload);
  const slideId = payload.content.ref;
  const slide = slideStore.get(slideId);
  const progression = progressionStore.get(progressionId);
  const state = createState(progression);

  const partialAnswerAction = {
    type: 'answer',
    authors: [userId],
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
    state[userId],
    availableContent,
    slide,
    partialAnswerAction
  );

  const nextProgression = addActionAndSaveProgression(progression, action);
  progressionStore.set(progressionId, nextProgression);

  return nextProgression;
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
