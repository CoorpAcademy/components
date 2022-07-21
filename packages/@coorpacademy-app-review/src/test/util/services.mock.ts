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
    // return Promise.resolve(qcm); // why qcm does not look like a slide returned from mooc ?
    return Promise.resolve({
      question: {
        content: {
          choices: [
            {
              selected: false,
              title: 'choix1',
              help: '(help choix1)',
              ariaLabel: '__ariaLabel1',
              onClick: (): void => undefined
            },
            {
              selected: false,
              title: 'choix2',
              help: '(help choix2)',
              ariaLabel: '__ariaLabel2',
              onClick: (): void => undefined
            },
            {
              selected: false,
              title: 'choix3',
              help: '(help choix3)',
              ariaLabel: '__ariaLabel3',
              onClick: (): void => undefined
            }
          ]
        }
      },
      klf: '___klf',
      universalRef: ref
    });
  },
  postProgression: () => {
    return Promise.resolve({
      _id: '62b1d1087aa12f00253f40ee',
      state: {
        pendingSlides: [],
        step: {
          current: 1
        },
        isCorrect: true,
        nextContent: {
          ref: 'sli_N1XACJobn',
          type: 'slide'
        }
      }
    });
  }
};
