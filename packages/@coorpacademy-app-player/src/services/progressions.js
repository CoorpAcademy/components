import {computeNextStep, checkAnswer, updateState} from '@coorpacademy/progression-engine';
import uniqueId from 'lodash/fp/uniqueId';
import update from 'lodash/fp/update';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import reduce from 'lodash/fp/reduce';
import progressionsData from './progressions.data';
import * as SlidesService from './slides';

const generateId = () => uniqueId('progression');
const progressions = reduce(
  (progressionMap, progression) => progressionMap.set(progression._id, progression),
  new Map(),
  progressionsData
);

export const findById = id => {
  if (progressions.has(id)) return Promise.resolve(progressions.get(id));
  return Promise.reject(new Error('Progression not found'));
};

export const findAll = () => {
  return Promise.resolve(Array.from(progressions.values()));
};

const save = progression => {
  progressions.set(progression._id, progression);
  return progression;
};

export const createAnswer = async (progressionId, payload) => {
  const userAnswers = payload.answers;
  const slideId = payload.content.ref;
  const slide = await SlidesService.findById(slideId);
  const progression = await findById(progressionId);
  const slides = await SlidesService.findAll();

  const action = pipe(
    set('payload.isCorrect', checkAnswer(progression.engine, slide.question, userAnswers)),
    _action => {
      const nextState = updateState(progression.engine, progression.state, [_action]);
      return set('payload.nextContent', computeNextStep(progression.engine, slides, nextState))(
        _action
      );
    }
  )({
    type: 'answer',
    payload
  });

  const p = update('state', state => updateState(progression.engine, state, [action]), progression);

  return save(p);
};

export const create = async progression => {
  const _id = generateId();

  const slides = await SlidesService.findAll();
  const nextContent = computeNextStep(progression.engine, slides, progression.state);

  return save({
    ...progression,
    _id,
    state: {
      slides: [],
      ...progression.state,
      nextContent
    }
  });
};
