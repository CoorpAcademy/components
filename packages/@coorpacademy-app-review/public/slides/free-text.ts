import {Slide} from '../../src/types/slide';

const slide: Slide = {
  questionText: 'plop ?',
  answerUI: {
    help: '__help',
    model: {
      type: 'freeText',
      placeholder: 'plop!',
      value: '',
      onChange: () => {
        console.log('on change');
      },
      ariaLabel: ''
    }
  }
};

export default slide;
