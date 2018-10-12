import allInMiddleTeam from '../../common-fixtures/all-in-middle-team';
import fiveTowers from '../../common-fixtures/five-towers';

export default {
  props: {
    view: 'race',
    team: allInMiddleTeam,
    towers: fiveTowers,
    goal: 8,
    info: {
      success: true
    },
    victors: {
      isVictory: false,
      message: 'You lose',
      name: 'Winners',
      number: 2,
      members: [
        {
          id: 'user_2',
          name: 'Katrine enirtak',
          initial: 'KE',
          team: 4
        },
        {
          id: 'user_3',
          name: 'Joe eoj',
          initial: 'JE',
          team: 4
        },
        {
          id: 'user_4',
          name: 'Kim mik',
          initial: 'KM',
          team: 4
        }
      ]
    }
  }
};
