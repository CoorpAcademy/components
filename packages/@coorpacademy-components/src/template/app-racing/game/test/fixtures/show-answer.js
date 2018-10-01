import allInMiddleTeam from '../../common-fixtures/all-in-middle-team';
import fiveTowers from '../../common-fixtures/five-towers';

export default {
  props: {
    view: 'show-answer',
    team: allInMiddleTeam,
    towers: fiveTowers,
    goal: 8,
    blur: true,
    info: {
      success: true,
      gameOver: false
    }
  }
};
