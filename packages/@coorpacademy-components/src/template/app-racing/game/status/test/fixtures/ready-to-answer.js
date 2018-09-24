import spreadTeam from '../../../common-fixtures/spread-team';
import fiveTowers from '../../../common-fixtures/five-towers';

export default {
  props: {
    team: spreadTeam,
    towers: fiveTowers,
    goal: 8,
    hideTeams: true,
    cta: {
      submitValue: 'Next question'
    }
  }
};
