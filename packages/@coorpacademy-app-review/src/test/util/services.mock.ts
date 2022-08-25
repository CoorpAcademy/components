import {qcmSlide} from '../../views/slides/test/fixtures/qcm';
import {qcmGraphicSlide} from '../../views/slides/test/fixtures/qcm-graphic';
import {freeTextSlide} from '../../views/slides/test/fixtures/free-text';
import {sliderSlide} from '../../views/slides/test/fixtures/slider';
import {ProgressionFromAPI, Services, SlideFromAPI} from '../../types/common';

const getSlideFixture = (ref: string): SlideFromAPI => {
  switch (ref) {
    case qcmSlide.universalRef:
      return qcmSlide;
    case qcmGraphicSlide.universalRef:
      return qcmGraphicSlide;
    case freeTextSlide.universalRef:
      return freeTextSlide;
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

const postProgressionResponse: ProgressionFromAPI = {
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

export const postAnswerResponse: ProgressionFromAPI = {
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
};

export const services: Services = {
  fetchSkills: () => Promise.resolve(fetchSkillsResponse),
  fetchSlide: ref => Promise.resolve({...getSlideFixture(ref), universalRef: ref, id: ref}),
  postProgression: () => Promise.resolve(postProgressionResponse),
  postAnswer: () => Promise.resolve(postAnswerResponse)
};
