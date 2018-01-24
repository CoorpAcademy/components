import {
  createProgression,
  createState,
  computeNextStep,
  newComputeNextStep,
  getConfig,
  updateState
} from '@coorpacademy/progression-engine';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import map from 'lodash/fp/map';
import toPairs from 'lodash/fp/toPairs';
import groupBy from 'lodash/fp/groupBy';
import uniqueId from 'lodash/fp/uniqueId';
import update from 'lodash/fp/update';
import pipe from 'lodash/fp/pipe';
import filter from 'lodash/fp/filter';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import set from 'lodash/fp/set';
import maxBy from 'lodash/fp/maxBy';
import reduce from 'lodash/fp/reduce';
import {getByContent as getChapterRulesByContent} from './chapter-rules';
import progressionsData from './progressions.data';
import slidesData from './slides.data';

const slideStore = reduce(
  (slideMap, slide) => slideMap.set(slide._id, slide),
  new Map(),
  slidesData
);

const generateId = () => uniqueId('progression');
const progressionStore = reduce(
  (progressionMap, progression) =>
    progressionMap.set(
      progression._id,
      defaultsDeep(
        {
          state: {
            remainingLifeRequests: getConfig(progression.engine).remainingLifeRequests
          }
        },
        progression
      )
    ),
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
  const slidePools = createSlidePools();
  const {engine, engineOptions, content} = progression;
  const state = createState(progression);
  const chapterRules = await getChapterRulesByContent(content);
  const givenAnswer = {
    currentSlide: slide,
    answer: userAnswer,
    godMode: false
  };
  const availableContent = {
    slidePools,
    chapterRules
  };

  const nextContent = newComputeNextStep(
    engine,
    engineOptions,
    state,
    givenAnswer,
    availableContent
  );

  const action = {
    type: 'answer',
    payload: {
      ...payload,
      ...nextContent
    }
  };

  return addActionAndSaveProgression(progression, action);
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
export const create = async engine => {
  const _id = generateId();
  const slidePools = createSlidePools();
  const chapter = {
    ref: 'cha_Ny1BTxRp~',
    type: 'chapter'
  };

  const newProgression = createProgression(engine, chapter, {}, {slidePools});
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

  return pipe(update('state', state => updateState(progression.engine, state, [action])), save)(
    progression
  );
};
