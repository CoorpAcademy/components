import {Slide} from '../../src/types/slides';

const slide: Slide = {
  questionText: 'plop ?',
  answerUI: {
    help: '__help',
    model: {
      type: 'freeText',
      placeholder: 'plop!',
      value: '',
      onChange: () => {
        // eslint-disable-next-line no-console
        console.log('on change');
      },
      ariaLabel: ''
    }
  }
};

export default slide;
