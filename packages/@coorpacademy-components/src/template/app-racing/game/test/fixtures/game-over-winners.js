import allInMiddleTeam from '../../common-fixtures/all-in-middle-team';
import fiveTowers from '../../common-fixtures/five-towers';

export default {
  props: {
    view: 'race',
    team: {
      ...allInMiddleTeam,
      num: 4
    },
    towers: fiveTowers,
    goal: 8,
    info: {
      success: true
    },
    victors: {
      isVictory: true,
      message: 'You win',
      name: 'Winners',
      number: 4,
      members: [
        {
          id: 'user_2',
          name: 'Katrine enirtak',
          initial: 'KE',
          avatar: 'https://api.adorable.io/avatars/150/Katrine.png',
          team: 4
        },
        {
          id: 'user_3',
          isMe: true,
          name: 'Joe eoj',
          initial: 'JE',
          avatar: 'https://api.adorable.io/avatars/150/Joe.png',
          team: 4
        },
        {
          id: 'user_4',
          name: 'Kim mik',
          initial: 'KM',
          avatar: 'https://api.adorable.io/avatars/150/Katrine.png',
          team: 4
        }
      ]
    }
  }
};
