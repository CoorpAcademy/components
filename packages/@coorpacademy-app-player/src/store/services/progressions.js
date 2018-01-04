import {
  createProgression,
  computeNextStep,
  getConfig,
  checkAnswer,
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
import sample from 'lodash/fp/sample';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import set from 'lodash/fp/set';
import maxBy from 'lodash/fp/maxBy';
import reduce from 'lodash/fp/reduce';
import {find as findContent} from './content';
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

export const computeIsCorrect = async (progression, question, answers) => {
  const {content: {type: contentType, ref: contentRef}} = progression;
  const content = await findContent(contentType, contentRef);
  const isAdaptive = getOr(false, 'isConditional', content);

  return !isAdaptive ? checkAnswer(progression.engine, question, answers) : null;
};

export const postAnswers = async (progressionId, payload) => {
  const userAnswers = getOr([''], 'answers', payload);
  const slideId = payload.content.ref;
  const slide = slideStore.get(slideId);
  const progression = await findById(progressionId);
  const slidePools = createSlidePools();
  const isCorrect = await computeIsCorrect(progression, slide.question, userAnswers);
  const {engine} = progression;

  const action = pipe(set('payload.isCorrect', isCorrect), _action => {
    let nextState = updateState(engine, progression.state, [_action]);
    nextState = set('nextContent', nextState.content, nextState);
    return set('payload.nextContent', computeNextStep(engine, slidePools, nextState))(_action);
  })({
    type: 'answer',
    payload
  });

  return pipe(update('state', state => updateState(progression.engine, state, [action])), save)(
    progression
  );
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
