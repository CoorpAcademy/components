import spreadTeam from '../../common-fixtures/spread-team';
import fiveTowers from '../../common-fixtures/five-towers';

export default {
  props: {
    view: 'race',
    slide: null,
    getReadyTime: 3000,
    team: spreadTeam,
    towers: fiveTowers,
    goal: 8,
    cta: null,
    victors: []
  }
};
