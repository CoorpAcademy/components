import test from 'ava';
import * as Progressions from '../progressions';

const engine = {
  ref: 'microlearning',
  version: '1'
};

test('should add one extra life if call accept', async t => {
  const progression = await Progressions.create({engine});
  const progressionWithAnswer = await Progressions.createAnswer(progression._id, {
    content: progression.state.nextContent,
    answers: []
  });

  t.is(progressionWithAnswer.state.nextContent.ref, 'extraLife');

  const progressionWithAcceptedExtraLife = await Progressions.postExtraLife(progression._id, {
    content: progressionWithAnswer.state.nextContent,
    isAccepted: true
  });

  t.is(progressionWithAcceptedExtraLife.state.nextContent.type, 'slide');
  t.is(progressionWithAcceptedExtraLife.state.lives, 1);
});

test('should forward to failure if call refuse', async t => {
  const progression = await Progressions.create({engine});
  const progressionWithAnswer = await Progressions.createAnswer(progression._id, {
    content: progression.state.nextContent,
    answers: []
  });

  t.is(progressionWithAnswer.state.nextContent.ref, 'extraLife');

  const progressionWithAcceptedExtraLife = await Progressions.postExtraLife(progression._id, {
    content: progressionWithAnswer.state.nextContent,
    isAccepted: false
  });

  t.is(progressionWithAcceptedExtraLife.state.nextContent.type, 'failure');
  t.is(progressionWithAcceptedExtraLife.state.lives, 0);
});
