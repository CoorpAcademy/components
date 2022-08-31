import get from 'lodash/fp/get';
import {qcmSlide} from '../../views/slides/test/fixtures/qcm';
import {qcmGraphicSlide} from '../../views/slides/test/fixtures/qcm-graphic';
import {freeTextSlide} from '../../views/slides/test/fixtures/free-text';
import {sliderSlide} from '../../views/slides/test/fixtures/slider';
import {templateSlide} from '../../views/slides/test/fixtures/template';
import {
  CorrectionFromAPI,
  ProgressionFromAPI,
  ReviewContent,
  ReviewEngine,
  Services,
  SlideFromAPI
} from '../../types/common';

const content: ReviewContent = {
  ref: '_skill-ref',
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
    default:
      return sliderSlide;
  }
};

const fetchSkillsResponse = [
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

const correctionOnRightAnswer: CorrectionFromAPI = {
  correctAnswer: ['Benchmark'],
  corrections: [{answer: 'Benchmark', isCorrect: true}]
};

export const services: Services = {
  fetchSkills: () => Promise.resolve(fetchSkillsResponse),
  fetchSlide: ref => Promise.resolve({...getSlideFixture(ref), universalRef: ref, id: ref}),
  postProgression: () => Promise.resolve(postProgressionResponse),
  postAnswer: progression => {
    const currentSlide = progression.state.nextContent.ref;
    return Promise.resolve(get(currentSlide, postAnswerResponses));
  },
  fetchCorrection: () => Promise.resolve(correctionOnRightAnswer)
};
