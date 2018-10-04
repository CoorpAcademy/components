import allInMiddleTeam from '../../common-fixtures/all-in-middle-team';
import badFirstAnswerTowers from '../../common-fixtures/bad-first-answer-towers';

export default {
  props: {
    view: 'race',
    blurType: 'all-but-mine',
    team: allInMiddleTeam,
    towers: badFirstAnswerTowers,
    goal: 8,
    info: {
      success: true,
      gameOver: false
    }
  }
};
