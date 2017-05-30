import {computeNextStep, checkAnswer, updateState} from '@coorpacademy/progression-engine';
import uniqueId from 'lodash/fp/uniqueId';
import update from 'lodash/fp/update';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import progressionsData from './progressions.data';
import * as SlidesService from './slides';

const generateId = () => uniqueId('progression');
const progressions = reduce(
  (progressionMap, progression) => progressionMap.set(progression.id, progression),
  new Map(),
  progressionsData
);

export const findById = id => {
  if (progressions.has(id)) return Promise.resolve(progressions.get(id));
  return Promise.reject(new Error('Progression not found'));
};

export const find = () => {
  return Promise.resolve(Array.from(progressions.entries()));
};

export const createProgression = progression => {
  const id = generateId();
  progressions.set(id, {
    ...progression,
    id,
    state: {
      nextContent: {
        ref: 'sli_EkRyFvjjG',
        type: 'slide'
      }
    }
  });

  return findById(id);
};

export const createAnswer = async (progressionId, payload) => {
  const answers = payload.answers;
  const slideId = payload.content.ref;
  const slide = await SlidesService.findById(slideId);
  const progression = await findById(progressionId);
  const slides = await SlidesService.find().then(map('id'));

  const action = pipe(set('payload.isCorrect', checkAnswer({}, slide.question, answers)), _action =>
    set('payload.nextContent', computeNextStep(progression.state, _action, slides), _action)
  )({
    type: 'answer',
    payload
  });

  progressions.set(
    progressionId,
    update('state', state => updateState(state, action), progression)
  );

  return findById(progressionId);
};
