import test from 'ava';
import {find, uniqueId} from 'lodash/fp';
import createAnswersService from '../answers';
import createProgressionsService from '../progressions';
import slidesData from './fixtures/data/slides';
import * as fixtures from './fixtures';

const ProgressionsService = createProgressionsService(fixtures);
const {findById} = createAnswersService(fixtures);

const engine = {
  ref: 'microlearning',
  version: '1'
};

test('findById should return the correct answer and corrections for the given answer', async t => {
  const progression = await ProgressionsService.create(uniqueId(), engine, {
    type: 'chapter',
    ref: '5.C7'
  });
  const answer = ['bar'];
  const progressionWithAnswer = await ProgressionsService.postAnswer(progression._id, {
    content: progression.state.nextContent,
    answer
  });
  const slide = find({_id: progressionWithAnswer.state.content.ref}, slidesData);

  const correctAnswer = await findById(
    progressionWithAnswer._id,
    progressionWithAnswer.state.content.ref,
    answer
  );

  t.deepEqual(correctAnswer.correctAnswer, slide.question.content.answers[0]);
  t.deepEqual(correctAnswer.corrections, [{answer: 'bar', isCorrect: false}]);

  const correctAnswersWithoutGivenAnswer = await findById(
    progressionWithAnswer._id,
    progressionWithAnswer.state.content.ref
  );
  t.deepEqual(correctAnswersWithoutGivenAnswer.correctAnswer, slide.question.content.answers[0]);
  t.deepEqual(correctAnswersWithoutGivenAnswer.corrections, []);
});

test("findById should throw error if slide doesn't exist", async t => {
  const progression = await ProgressionsService.create(uniqueId(), engine, {
    type: 'chapter',
    ref: '5.C7'
  });
  return t.throwsAsync(
    () => findById(progression._id, progression.state.nextContent.ref, ['foo', 'bar']),
    {message: 'Answer is not available'}
  );
});

test('should fail with wrong progressionId', t => {
  return t.throwsAsync(() => findById('wrongId', {}), {message: 'progression "wrongId" not found'});
});

test('should fail to acceptExtraLife with progression without state', async t => {
  const progression = await ProgressionsService.create(uniqueId(), engine, {
    type: 'chapter',
    ref: '5.C7'
  });
  delete progression.state;
  ProgressionsService.save(progression);

  return t.throwsAsync(() => findById(progression._id, {}), {
    message: `progression "${progression._id}" has no state`
  });
});
