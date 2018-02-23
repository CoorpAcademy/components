import {
  createProgression,
  computeNextStep,
  getConfig,
  checkAnswer,
  updateState
} from '@coorpacademy/progression-engine';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import map from 'lodash/fp/map';
import concat from 'lodash/fp/concat';
import toPairs from 'lodash/fp/toPairs';
import groupBy from 'lodash/fp/groupBy';
import uniqueId from 'lodash/fp/uniqueId';
import update from 'lodash/fp/update';
import pipe from 'lodash/fp/pipe';
import filter from 'lodash/fp/filter';
import sample from 'lodash/fp/sample';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import set from 'lodash/fp/set';
import maxBy from 'lodash/fp/maxBy';
import reduce from 'lodash/fp/reduce';
import progressionsData from './progressions.data';
import slidesData from './slides.data';

let lastUserAnswerTime = Date.now();

const slideStore = reduce(
  (slideMap, slide) => slideMap.set(slide._id, slide),
  new Map(),
  slidesData
);

const generateId = () => uniqueId('progression');
let progressionStore = reduce(
  (progressionMap, progression) =>
    progressionMap.set(
      progression._id,
      progression
    ),
  new Map(),
  progressionsData
);

// eslint-disable-next-line require-await
export const findById = async id => {
  if (!progressionStore.has(id)) throw new Error('Progression not found');
  let progression = progressionStore.get(id);


  if (Date.now() - lastUserAnswerTime >= 2000 && get('users.user_1.questionNum', progression.state) !== get('users.user_2.questionNum', progression.state)) {
    progression = set('state', pipe(
      set('users.user_2.questionNum', get('users.user_2.questionNum', progression.state) + 1),
      set('users.user_2.slides', get('users.user_1.slides', progression.state)),
      set('teams.0.step', get('teams.0.step', progression.state) + 1),
    )(progression.state), progression);

    progressionStore.set(progressionId, progression);
  }

  return progression;
};

// eslint-disable-next-line require-await
export const getEngineConfig = async engine => {
  return getConfig(engine);
};

const createSlidePools = () => {
  return pipe(groupBy('chapter_id'), toPairs, map(([chapterId, slides]) => ({chapterId, slides})))(
    slidesData
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
  )(progressionsData);
  return bestProgression || set('state.stars', 0, {});
};

export const postAnswer = async (progressionId, payload) => {
  const progression = progressionStore.get(progressionId);
  const nextProgression = set('state', pipe(
    set('users.user_1.questionNum', get('users.user_1.questionNum', progression.state) + 1),
    set('users.user_1.slides', concat(get('users.user_1.slides', progression.state), [payload.content.ref])),
    set('teams.0.step', get('teams.0.step', progression.state) + 1),
  )(progression.state), progression);

  progressionStore.set(progressionId, nextProgression);

  return nextProgression;
};

export const requestClue = async (progressionId, payload) => {
  const progression = await findById(progressionId);
  const {engine} = progression;

  const action = {
    type: 'clue',
    payload
  };

  return pipe(update('state', state => updateState(engine, state, [action])), save)(progression);
};

export const postExtraLife = async (progressionId, payload) => {
  const progression = await findById(progressionId);
  const slidePools = createSlidePools();
  const {content, isAccepted} = payload;

  const feedNextContent = _action => {
    let nextState = updateState(progression.engine, progression.state, [_action]);
    nextState = set('nextContent', progression.state.content, nextState);
    return set(
      'payload.nextContent',
      computeNextStep(progression.engine, slidePools, nextState),
      _action
    );
  };

  const action = feedNextContent({
    type: isAccepted ? 'extraLifeAccepted' : 'extraLifeRefused',
    payload: {
      content
    }
  });

  return pipe(update('state', state => updateState(progression.engine, state, [action])), save)(
    progression
  );
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

export const markResourceAsViewed = async (progressionId, payload) => {
  const progression = await findById(progressionId);

  const action = {
    type: 'resource',
    payload
  };

  return pipe(update('state', state => updateState(progression.engine, state, [action])), save)(
    progression
  );
};
