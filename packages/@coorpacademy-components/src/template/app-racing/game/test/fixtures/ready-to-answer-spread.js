import spreadTeam from '../../common-fixtures/spread-team';
import fiveTowers from '../../common-fixtures/five-towers';

export default {
  props: {
    view: 'race',
    team: spreadTeam,
    towers: fiveTowers,
    goal: 8,
    info: {
      title: 'Bonne réponse !',
      success: true,
      gameOver: false
    },
    cta: null
  }
};
