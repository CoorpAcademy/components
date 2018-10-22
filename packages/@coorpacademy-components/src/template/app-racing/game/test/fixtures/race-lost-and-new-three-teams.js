import allInMiddleTeam from '../../common-fixtures/all-in-middle-team';
import towers from '../../common-fixtures/three-towers';

export default {
  props: {
    view: 'race',
    team: allInMiddleTeam,
    towers,
    goal: 8,
    info: {
      success: true,
      message: 'Good answer'
    }
  }
};
