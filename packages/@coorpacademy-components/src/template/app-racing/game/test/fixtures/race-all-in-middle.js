import allInMiddleTeam from '../../common-fixtures/all-in-middle-team';
import fiveTowers from '../../common-fixtures/five-towers';

export default {
  props: {
    view: 'race',
    team: allInMiddleTeam,
    towers: fiveTowers,
    goal: 8,
    info: {
      success: true,
      gameOver: false
    }
  }
};
