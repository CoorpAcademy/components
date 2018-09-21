import Answer from '../../../../../molecule/answer/test/fixtures/default';
import spreadTeam from '../../../common-fixtures/spread-team';
import fiveTowers from '../../../common-fixtures/five-towers';

const {props: answerType} = Answer;

export default {
  props: {
    slide: {
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
    },
    team: spreadTeam,
    race: fiveTowers
  }
};
