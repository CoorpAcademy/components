import allInMiddleTeam from '../../common-fixtures/all-in-middle-team';
import noTower from '../../common-fixtures/no-tower';

export default {
  props: {
    view: 'race',
    team: allInMiddleTeam,
    towers: noTower,
    goal: 8,
    victors: null
  }
};
