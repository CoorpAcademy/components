import test from 'ava';
import * as Progressions from '../progressions';

const engine = {
  ref: 'microlearning',
  version: '1'
};

test('should add one extra life', async t => {
  const progression = await Progressions.create({engine});
  const progressionWithAnswer = await Progressions.createAnswer(progression._id, {
    content: progression.state.nextContent,
    answers: []
  });

  t.is(progressionWithAnswer.state.nextContent.ref, 'extraLife');

  const progressionWithAcceptedExtraLife = await Progressions.requestExtralifeAccepted(
    progression._id
  );

  t.is(progressionWithAcceptedExtraLife.state.nextContent.type, 'slide');
  t.is(progressionWithAcceptedExtraLife.state.lives, 1);
});
