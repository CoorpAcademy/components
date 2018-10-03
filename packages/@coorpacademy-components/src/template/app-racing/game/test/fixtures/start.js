import allInMiddleTeam from '../../common-fixtures/all-in-middle-team';
import noTower from '../../common-fixtures/no-tower';

export default {
  props: {
    start: true,
    blur: false,
    slide: null,
    view: 'race',
    team: allInMiddleTeam,
    towers: noTower,
    goal: 8,
    cta: null
  }
};
