import get from 'lodash/fp/get';
import {mockTranslate} from '@coorpacademy/translate';
import {
  computeNextStepAfterAnswerForReview,
  getConfig,
  updateState
} from '@coorpacademy/progression-engine';
import {
  Config,
  CorrectionFromAPI,
  ProgressionFromAPI,
  ProgressionState,
  ReviewContent,
  ReviewEngine,
  Services,
  Skill,
  SlideFromAPI,
  SlideIdFromAPI
} from '@coorpacademy/review-services/es/types/services-types';
import {qcmDragSlide} from '../../views/slides/test/fixtures/qcm-drag';
import {qcmSlide} from '../../views/slides/test/fixtures/qcm';
import {qcmGraphicSlide} from '../../views/slides/test/fixtures/qcm-graphic';
import {freeTextSlide} from '../../views/slides/test/fixtures/free-text';
import {sliderSlide} from '../../views/slides/test/fixtures/slider';
import {templateSlide} from '../../views/slides/test/fixtures/template';

const content: ReviewContent = {
  ref: 'skill_NyxtYFYir',
  type: 'skill'
};

const engine: ReviewEngine = {
  ref: 'review'
};

const getSlideFixture = (ref: string): SlideFromAPI => {
  switch (ref) {
    case qcmSlide.universalRef:
      return qcmSlide;
    case qcmGraphicSlide.universalRef:
      return qcmGraphicSlide;
    case freeTextSlide.universalRef:
      return freeTextSlide;
    case templateSlide.universalRef:
      return templateSlide;
    case qcmDragSlide.universalRef:
      return qcmDragSlide;
    default:
      return sliderSlide;
  }
};

const fetchSkillResponse: Record<string, Skill> = {
  skill_NyxtYFYir: {
    ref: 'skill_NyxtYFYir',
    name: 'Digital Awareness'
  }
};

export const fetchSkillsResponse = [
  {
    skillRef: '_skill-ref',
    slidesToReview: 2,
    name: 'skill-test',
    custom: false
  },
  {
    skillRef: '_skill-ref-2',
    slidesToReview: 2,
    name: 'skill-test-2',
    custom: true
  }
];

const fetchRankResponse = {
  rank: 93
};

export const postProgressionResponse: ProgressionFromAPI = {
  _id: '62b1d1087aa12f00253f40ee',
  content,
  engine,
  state: {
    allAnswers: [],
    isCorrect: true,
    nextContent: {
      ref: freeTextSlide.universalRef,
      type: 'slide'
    },
    pendingSlides: [],
    slides: [],
    step: {
      current: 1
    },
    stars: 0
  }
};

export const postAnswerResponses: Record<string, ProgressionFromAPI> = {
  [freeTextSlide.universalRef]: {
    _id: '62b1d1087aa12f00253f40ee',
    content,
    engine,
    state: {
      allAnswers: [
        {
          slideRef: freeTextSlide.universalRef,
          isCorrect: true,
          answer: ['Benchmark']
        }
      ],
      isCorrect: true,
      nextContent: {
        ref: qcmGraphicSlide.universalRef,
        type: 'slide'
      },
      content: {
        ref: freeTextSlide.universalRef,
        type: 'slide'
      },
      pendingSlides: [],
      slides: [freeTextSlide.universalRef],
      step: {
        current: 2
      },
      stars: 8
    }
  },
  [qcmGraphicSlide.universalRef]: {
    _id: '62b1d1087aa12f00253f40ee',
    content,
    engine,
    state: {
      allAnswers: [
        {
          slideRef: freeTextSlide.universalRef,
          isCorrect: true,
          answer: ['Benchmark']
        },
        {
          slideRef: qcmGraphicSlide.universalRef,
          isCorrect: true,
          answer: ['Faux']
        }
      ],
      isCorrect: true,
      nextContent: {
        ref: qcmSlide.universalRef,
        type: 'slide'
      },
      content: {
        ref: qcmGraphicSlide.universalRef,
        type: 'slide'
      },
      pendingSlides: [],
      slides: [freeTextSlide.universalRef, qcmGraphicSlide.universalRef],
      step: {
        current: 3
      },
      stars: 16
    }
  },
  [qcmSlide.universalRef]: {
    _id: '62b1d1087aa12f00253f40ee',
    content,
    engine,
    state: {
      allAnswers: [
        {
          slideRef: freeTextSlide.universalRef,
          isCorrect: true,
          answer: ['Benchmark']
        },
        {
          slideRef: qcmGraphicSlide.universalRef,
          isCorrect: true,
          answer: ['Faux']
        },
        {
          slideRef: qcmSlide.universalRef,
          isCorrect: true,
          answer: ['Le créateur peut fixer un pourcentage pour chaque transaction future']
        }
      ],
      isCorrect: true,
      nextContent: {
        ref: sliderSlide.universalRef,
        type: 'slide'
      },
      content: {
        ref: qcmSlide.universalRef,
        type: 'slide'
      },
      pendingSlides: [],
      slides: [freeTextSlide.universalRef, qcmGraphicSlide.universalRef, qcmSlide.universalRef],
      step: {
        current: 4
      },
      stars: 24
    }
  },
  [sliderSlide.universalRef]: {
    _id: '62b1d1087aa12f00253f40ee',
    content,
    engine,
    state: {
      allAnswers: [
        {
          slideRef: freeTextSlide.universalRef,
          isCorrect: true,
          answer: ['Benchmark']
        },
        {
          slideRef: qcmGraphicSlide.universalRef,
          isCorrect: true,
          answer: ['Faux']
        },
        {
          slideRef: qcmSlide.universalRef,
          isCorrect: true,
          answer: ['Le créateur peut fixer un pourcentage pour chaque transaction future']
        },
        {
          slideRef: sliderSlide.universalRef,
          isCorrect: true,
          answer: ['7']
        }
      ],
      isCorrect: true,
      nextContent: {
        ref: templateSlide.universalRef,
        type: 'slide'
      },
      content: {
        ref: sliderSlide.universalRef,
        type: 'slide'
      },
      pendingSlides: [],
      slides: [
        freeTextSlide.universalRef,
        qcmGraphicSlide.universalRef,
        qcmSlide.universalRef,
        sliderSlide.universalRef
      ],
      step: {
        current: 5
      },
      stars: 32
    }
  },
  [templateSlide.universalRef]: {
    _id: '62b1d1087aa12f00253f40ee',
    content,
    engine,
    state: {
      allAnswers: [
        {
          slideRef: freeTextSlide.universalRef,
          isCorrect: true,
          answer: ['Benchmark']
        },
        {
          slideRef: qcmGraphicSlide.universalRef,
          isCorrect: true,
          answer: ['Faux']
        },
        {
          slideRef: qcmSlide.universalRef,
          isCorrect: true,
          answer: ['Le créateur peut fixer un pourcentage pour chaque transaction future']
        },
        {
          slideRef: sliderSlide.universalRef,
          isCorrect: true,
          answer: ['7']
        },
        {
          slideRef: templateSlide.universalRef,
          isCorrect: true,
          answer: ['Leaderboard', 'utilisateurs', 'étoiles']
        }
      ],
      isCorrect: true,
      nextContent: {
        ref: 'successExitNode',
        type: 'success'
      },
      content: {
        ref: templateSlide.universalRef,
        type: 'slide'
      },
      pendingSlides: [],
      slides: [
        freeTextSlide.universalRef,
        qcmGraphicSlide.universalRef,
        qcmSlide.universalRef,
        sliderSlide.universalRef,
        templateSlide.universalRef
      ],
      step: {
        current: 6
      },
      stars: 40
    }
  }
};

export const incorrectFreeTextPostAnswerResponse: ProgressionFromAPI = {
  ...postAnswerResponses[freeTextSlide.universalRef],
  state: {
    ...postAnswerResponses[freeTextSlide.universalRef].state,
    isCorrect: false,
    allAnswers: [
      {
        slideRef: freeTextSlide.universalRef,
        isCorrect: false,
        answer: ['NOPE']
      }
    ],
    pendingSlides: [freeTextSlide.universalRef],
    stars: 0
  }
};

export const progressionSlideWithPendingSlide: ProgressionFromAPI = {
  _id: '62b1d1087aa12f00253f40ee',
  content,
  engine,
  state: {
    allAnswers: [
      {
        slideRef: freeTextSlide.universalRef,
        isCorrect: false,
        answer: ['Wrong']
      },
      {
        slideRef: qcmGraphicSlide.universalRef,
        isCorrect: true,
        answer: ['Faux']
      },
      {
        slideRef: qcmSlide.universalRef,
        isCorrect: false,
        answer: ['Wrong']
      },
      {
        slideRef: sliderSlide.universalRef,
        isCorrect: true,
        answer: ['7']
      },
      {
        slideRef: templateSlide.universalRef,
        isCorrect: true,
        answer: ['Leaderboard', 'utilisateurs', 'étoiles']
      },
      {
        slideRef: freeTextSlide.universalRef,
        isCorrect: true,
        answer: ['Benchmark']
      }
    ],
    isCorrect: true,
    nextContent: {
      ref: qcmSlide.universalRef,
      type: 'slide'
    },
    content: {
      ref: freeTextSlide.universalRef,
      type: 'slide'
    },
    pendingSlides: [qcmSlide.universalRef],
    slides: [
      freeTextSlide.universalRef,
      qcmGraphicSlide.universalRef,
      qcmSlide.universalRef,
      sliderSlide.universalRef,
      templateSlide.universalRef,
      freeTextSlide.universalRef
    ],
    step: {
      current: 7
    },
    stars: 32
  }
};

export const getChoicesCorrection = (ref: string, wrongChoice = false): CorrectionFromAPI => {
  switch (ref) {
    case qcmSlide.universalRef: {
      const correctAnswer = [get('question.content.answers', qcmSlide)];
      return {
        correctAnswer,
        corrections: wrongChoice
          ? [
              {
                answer: get('question.content.answers', qcmSlide),
                isCorrect: false
              }
            ]
          : [{answer: correctAnswer[0], isCorrect: true}]
      };
    }
    case qcmGraphicSlide.universalRef: {
      const correctAnswer = [get('question.content.answers', qcmGraphicSlide)];
      return {
        correctAnswer,
        corrections: wrongChoice
          ? [{answer: get('question.content.answers', qcmGraphicSlide), isCorrect: false}]
          : [{answer: correctAnswer[0], isCorrect: true}]
      };
    }
    case freeTextSlide.universalRef: {
      const correctAnswer = [get('question.content.answers', freeTextSlide)];
      return {
        correctAnswer,
        corrections: wrongChoice
          ? [{answer: 'Nope', isCorrect: false}]
          : [{answer: correctAnswer[0], isCorrect: true}]
      };
    }
    case templateSlide.universalRef: {
      const correctAnswer = [get('question.content.answers', templateSlide)];
      return {
        correctAnswer,
        corrections: wrongChoice
          ? [
              {
                answer: get('question.content.answers', templateSlide),
                isCorrect: false
              }
            ]
          : [{answer: correctAnswer[0], isCorrect: true}]
      };
    }
    default: {
      const correctAnswer = get('question.content.answers', sliderSlide);
      return {
        correctAnswer,
        corrections: wrongChoice
          ? [
              {
                answer: '8',
                isCorrect: false
              }
            ]
          : [{answer: '7', isCorrect: true}]
      };
    }
  }
};

export const fetchSlidesToReviewBySkillRefResponse: SlideIdFromAPI[] = [
  {
    slideId: freeTextSlide._id
  },
  {
    slideId: templateSlide._id
  },
  {
    slideId: qcmDragSlide._id
  },
  {
    slideId: qcmGraphicSlide._id
  },
  {
    slideId: qcmSlide._id
  }
];

const availableContent = [
  {
    ref: content.ref,
    slides: [freeTextSlide, qcmGraphicSlide, qcmSlide, sliderSlide, templateSlide],
    rules: null
  }
];

const getPostAnswer = (progression: ProgressionFromAPI, answer: string[]): ProgressionFromAPI => {
  const reviewConfig: Config = getConfig({ref: 'review', version: '1'});
  const action = [
    computeNextStepAfterAnswerForReview(
      reviewConfig,
      progression.state,
      availableContent,
      getSlideFixture(progression.state.nextContent.ref),
      {
        type: 'answer',
        payload: {answer, content: progression.state.nextContent, godMode: false}
      }
    )
  ];

  const newState: ProgressionState = updateState(reviewConfig, progression.state, action);
  const response: ProgressionFromAPI = {...progression, state: newState};
  return response;
};

export const services: Services = {
  fetchSkill: ref => Promise.resolve(fetchSkillResponse[ref]),
  fetchSkills: () => Promise.resolve(fetchSkillsResponse),
  fetchSlide: ref => Promise.resolve({...getSlideFixture(ref), universalRef: ref, _id: ref}),
  postProgression: () => Promise.resolve(postProgressionResponse),
  postAnswer: (progression: ProgressionFromAPI, _: string, answer: string[]) =>
    Promise.resolve(getPostAnswer(progression, answer)),
  fetchCorrection: ref => Promise.resolve(getChoicesCorrection(ref)),
  fetchRank: () => Promise.resolve(fetchRankResponse),
  fetchSlidesToReviewBySkillRef: () => Promise.resolve(fetchSlidesToReviewBySkillRefResponse)
};

export const translate = (key: string, data?: Record<string, string>): string =>
  mockTranslate(key, data);
