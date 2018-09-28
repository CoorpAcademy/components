import spreadTeam from '../../common-fixtures/spread-team';
import fiveTowers from '../../common-fixtures/five-towers';

export default {
  props: {
    view: 'question',
    slide: null,
    team: spreadTeam,
    towers: fiveTowers,
    goal: 8,
    cta: null
  }
};
