import {qcmSlide} from '../../helpers/test/fixtures/qcm';
import {ProgressionState, Services} from '../../types/common';

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
    return Promise.resolve({...qcmSlide, universalRef: ref, id: ref});
  },
  postProgression: () => {
    const progressionStates: ProgressionState[] = [
      {
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
        }
      },
      {
        allAnswers: [
          {
            isCorrect: true,
            slideRef: 'sli_N1XACJobn',
            answer: []
          }
        ],
        isCorrect: true,
        content: {
          ref: 'sli_N1XACJobn',
          type: 'slide'
        },
        nextContent: {
          ref: 'sli_N1XACJobn2',
          type: 'slide'
        },
        pendingSlides: [],
        slides: ['sli_N1XACJobn'],
        step: {
          current: 2
        }
      },
      {
        allAnswers: [
          {
            isCorrect: true,
            slideRef: 'sli_N1XACJobn',
            answer: []
          },
          {
            isCorrect: false,
            slideRef: 'sli_N1XACJobn2',
            answer: []
          }
        ],
        isCorrect: true,
        content: {
          ref: 'sli_N1XACJobn2',
          type: 'slide'
        },
        nextContent: {
          ref: 'sli_N1XACJobn3',
          type: 'slide'
        },
        pendingSlides: [],
        slides: ['sli_N1XACJobn', 'sli_N1XACJobn2'],
        step: {
          current: 3
        }
      }
    ];

    return Promise.resolve({
      _id: '62b1d1087aa12f00253f40ee',
      content: {
        ref: '_skill-ref',
        type: 'skill'
      },
      engine: {
        ref: 'review'
      },
      state: progressionStates[0]
    });
  }
};
