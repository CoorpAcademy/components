import Answer from '../../../../../molecule/answer/test/fixtures/default';

const {props: answerType} = Answer;

export default {
  props: {
    typeClue: 'answer',
    question:
      'Amongst these businesses, which have suffered setbacks for not knowing how to putting users first?',
    help: 'Select something below',
    answerType,
    cta: {
      submitValue: 'Validate',
      onClick: console.log,
      light: false,
      small: false,
      name: 'validateAnswerCTA',
      secondary: false,
      disabled: false
    }
  }
};
