import noop from 'lodash/fp/noop';
import {UISlide} from '../..';
import {SlideFromAPI} from '../../../../types/common';

export const freeTextSlide: SlideFromAPI = {
  question: {
    content: {
      media: {
        src: [],
        posters: [],
        subtitles: []
      },
      label: '',
      placeholder: 'Type here',
      id: 'sli_VJYjJnJhg.choice_1'
    },
    type: 'basic',
    header:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?',
    explanation: 'Type your answer.'
  },
  klf: 'To negotiate your salary when being hired, you have to establish a benchmark beforehand. In other words, you should assess the salary to which you aspire by enquiring about the remuneration paid in the same industry, the same region and the same position.',
  tips: 'According to Insee, Paris salaries are 20-25% higher compared with those of the provinces in 2015.',
  universalRef: 'sli_VJYjJnJhg',
  id: 'sli_VJYjJnJhg',
  parentContentTitle: {
    title: 'Developing the review app',
    type: 'course'
  }
};

export const freeTextUISlide: Partial<UISlide> = {
  answerUI: {
    help: 'Type your answer.',
    model: {
      type: 'freeText',
      placeholder: 'Type here',
      value: '',
      onChange: noop
    }
  },
  questionText:
    'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
};
