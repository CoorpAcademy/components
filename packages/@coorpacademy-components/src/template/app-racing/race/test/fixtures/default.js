import allInMiddleTeam from '../../../common-fixtures/all-in-middle-team';
import fiveTowers from '../../../common-fixtures/five-towers';

export default {
  props: {
    info: {
      title: 'Bonne réponse !',
      success: true,
      gameOver: false
    },
    race: fiveTowers,
    cta: null,
    team: allInMiddleTeam
  }
};
