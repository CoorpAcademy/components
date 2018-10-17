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
      number: 4,
      members: [
        {
          id: 'user_2',
          name: 'Bob enirtak',
          initial: 'BE',
          team: 4
        },
        {
          id: 'user_3',
          name: 'John eoj',
          initial: 'JE',
          team: 4
        },
        {
          id: 'user_4',
          name: 'Kim Emik',
          initial: 'KE',
          team: 4
        }
      ]
    }
  }
};
