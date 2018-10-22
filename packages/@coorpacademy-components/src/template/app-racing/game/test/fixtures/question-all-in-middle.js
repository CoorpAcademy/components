import Answer from '../../../../../molecule/answer/test/fixtures/default';
import allInMiddleTeam from '../../common-fixtures/all-in-middle-team';
import fiveTowers from '../../common-fixtures/five-towers';

const {props: answerType} = Answer;

export default {
  props: {
    view: 'question',
    blurType: 'all',
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
    team: allInMiddleTeam,
    towers: fiveTowers,
    goal: 8,
    cta: null,
    victors: null
  }
};
