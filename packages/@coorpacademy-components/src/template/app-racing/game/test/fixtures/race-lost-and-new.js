import allInMiddleTeam from '../../common-fixtures/all-in-middle-team';
import towers from '../../common-fixtures/lost-and-new-towers';

export default {
  props: {
    view: 'race',
    team: allInMiddleTeam,
    towers,
    goal: 8,
    info: {
      success: true,
      message: 'Good answer'
    },
    victors: []
  }
};
