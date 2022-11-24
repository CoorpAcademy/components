import noop from 'lodash/fp/noop';
import {ReviewSlide} from '../..';

export const freeTextUISlide: Partial<ReviewSlide> = {
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
