import spreadTeam from '../../common-fixtures/spread-team';
import fiveTowers from '../../common-fixtures/five-towers';

export default {
  props: {
    view: 'race',
    getReadyTime: 3000,
    team: spreadTeam,
    towers: fiveTowers,
    goal: 8,
    info: {
      success: true,
      gameOver: false
    },
    cta: null
  }
};
