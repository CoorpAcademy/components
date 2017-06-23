import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import {
  getAnswers,
  getAnswerValues,
  getChoices,
  getClue,
  getCurrentClue,
  getCorrection,
  getCurrentContent,
  getCurrentCorrection,
  getCurrentExitNode,
  getCurrentProgression,
  getCurrentProgressionId,
  getCurrentSlide,
  getPreviousSlide,
  getQuestionType
} from '../state-extract';

test('should getChoices', t => {
  const choices = ['foo', 'bar'];
  const plop = set('question.content.choices', choices, {});
  t.is(getChoices(plop), choices);
});

test('should getCurrentProgressionId', t => {
  const progressionId = '1234';
  const plop = set('ui.current.progressionId', progressionId, {});
  t.is(getCurrentProgressionId(plop), progressionId);
  t.is(getCurrentProgressionId({}), undefined);
});

test('should getCurrentProgression', t => {
  const progression = {foo: 'bar'};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getCurrentProgression(state), progression);
});

test('should getAnswers', t => {
  const answers = {value: ['foo']};
  const state = pipe(set('ui.current.progressionId', '0'), set('ui.answers.0', answers))({});

  t.is(getAnswers(state), answers);
});

test('should getAnswerValues', t => {
  const answers = ['foo'];
  const state = pipe(set('ui.current.progressionId', '0'), set('ui.answers.0.value', answers))({});

  t.is(getAnswerValues(state), answers);
});

test('should getQuestionType', t => {
  const type = 'foo';
  const plop = set('question.type', type, {});
  t.is(getQuestionType(plop), type);
});

test('should getCurrentSlide', t => {
  const slide = {_id: '0'};
  const progression = {state: {nextContent: {ref: '0'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression}),
    set('data.slides.entities', {'0': slide})
  )({});

  t.is(getCurrentSlide(state), slide);
});

test('should getCurrentExitNode', t => {
  const exitNode = {ref: 'successExitNode'};
  const progression = {state: {nextContent: {ref: 'successExitNode'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression}),
    set('data.exitNodes.entities', {successExitNode: exitNode})
  )({});

  t.is(getCurrentExitNode(state), exitNode);
});

test('should getPreviousSlide', t => {
  const slide = {_id: '0'};
  const progression = {state: {content: {ref: '0'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities.0', progression),
    set('data.slides.entities.0', slide)
  )({});
  t.is(getPreviousSlide(state), slide);
});

test('should getCurrentContent', t => {
  const content = {ref: '0', type: 'slide'};
  const progression = {state: {nextContent: content}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getCurrentContent(state), content);
});

test('should getCorrection', t => {
  const correction = ['Bonne réponse'];
  const state = set('data.answers.entities.foo.bar', correction)({});

  t.is(getCorrection('foo', 'bar')(state), correction);
});

test('should getCurrentCorrection', t => {
  const progression = pipe(set('_id', 'foo'), set('state.content.ref', 'bar'))({});
  const slide = {_id: 'bar'};
  const correction = ['Bonne réponse'];
  const state = pipe(
    set(`data.progressions.entities.${progression._id}`, progression),
    set(`data.slides.entities.${slide._id}`, slide),
    set(`data.answers.entities.${progression._id}.${slide._id}`, correction),
    set('ui.current.progressionId', 'foo')
  )({});

  t.is(getCurrentCorrection(state), correction);
});

test('should getClue', t => {
  const clue = 'Indice';
  const state = set('data.clues.entities.foo.bar', clue)({});

  t.is(getClue('foo', 'bar')(state), clue);
});

test('should getCurrentClue', t => {
  const progression = pipe(set('_id', 'foo'), set('state.nextContent.ref', 'bar'))({});
  const slide = {_id: 'bar'};
  const clue = 'Indice';
  const state = pipe(
    set(`data.progressions.entities.${progression._id}`, progression),
    set(`data.slides.entities.${slide._id}`, slide),
    set(`data.clues.entities.${progression._id}.${slide._id}`, clue),
    set('ui.current.progressionId', 'foo')
  )({});

  t.is(getCurrentClue(state), clue);
});
