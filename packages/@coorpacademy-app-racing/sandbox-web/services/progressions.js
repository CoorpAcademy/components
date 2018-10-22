import EventEmitter from 'events'; // eslint-disable-line fp/no-events
import {
  createProgression,
  createState,
  computeNextStepAfterAnswer,
  getConfig,
  getConfigForProgression
} from '@coorpacademy/progression-engine';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import map from 'lodash/fp/map';
import pull from 'lodash/fp/pull';
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

const messageBus = new EventEmitter();
messageBus.setMaxListeners(100);
let robotIsAnswering = false;

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
  return pipe(groupBy('chapter_id'), toPairs, map(([chapterId, slides]) => ({chapterId, slides})))(
    slidesData
  );
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

  messageBus.emit(`'progression-refreshed-'${progressionId}`, {
    progression: nextProgression,
    userId,
    teamIndex: get(['state', 'users', userId, 'team'], nextProgression),
    isCorrect: action.payload.isCorrect
  });

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

// ------------------------------------------------------------------------------

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const delay = (t, v) => {
  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
};

const robotAnswer = (userId, team, answer, isCorrect) => async progressionId => {
  await delay(5000);
  const teamIndex = 0;

  const progression = progressionStore.get(progressionId);
  const [teammateId] = pull(userId, progression.state.teams[team].players);
  const user1QuestionNum = progression.state.users[teammateId].questionNum;
  const user2QuestionNum = progression.state.users[userId].questionNum;

  if (user1QuestionNum < user2QuestionNum) {
    return robotAnswer(userId, team, answer, isCorrect)(progressionId);
  }

  const content = progression.state.users[userId].nextContent;
  const nextProgression = await postAnswer(progressionId, {content, answer}, userId, true);

  messageBus.emit(`'progression-refreshed-'${progressionId}`, {
    progression: nextProgression,
    userId,
    teamIndex,
    isCorrect
  });

  const nextIsCorrect = isCorrect === undefined ? true : random(1, 10) > 5;
  robotAnswer(userId, team, answer, nextIsCorrect)(progressionId);
};

export const waitForRefresh = progressionId => {
  if (!robotIsAnswering) {
    robotAnswer('user_2', 0)(progressionId);

    setTimeout(function() {
      robotAnswer('user_3', 1, ['plop', 'plip', 'plup'], random(1, 10) > 5)(progressionId);
    }, 1000);

    setTimeout(function() {
      robotAnswer('user_4', 1, ['ploup', 'pliup', 'pluup'], random(1, 10) > 5)(progressionId);
    }, 1010);

    robotIsAnswering = true;
  }

  return new Promise(function(resolve, reject) {
    messageBus.once(`'progression-refreshed-'${progressionId}`, updatedProgression => {
      resolve(updatedProgression);
    });
  });
};
