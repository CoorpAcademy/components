import allInMiddleTeam from '../../common-fixtures/all-in-middle-team';
import startTower from '../../common-fixtures/start-towers';

export default {
  props: {
    start: true,
    blur: false,
    slide: null,
    view: 'race',
    team: allInMiddleTeam,
    towers: startTower,
    goal: 8,
    cta: null,
    victors: []
  }
};
