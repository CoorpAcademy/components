import noop from 'lodash/fp/noop';
import {UISlide} from '../types/slides';

export const slide: UISlide = {
  questionText: 'QCM',
  answerUI: {
    help: '__help',
    model: {
      type: 'qcm',
      answers: [
        {
          selected: false,
          title: 'choix1',
          help: '(help choix1)',
          ariaLabel: '__ariaLabel1',
          onClick: noop
        },
        {
          selected: false,
          title: 'choix2',
          help: '(help choix2)',
          ariaLabel: '__ariaLabel2',
          onClick: noop
        },
        {
          selected: false,
          title: 'choix3',
          help: '(help choix3)',
          ariaLabel: '__ariaLabel3',
          onClick: noop
        }
      ]
    }
  }
};
