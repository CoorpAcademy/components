import allInMiddleTeam from '../../common-fixtures/all-in-middle-team';
import goodAnswerTowers from '../../common-fixtures/good-answer-towers';

export default {
  props: {
    view: 'race',
    highlight: true,
    team: allInMiddleTeam,
    towers: goodAnswerTowers,
    goal: 8,
    info: {
      success: true,
      gameOver: false
    }
  }
};
