import test from 'ava';
import * as Progressions from '../progressions';

const engine = {
  ref: 'microlearning',
  version: '1'
};

test('should add one extra life if call accept', async t => {
  const progression = await Progressions.create(engine, {type: 'chapter', ref: '5.C7'});
  const progressionWithAnswer = await Progressions.postAnswer(progression._id, {
    content: progression.state.nextContent,
    answer: []
  });

  t.is(progressionWithAnswer.state.nextContent.ref, 'extraLife');

  const progressionWithAcceptedExtraLife = await Progressions.acceptExtraLife(progression._id, {
    content: progressionWithAnswer.state.nextContent
  });

  t.is(progressionWithAcceptedExtraLife.state.nextContent.type, 'slide');
  t.is(progressionWithAcceptedExtraLife.state.lives, 1);
});

test('should forward to failure if call refuse', async t => {
  const progression = await Progressions.create(engine, {type: 'chapter', ref: '5.C7'});
  const progressionWithAnswer = await Progressions.postAnswer(progression._id, {
    content: progression.state.nextContent,
    answer: []
  });

  t.is(progressionWithAnswer.state.nextContent.ref, 'extraLife');

  const progressionWithAcceptedExtraLife = await Progressions.refuseExtraLife(progression._id, {
    content: progressionWithAnswer.state.nextContent
  });

  t.is(progressionWithAcceptedExtraLife.state.nextContent.type, 'failure');
  t.is(progressionWithAcceptedExtraLife.state.lives, 0);
});
