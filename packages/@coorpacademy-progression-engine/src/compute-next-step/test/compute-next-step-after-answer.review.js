// @flow
import test from 'ava';
import type {AvailableContent, Config} from '../../types';
import {getConfig} from '../../config';
import {computeNextStepAfterAnswerForReview} from '..';
import allSlides from './fixtures/slides';
import {
  firstStateReview,
  secondStateReview,
  thirdStateReview,
  fourthStateReview,
  allRightAnswersBeforeLastStepStateReview,
  wrongAnswersBeforeLastStepStateReview,
  wrongAnswersAfterLastStepStateReview,
  stillOneWrongAnswersAfterLastStepStateReview
} from './fixtures/states';
// on fixtures the order is 1, 2, 3, 5, 4
const [firstSlide, secondSlide, thirdSlide, fifthSlide, fourthSlide] = allSlides;

const config: Config = getConfig({ref: 'review', version: '1'});

test('should return the next slide when user has answered the first slide and there is an available slide', t => {
  const partialAction = {
    type: 'answer',
    payload: {
      content: {
        ref: '1.A1.1',
        type: 'slide'
      },
      answer: ['foo', 'bar'],
      godMode: false
    }
  };

  const availableContent: AvailableContent = [
    {
      ref: 'skill_41BBqFKoS',
      slides: [firstSlide, secondSlide, thirdSlide, fourthSlide, fifthSlide],
      rules: null
    }
  ];

  const nextStep = computeNextStepAfterAnswerForReview(
    config,
    firstStateReview,
    availableContent,
    firstSlide,
    partialAction
  );
  t.deepEqual(nextStep, {
    type: 'answer',
    payload: {
      answer: ['foo', 'bar'],
      content: {
        ref: '1.A1.1',
        type: 'slide'
      },
      godMode: false,
      nextContent: {
        ref: '1.A1.2',
        type: 'slide'
      },
      isCorrect: true,
      instructions: null
    }
  });
});

test('should return the next slide when user has answered the second slide and there is an available slide', t => {
  const partialAction = {
    type: 'answer',
    payload: {
      content: {
        ref: '1.A1.2',
        type: 'slide'
      },
      answer: ['foo', 'bar'],
      godMode: true
    }
  };

  const availableContent: AvailableContent = [
    {
      ref: 'skill_41BBqFKoS',
      slides: [secondSlide, thirdSlide, fourthSlide, fifthSlide],
      rules: null
    }
  ];

  const nextStep = computeNextStepAfterAnswerForReview(
    config,
    secondStateReview,
    availableContent,
    secondSlide,
    partialAction
  );
  t.deepEqual(nextStep, {
    type: 'answer',
    payload: {
      answer: ['foo', 'bar'],
      content: {
        ref: '1.A1.2',
        type: 'slide'
      },
      godMode: true,
      nextContent: {
        ref: '1.A1.3',
        type: 'slide'
      },
      isCorrect: true,
      instructions: null
    }
  });
});

test('should return the next slide when user has answered the third slide and there is an available slide', t => {
  const partialAction = {
    type: 'answer',
    payload: {
      content: {
        ref: '1.A1.3',
        type: 'slide'
      },
      answer: ['foo', 'bar'],
      godMode: true
    }
  };

  const availableContent: AvailableContent = [
    {
      ref: 'skill_41BBqFKoS',
      slides: [thirdSlide, fourthSlide, fifthSlide],
      rules: null
    }
  ];

  const nextStep = computeNextStepAfterAnswerForReview(
    config,
    thirdStateReview,
    availableContent,
    thirdSlide,
    partialAction
  );
  t.deepEqual(nextStep, {
    type: 'answer',
    payload: {
      answer: ['foo', 'bar'],
      content: {
        ref: '1.A1.3',
        type: 'slide'
      },
      godMode: true,
      nextContent: {
        ref: '1.A1.4',
        type: 'slide'
      },
      isCorrect: true,
      instructions: null
    }
  });
});

test('should return the next slide when user has answered the fourth slide and there is an available slide', t => {
  const partialAction = {
    type: 'answer',
    payload: {
      content: {
        ref: '1.A1.4',
        type: 'slide'
      },
      answer: ['foo', 'bar'],
      godMode: true
    }
  };

  const availableContent: AvailableContent = [
    {
      ref: 'skill_41BBqFKoS',
      slides: [fourthSlide, fifthSlide],
      rules: null
    }
  ];

  const nextStep = computeNextStepAfterAnswerForReview(
    config,
    fourthStateReview,
    availableContent,
    fourthSlide,
    partialAction
  );
  t.deepEqual(nextStep, {
    type: 'answer',
    payload: {
      answer: ['foo', 'bar'],
      content: {
        ref: '1.A1.4',
        type: 'slide'
      },
      godMode: true,
      nextContent: {
        ref: '1.A1.5',
        type: 'slide'
      },
      isCorrect: true,
      instructions: null
    }
  });
});

test('should return the exitNode when user is finishing the 5th slide correctly, all other are also true and there is no more available slide', t => {
  const partialAction = {
    type: 'answer',
    payload: {
      content: {
        ref: '1.A1.5',
        type: 'slide'
      },
      answer: ['foo', 'bar'],
      godMode: true
    }
  };

  const availableContent: AvailableContent = [
    {
      ref: 'skill_41BBqFKoS',
      slides: [fifthSlide],
      rules: null
    }
  ];

  const nextStep = computeNextStepAfterAnswerForReview(
    config,
    allRightAnswersBeforeLastStepStateReview,
    availableContent,
    fifthSlide,
    partialAction
  );

  t.deepEqual(nextStep, {
    type: 'answer',
    payload: {
      answer: ['foo', 'bar'],
      content: {
        ref: '1.A1.5',
        type: 'slide'
      },
      godMode: true,
      nextContent: {
        type: 'success',
        ref: 'successExitNode'
      },
      isCorrect: true,
      instructions: null
    }
  });
});

test('should return the exitNode when user has only one question correct and there is no available slide', t => {
  const partialAction = {
    type: 'answer',
    payload: {
      content: {
        ref: '1.A1.1',
        type: 'slide'
      },
      answer: ['foo', 'bar'],
      godMode: false
    }
  };

  const availableContent: AvailableContent = [
    {
      ref: 'skill_41BBqFKoS',
      slides: [],
      rules: null
    }
  ];

  const nextStep = computeNextStepAfterAnswerForReview(
    config,
    firstStateReview,
    availableContent,
    allSlides[0],
    partialAction
  );
  t.deepEqual(nextStep, {
    type: 'answer',
    payload: {
      answer: ['foo', 'bar'],
      content: {
        ref: '1.A1.1',
        type: 'slide'
      },
      godMode: false,
      nextContent: {
        type: 'success',
        ref: 'successExitNode'
      },
      isCorrect: true,
      instructions: null
    }
  });
});

test('should return the first pending slide when user has finished the 5 slides, all are true and there is no available slide', t => {
  const partialAction = {
    type: 'answer',
    payload: {
      content: {
        ref: '1.A1.5',
        type: 'slide'
      },
      answer: ['foo', 'bar'],
      godMode: true
    }
  };

  const availableContent: AvailableContent = [
    {
      ref: 'skill_41BBqFKoS',
      slides: [fifthSlide],
      rules: null
    }
  ];

  const nextStep = computeNextStepAfterAnswerForReview(
    config,
    wrongAnswersBeforeLastStepStateReview,
    availableContent,
    fifthSlide,
    partialAction
  );

  t.deepEqual(nextStep, {
    type: 'answer',
    payload: {
      answer: ['foo', 'bar'],
      content: {
        ref: '1.A1.5',
        type: 'slide'
      },
      godMode: true,
      nextContent: {
        type: 'slide',
        ref: '1.A1.2'
      },
      isCorrect: true,
      instructions: null
    }
  });
});

test('should return the next wrong slide when user has finished the 5 slides and has still remaining questions to validate', t => {
  const partialAction = {
    type: 'answer',
    payload: {
      content: {
        ref: '1.A1.2',
        type: 'slide'
      },
      answer: ['foo', 'bar'],
      godMode: false
    }
  };

  const availableContent: AvailableContent = [
    {
      ref: 'skill_41BBqFKoS',
      slides: [],
      rules: null
    }
  ];

  const nextStep = computeNextStepAfterAnswerForReview(
    config,
    wrongAnswersAfterLastStepStateReview,
    availableContent,
    allSlides[1],
    partialAction
  );

  if (!nextStep) {
    t.fail();
    return;
  }
  t.is(nextStep.type, 'answer');
  t.deepEqual(nextStep.payload.answer, ['foo', 'bar']);
  t.deepEqual(nextStep.payload.content, {
    ref: '1.A1.2',
    type: 'slide'
  });
  t.false(nextStep.payload.godMode);
  t.true(nextStep.payload.isCorrect);
  t.is(nextStep.payload.instructions, null);
  t.is(nextStep.payload.nextContent.type, 'slide');
  t.true(
    wrongAnswersAfterLastStepStateReview.pendingSlides.includes(nextStep.payload.nextContent.ref)
  );
});

test('should return the same slide when user has answered wrong, has finished the 5 slides and has still remaining one questions to validate', t => {
  const partialAction = {
    type: 'answer',
    payload: {
      content: {
        ref: '1.A1.4',
        type: 'slide'
      },
      answer: ['xxx'],
      godMode: false
    }
  };

  const availableContent: AvailableContent = [
    {
      ref: 'skill_41BBqFKoS',
      slides: [],
      rules: null
    }
  ];

  const nextStep = computeNextStepAfterAnswerForReview(
    config,
    stillOneWrongAnswersAfterLastStepStateReview,
    availableContent,
    allSlides[4],
    partialAction
  );

  t.deepEqual(nextStep, {
    type: 'answer',
    payload: {
      answer: ['xxx'],
      content: {
        ref: '1.A1.4',
        type: 'slide'
      },
      godMode: false,
      nextContent: {
        type: 'slide',
        ref: '1.A1.4'
      },
      isCorrect: false,
      instructions: null
    }
  });
});

test('should return the successExitNode when user has finished the 5 slides after several wrong attempts', t => {
  const partialAction = {
    type: 'answer',
    payload: {
      content: {
        ref: '1.A1.4',
        type: 'slide'
      },
      answer: ['xxx'],
      godMode: true
    }
  };

  const availableContent: AvailableContent = [
    {
      ref: 'skill_41BBqFKoS',
      slides: allSlides,
      rules: null
    }
  ];

  const nextStep = computeNextStepAfterAnswerForReview(
    config,
    stillOneWrongAnswersAfterLastStepStateReview,
    availableContent,
    allSlides[4],
    partialAction
  );

  t.deepEqual(nextStep, {
    type: 'answer',
    payload: {
      answer: ['xxx'],
      content: {
        ref: '1.A1.4',
        type: 'slide'
      },
      godMode: true,
      nextContent: {
        type: 'success',
        ref: 'successExitNode'
      },
      isCorrect: true,
      instructions: null
    }
  });
});
