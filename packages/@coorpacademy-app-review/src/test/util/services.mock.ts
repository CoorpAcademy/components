import {freeTextSlide} from '../../views/slides/test/fixtures/free-text';
import {Services} from '../../types/common';

export const services: Services = {
  fetchSkills: () => {
    return Promise.resolve([
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
    ]);
  },
  fetchSlide: ref => {
    return Promise.resolve({...freeTextSlide, universalRef: ref, id: ref});
  },
  postProgression: () => {
    return Promise.resolve({
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
          ref: 'sli_N1XACJobn',
          type: 'slide'
        },
        pendingSlides: [],
        slides: [],
        step: {
          current: 1
        },
        stars: 0
      }
    });
  },
  postAnswer: () => {
    return Promise.resolve({
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
            slideRef: 'sli_N1XACJobn',
            isCorrect: true,
            answer: ['Le créateur peut fixer un pourcentage pour chaque transaction future']
          }
        ],
        isCorrect: true,
        nextContent: {
          ref: 'sli_E1uPdic~2',
          type: 'slide'
        },
        pendingSlides: [],
        slides: ['sli_N1XACJobn'],
        step: {
          current: 2
        },
        stars: 4
      }
    });
  }
};
