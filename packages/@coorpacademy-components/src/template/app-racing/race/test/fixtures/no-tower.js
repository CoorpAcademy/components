import noTower from '../../../common-fixtures/no-tower';
import spreadTeam from '../../../common-fixtures/spread-team';

export default {
  props: {
    info: {
      title: null,
      success: null,
      gameOver: false
    },
    race: noTower,
    cta: null,
    team: spreadTeam
  }
};
