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
      isVictory: true,
      message: 'You win',
      name: 'Winners',
      number: 2,
      members: [
        {
          id: 'user_2',
          name: 'Katrine',
          avatar: 'https://api.adorable.io/avatars/150/Katrine.png',
          team: 4
        },
        {
          id: 'user_3',
          isMe: true,
          name: 'Joe',
          avatar: 'https://api.adorable.io/avatars/150/Joe.png',
          team: 4
        },
        {
          id: 'user_4',
          name: 'Kim',
          avatar: 'https://api.adorable.io/avatars/150/Katrine.png',
          team: 4
        }
      ]
    }
  }
};
