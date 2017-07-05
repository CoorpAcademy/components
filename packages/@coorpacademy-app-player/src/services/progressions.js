import {
  createProgression,
  computeNextStep,
  checkAnswer,
  updateState
} from '@coorpacademy/progression-engine';
import uniqueId from 'lodash/fp/uniqueId';
import update from 'lodash/fp/update';
import pipe from 'lodash/fp/pipe';
import sample from 'lodash/fp/sample';
import getOr from 'lodash/fp/getOr';
import set from 'lodash/fp/set';
import maxBy from 'lodash/fp/maxBy';
import reduce from 'lodash/fp/reduce';
import progressionsData from './progressions.data';
import slidesData from './slides.data';

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

// eslint-disable-next-line require-await
export const findById = async id => {
  if (!progressionStore.has(id)) throw new Error('Progression not found');
  return progressionStore.get(id);
};

// eslint-disable-next-line require-await
const findAllSlides = async () => {
  return Array.from(slideStore.values());
};

export const save = progression => {
  progressionStore.set(progression._id, progression);
  return progression;
};

export const findBestOf = () => {
  const bestProgression = maxBy(p => p.state.stars || 0)(progressionsData);
  return bestProgression;
};

export const createAnswer = async (progressionId, payload) => {
  const userAnswers = getOr([''], 'answers', payload);
  const slideId = payload.content.ref;
  const slide = slideStore.get(slideId);
  const progression = await findById(progressionId);
  const slides = await findAllSlides();

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

  return pipe(update('state', state => updateState(progression.engine, state, [action])), save)(
    progression
  );
};

export const requestClue = async (progressionId, payload) => {
  const progression = await findById(progressionId);

  const action = {
    type: 'clue',
    payload
  };

  return pipe(update('state', state => updateState(progression.engine, state, [action])), save)(
    progression
  );
};

export const create = async progression => {
  const _id = generateId();
  const slides = await findAllSlides();

  const chapter = {
    ref: 'cha_Ny1BTxRp~',
    type: 'chapter'
  };
  const initialContent = {
    ref: sample(slides)._id,
    type: 'slide'
  };

  const newProgression = createProgression(progression.engine, chapter, initialContent);

  return save({
    _id,
    ...newProgression
  });
};
