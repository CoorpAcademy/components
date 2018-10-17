import gameStatus from '../../game-statuses';

export default {
  props: {
    gameStatus: gameStatus.TEAM_SELECTED,
    myTeam: {
      name: 'Team 1',
      number: 0,
      numberSlotTaken: 4,
      members: [
        {name: 'Abott ttoba', initial: 'AT', isMe: true},
        {name: 'John nhoj', initial: 'JN', isMe: false},
        {name: 'Paul luap', initial: 'PL', isMe: false},
        {name: 'Jack kcaj', initial: 'JK', isMe: false}
      ]
    },
    teams: [
      {
        name: 'Team 1',
        number: 0,
        isMyTeam: true,
        numberSlotTaken: 4,
        members: [
          {name: 'Abott ttoba', initial: 'AT', isMe: false},
          {name: 'John nhoj', initial: 'JN', isMe: false},
          {name: 'Paul luap', initial: 'PL', isMe: false},
          {name: 'Jack kcaj', initial: 'JK', isMe: false}
        ]
      },
      {
        name: 'Team 2',
        number: 1,
        isMyTeam: false,
        numberSlotTaken: 4,
        members: [
          {name: 'Katrine enirtak', initial: 'KE', isMe: false},
          {name: 'Doug guod', initial: 'DG', isMe: false},
          {name: 'Paul plop', initial: 'PP', isMe: false},
          {name: 'Jack joe', initial: 'JJ', isMe: false}
        ]
      },
      {
        name: 'Team 3',
        isMyTeam: false,
        number: 2,
        numberSlotTaken: 2,
        members: [
          {name: 'Eric cire', initial: 'EC', isMe: false},
          {name: 'Mark kram', initial: 'MK', isMe: false},
          {},
          {}
        ]
      },
      {
        name: 'Team 4',
        isMyTeam: false,
        number: 3,
        numberSlotTaken: 2,
        members: [
          {name: 'Sarah haras', initial: 'SH', isMe: false},
          {name: 'Jordan nadroj', initial: 'JN', isMe: false},
          {},
          {}
        ]
      }
    ]
  }
};
