import get from 'lodash/fp/get';
import {qcmSlide} from '../../views/slides/test/fixtures/qcm';
import {qcmGraphicSlide} from '../../views/slides/test/fixtures/qcm-graphic';
import {freeTextSlide} from '../../views/slides/test/fixtures/free-text';
import {sliderSlide} from '../../views/slides/test/fixtures/slider';
import {templateSlide} from '../../views/slides/test/fixtures/template';
import {ProgressionFromAPI, Services, SlideFromAPI} from '../../types/common';

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
  content: {
    ref: '_skill-ref',
    type: 'skill'
  },
  engine: {
    ref: 'review'
  },
  state: {
    allAnswers: [],
    isCorrect: true,
    nextContent: {
      ref: 'sli_VJYjJnJhg',
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
  sli_VJYjJnJhg: {
    _id: '62b1d1087aa12f00253f40ee',
    content: {
      ref: '_skill-ref',
      type: 'skill'
    },
    engine: {
      ref: 'review'
    },
    state: {
      allAnswers: [
        {
          slideRef: 'sli_VJYjJnJhg',
          isCorrect: true,
          answer: ['Benchmark']
        }
      ],
      isCorrect: true,
      nextContent: {
        ref: 'sli_VkSQroQnx',
        type: 'slide'
      },
      content: {
        ref: 'sli_VJYjJnJhg',
        type: 'slide'
      },
      pendingSlides: [],
      slides: ['sli_VJYjJnJhg'],
      step: {
        current: 2
      },
      stars: 4
    }
  },
  sli_VkSQroQnx: {
    _id: '62b1d1087aa12f00253f40ee',
    content: {
      ref: '_skill-ref',
      type: 'skill'
    },
    engine: {
      ref: 'review'
    },
    state: {
      allAnswers: [
        {
          slideRef: 'sli_VJYjJnJhg',
          isCorrect: true,
          answer: ['Benchmark']
        },
        {
          slideRef: 'sli_VkSQroQnx',
          isCorrect: true,
          answer: ['Benchmark']
        }
      ],
      isCorrect: true,
      nextContent: {
        ref: 'sli_VkSQroQnx',
        type: 'slide'
      },
      content: {
        ref: 'sli_VkSQroQnx',
        type: 'slide'
      },
      pendingSlides: [],
      slides: ['sli_VJYjJnJhg', 'sli_VkSQroQnx'],
      step: {
        current: 3
      },
      stars: 8
    }
  }
};

export const services: Services = {
  fetchSkills: () => Promise.resolve(fetchSkillsResponse),
  fetchSlide: ref => Promise.resolve({...getSlideFixture(ref), universalRef: ref, id: ref}),
  postProgression: () => Promise.resolve(postProgressionResponse),
  postAnswer: progression => {
    const currentSlide = progression.state.nextContent.ref;
    return Promise.resolve(get(currentSlide, postAnswerResponses));
  }
};
