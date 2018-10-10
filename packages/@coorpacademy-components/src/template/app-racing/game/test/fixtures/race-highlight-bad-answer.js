import allInMiddleTeam from '../../common-fixtures/all-in-middle-team';
import badAnswerTowers from '../../common-fixtures/bad-answer-towers';

export default {
  props: {
    view: 'race',
    blurType: 'all-but-mine',
    team: allInMiddleTeam,
    towers: badAnswerTowers,
    goal: 8,
    info: {
      success: false,
      message: 'Bad answer'
    }
  }
};
