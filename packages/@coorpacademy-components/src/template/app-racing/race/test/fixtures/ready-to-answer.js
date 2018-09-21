import noTower from '../../../common-fixtures/no-tower';
import readyTeam from '../../../common-fixtures/ready-team';

export default {
  props: {
    info: {
      title: null,
      success: null,
      gameOver: false
    },
    race: noTower,
    cta: {
      submitValue: 'Question suivante'
    },
    team: readyTeam
  }
};
