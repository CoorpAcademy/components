// @flow
import take from 'lodash/fp/take';
import test from 'ava';
import type {Engine, NextStepParams, Progression, SlidePool, State} from '../../../common/types';
import nextStepForAnswer from '../answer-next-step';
import allSlides from '../../../test/fixtures/slides';
import {stateBeforeGettingNextContent} from '../../../test/fixtures/states';

const slides = allSlides.filter(slide => slide.chapter_id === '1.A1');
const slidePools: Array<SlidePool> = [
  {
    chapterId: '1.A1',
    slides
  }
];

const engine: Engine = {
  ref: 'microlearning',
  version: '1'
};

test('should check params for learner.nextStepForAnswer', t => {
  const state: State = Object.freeze(stateBeforeGettingNextContent);
  const progression: Progression = {engine, state};
  const params: NextStepParams = {
    slidePools
  };

  try {
    nextStepForAnswer(progression, params);
    t.fail();
  } catch (e) {
    t.is(e.message, 'currentSlide is required for learner.nextStepForAnswer');
  }

  try {
    nextStepForAnswer(progression, {
      slidePools,
      currentSlide: {}
    });
    t.fail();
  } catch (e) {
    t.is(e.message, 'answer is required for learner.nextStepForAnswer');
  }
});

test('should answer correctly on last slide and get success exit node', t => {
  const state: State = Object.freeze(stateBeforeGettingNextContent);
  const progression: Progression = {engine, state};
  const question = {
    type: 'basic',
    content: {
      answers: [['guillaume tell'], ['tell'], ['guillaume'], ['tel']],
      maxTypos: undefined
    }
  };

  const params: NextStepParams = {
    slidePools: [
      {
        chapterId: '1.A1',
        slides: take(1, slides)
      }
    ],
    answer: ['tell'],
    currentSlide: {
      ref: '1.A1.3',
      question
    }
  };

  const payload = nextStepForAnswer(progression, params);
  t.deepEqual(payload, {
    isCorrect: true,
    nextContent: {
      ref: 'successExitNode',
      type: 'success'
    }
  });
});
