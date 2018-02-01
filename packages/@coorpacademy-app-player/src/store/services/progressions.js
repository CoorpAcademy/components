import {
  createProgression,
  createState,
  computeNextStepAfterAnswer,
  computeNextStepOnAcceptExtraLife,
  computeNextStepOnRefuseExtraLife,
  getConfig
} from '@coorpacademy/progression-engine';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import uniqueId from 'lodash/fp/uniqueId';
import update from 'lodash/fp/update';
import pipe from 'lodash/fp/pipe';
import filter from 'lodash/fp/filter';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import set from 'lodash/fp/set';
import maxBy from 'lodash/fp/maxBy';
import reduce from 'lodash/fp/reduce';
import progressionsData from './progressions.data';
import chapterRulesData from './chapter-rules.data';
import slidesData from './slides.data';

const slideStore = reduce(
  (slideMap, slide) => slideMap.set(slide._id, slide),
  new Map(),
  slidesData
);

const toMapByChapterRef = reduce((map, object) => map.set(object.chapterRef, object));
const chapterRules = toMapByChapterRef(new Map(), chapterRulesData);

const getChapterRulesByContent = ({type, ref}) => {
  switch (type) {
    case 'chapter':
      return Promise.resolve(chapterRules.get(ref)).then(get('rules'));
    default:
      return Promise.reject(new Error(`Cannot fetch ChapterRules of ${type}`));
  }
};

const generateId = () => uniqueId('progression');
const progressionStore = reduce(
  (progressionMap, progression) =>
    progressionMap.set(
      progression._id,
      defaultsDeep(
        {
          state: {
            remainingLifeRequests: getConfig(progression.engine).remainingLifeRequests
          },
          actions: [
            {
              type: 'move',
              payload: {
                nextContent: progression.state.nextContent
              }
            }
          ]
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

const getAvailableContent = content => {
  const chapters = [content];
  return Promise.all(
    chapters.map(async chapter => ({
      ref: chapter.ref,
      slides: filter({chapter_id: chapter.ref}, slidesData),
      rules: await getChapterRulesByContent(chapter)
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
  const {engine, engineOptions, content} = progression;
  const state = createState(progression);

  const partialAnswerAction = {
    type: 'answer',
    payload: {
      content: payload.content,
      answer: userAnswer,
      godMode: false
    }
  };
  const availableContent = await getAvailableContent(content);
  const action = computeNextStepAfterAnswer(
    engine,
    engineOptions,
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

export const postExtraLife = async (progressionId, payload) => {
  const progression = await findById(progressionId);
  const action = payload.isAccepted
    ? computeNextStepOnAcceptExtraLife(
        progression.engine,
        progression.engineOptions,
        progression.state,
        await getAvailableContent(progression.content)
      )
    : computeNextStepOnRefuseExtraLife(
        progression.engine,
        progression.engineOptions,
        progression.state
      );

  return addActionAndSaveProgression(progression, action);
};

// eslint-disable-next-line require-await
export const create = async (engine, chapterRef) => {
  const _id = generateId();
  const chapter = {
    ref: chapterRef,
    type: 'chapter'
  };

  const availableContent = await getAvailableContent(chapter);
  const newProgression = createProgression(engine, chapter, {}, availableContent);
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
