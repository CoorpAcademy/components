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

test('should return the next slide when user has answered the 1st slide and there are available slides', t => {
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

test('should return the next slide when user has answered the 2nd slide and there are available slides', t => {
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

test('should return the next slide when user has answered the 3rd slide and there are available slides', t => {
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

test('should return the next slide when user has answered the 4th slide and there are available slides', t => {
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

test('should return the exitNode when user has answered the 5th slide correctly, all other are also true', t => {
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
        type: 'success',
        ref: 'successExitNode'
      },
      isCorrect: true,
      instructions: null
    }
  });
});

test('should return one pending slide when user has answered the 5th slide', t => {
  const partialAction = {
    type: 'answer',
    payload: {
      content: {
        ref: '1.A1.5',
        type: 'slide'
      },
      answer: ['foo', 'bar'],
      godMode: false
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
      godMode: false,
      nextContent: {
        type: 'slide',
        ref: '1.A1.2'
      },
      isCorrect: false,
      instructions: null
    }
  });
});

test('should return the next wrong slide when user has finished the 5 slides and has still remaining questions to validate', t => {
  const answerForSlide2 = {
    type: 'answer',
    payload: {
      content: {
        ref: '1.A1.2',
        type: 'slide'
      },
      answer: ['foo'],
      godMode: false
    }
  };

  const availableContent: AvailableContent = [
    {
      ref: 'skill_41BBqFKoS',
      slides: allSlides,
      rules: null
    }
  ];

  const nextStepWithSlide4 = computeNextStepAfterAnswerForReview(
    config,
    wrongAnswersAfterLastStepStateReview,
    availableContent,
    secondSlide,
    answerForSlide2
  );

  if (!nextStepWithSlide4) {
    t.fail();
    return;
  }
  t.deepEqual(nextStepWithSlide4, {
    type: 'answer',
    payload: {
      answer: ['foo'],
      content: {
        ref: '1.A1.2',
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

  const answerForSlide4 = {
    type: 'answer',
    payload: {
      content: {
        ref: '1.A1.4',
        type: 'slide'
      },
      answer: ['foo'],
      godMode: false
    }
  };

  const nextStepWithSlide5 = computeNextStepAfterAnswerForReview(
    config,
    {
      ...wrongAnswersAfterLastStepStateReview,
      nextContent: {
        ref: '1.A1.4',
        type: 'slide'
      }
    },
    availableContent,
    fourthSlide,
    answerForSlide4
  );
  if (!nextStepWithSlide5) {
    t.fail();
    return;
  }
  t.deepEqual(nextStepWithSlide5, {
    type: 'answer',
    payload: {
      answer: ['foo'],
      content: {
        ref: '1.A1.4',
        type: 'slide'
      },
      godMode: false,
      nextContent: {
        type: 'slide',
        ref: '1.A1.5'
      },
      isCorrect: false,
      instructions: null
    }
  });
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
      slides: allSlides,
      rules: null
    }
  ];

  const nextStep = computeNextStepAfterAnswerForReview(
    config,
    stillOneWrongAnswersAfterLastStepStateReview,
    availableContent,
    fourthSlide,
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
    fourthSlide,
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
