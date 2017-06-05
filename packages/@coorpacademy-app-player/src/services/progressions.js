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

export const find = () => {
  return Promise.resolve(Array.from(progressions.values()));
};

export const createProgression = async progression => {
  const _id = generateId();

  const slides = await SlidesService.find();
  const nextContent = computeNextStep(slides);

  progressions.set(_id, {
    ...progression,
    _id,
    state: {
      nextContent,
      slides: []
    }
  });

  return findById(_id);
};

export const createAnswer = async (progressionId, payload) => {
  const answers = payload.answers;
  const slideId = payload.content.ref;
  const slide = await SlidesService.findById(slideId);
  const progression = await findById(progressionId);
  const slides = await SlidesService.find();

  const action = pipe(
    set('payload.isCorrect', checkAnswer({}, slide.question, answers)),
    set('payload.nextContent', computeNextStep(slides, progression.state))
  )({
    type: 'answer',
    payload
  });

  const p = update('state', state => updateState(state, [action]), progression);

  progressions.set(progressionId, p);

  return findById(progressionId);
};
