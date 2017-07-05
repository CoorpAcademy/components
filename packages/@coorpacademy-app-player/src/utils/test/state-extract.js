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
  getQuestionType,
  getStartRank,
  getEndRank,
  getBestScore
} from '../state-extract';

test('getChoices should get choices from state', t => {
  const choices = ['foo', 'bar'];
  const plop = set('question.content.choices', choices, {});
  t.is(getChoices(plop), choices);
});

test("getCurrentProgressionId should get current progression's id from state", t => {
  const progressionId = '1234';
  const plop = set('ui.current.progressionId', progressionId, {});
  t.is(getCurrentProgressionId(plop), progressionId);
  t.is(getCurrentProgressionId({}), undefined);
});

test('getCurrentProgression should get current progression from state', t => {
  const progression = {foo: 'bar'};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getCurrentProgression(state), progression);
});

test('getAnswers should get answers from state', t => {
  const answers = {value: ['foo']};
  const state = pipe(set('ui.current.progressionId', '0'), set('ui.answers.0', answers))({});

  t.is(getAnswers(state), answers);
});

test("getAnswerValues should get answer's values from state", t => {
  const answers = ['foo'];
  const state = pipe(set('ui.current.progressionId', '0'), set('ui.answers.0.value', answers))({});

  t.is(getAnswerValues(state), answers);
});

test("getQuestionType should get question's type from state", t => {
  const type = 'foo';
  const plop = set('question.type', type, {});
  t.is(getQuestionType(plop), type);
});

test('getCurrentSlide should get current slide from state', t => {
  const slide = {_id: '0'};
  const progression = {state: {nextContent: {ref: '0'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression}),
    set('data.slides.entities', {'0': slide})
  )({});

  t.is(getCurrentSlide(state), slide);
});

test('getCurrentExitNode should get current exit node from state', t => {
  const exitNode = {ref: 'successExitNode'};
  const progression = {state: {nextContent: {ref: 'successExitNode'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression}),
    set('data.exitNodes.entities', {successExitNode: exitNode})
  )({});

  t.is(getCurrentExitNode(state), exitNode);
});

test('getPreviousSlide should get previous slide from state', t => {
  const slide = {_id: '0'};
  const progression = {state: {content: {ref: '0'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities.0', progression),
    set('data.slides.entities.0', slide)
  )({});
  t.is(getPreviousSlide(state), slide);
});

test('getCurrentContent should get current content from state', t => {
  const content = {ref: '0', type: 'slide'};
  const progression = {state: {nextContent: content}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getCurrentContent(state), content);
});

test('getCorrection should get correction from state', t => {
  const correction = ['Bonne réponse'];
  const state = set('data.answers.entities.foo.bar', correction)({});

  t.is(getCorrection('foo', 'bar')(state), correction);
});

test('getCurrentCorrection should get current correction from state', t => {
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

test('getClue should get clue from state', t => {
  const clue = 'Indice';
  const state = set('data.clues.entities.foo.bar', clue)({});

  t.is(getClue('foo', 'bar')(state), clue);
});

test('getStartRank should get rank.start from state', t => {
  const rank = 'foo';
  const state = set('data.rank.start', rank)({});
  t.is(getStartRank(state), rank);
});

test('getEndRank should get rank.end from state', t => {
  const rank = 'foo';
  const state = set('data.rank.end', rank)({});
  t.is(getEndRank(state), rank);
});

test('getBestScore should get previousBestScore from currentProgression', t => {
  const bestScore = 'foo';
  const progression = {previousBestScore: bestScore};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});
  t.is(getBestScore(state), bestScore);
});

test('getCurrentClue should get current clue from state', t => {
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
