import type {
  ProgressionFromAPI,
  ReviewContent,
  ReviewEngine,
  SlideIdFromAPI
} from '@coorpacademy/review-services';
import {SKILL_REF_FOR_DEFAULT_SLIDES} from '@coorpacademy/review-services-mocks';
import {StoreState} from '../reducers';
import {freeTextSlide} from '../views/slides/test/fixtures/free-text';
import {qcmSlide} from '../views/slides/test/fixtures/qcm';
import {qcmGraphicSlide} from '../views/slides/test/fixtures/qcm-graphic';
import {sliderSlide} from '../views/slides/test/fixtures/slider';
import {templateSlide} from '../views/slides/test/fixtures/template';

const content: ReviewContent = {
  ref: SKILL_REF_FOR_DEFAULT_SLIDES,
  type: 'skill'
};

const engine: ReviewEngine = {
  ref: 'review',
  version: '1'
};

export const fetchSlidesToReviewBySkillRefResponse: SlideIdFromAPI[] = [
  {
    slideId: freeTextSlide._id
  },
  {
    slideId: qcmGraphicSlide._id
  },
  {
    slideId: qcmSlide._id
  },
  {
    slideId: sliderSlide._id
  },
  {
    slideId: templateSlide._id
  }
];

export const fetchNewSlidesToReviewBySkillRefResponse: SlideIdFromAPI[] = [
  {
    slideId: sliderSlide._id
  },
  {
    slideId: templateSlide._id
  },
  {
    slideId: 'sli_Vky4XzUwr'
  },
  {
    slideId: 'sli_V12AXpOPr'
  },
  {
    slideId: 'sli_NkX57xMdS'
  },
  {
    slideId: 'sli_EyL7PDfJ8'
  },
  {
    slideId: 'sli_EkOX-xfOr'
  },
  {
    slideId: 'sli_EkOX-xmpT'
  }
];

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

export const initialState: StoreState = {
  data: {
    progression: null,
    slides: {},
    token: '1234',
    corrections: {},
    rank: {start: Number.NaN, end: Number.NaN},
    currentSkill: null,
    videos: {}
  },
  ui: {
    showCongrats: false,
    positions: [0, 1, 2, 3, 4],
    currentSlideRef: '',
    navigation: [],
    answers: {},
    slide: {},
    showQuitPopin: false,
    showButtonRevising: false
  }
};
