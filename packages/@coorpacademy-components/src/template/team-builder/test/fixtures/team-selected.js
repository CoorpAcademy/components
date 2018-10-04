import gameStatus from '../../game-statuses';

export default {
  props: {
    gameStatus: gameStatus.TEAM_SELECTED,
    myTeam: {
      name: 'Team 1',
      number: 0,
      members: [
        {
          name: 'Joe De la Mortega y arrogon',
          avatar: 'https://api.adorable.io/avatars/150/Joe.png',
          isMe: false
        },
        {name: 'Abott', avatar: 'https://api.adorable.io/avatars/150/abott.png', isMe: true},
        {name: 'John', avatar: 'https://api.adorable.io/avatars/150/john.png', isMe: false},
        {name: 'Paul', avatar: 'https://api.adorable.io/avatars/150/Paul.png', isMe: false},
        {name: 'Jack', avatar: 'https://api.adorable.io/avatars/150/Jack.png', isMe: false}
      ]
    },
    teams: [
      {
        name: 'Team 1',
        number: 0,
        isMyTeam: true,
        members: [
          {name: 'Joe', avatar: 'https://api.adorable.io/avatars/150/Joe.png', isMe: false},
          {name: 'Abott', avatar: 'https://api.adorable.io/avatars/150/abott.png', isMe: false},
          {name: 'John', avatar: 'https://api.adorable.io/avatars/150/john.png', isMe: false},
          {name: 'Paul', avatar: 'https://api.adorable.io/avatars/150/Paul.png', isMe: false},
          {name: 'Jack', avatar: 'https://api.adorable.io/avatars/150/Jack.png', isMe: false}
        ]
      },
      {
        name: 'Team 2',
        number: 1,
        isMyTeam: false,
        members: [
          {name: 'Katrine', avatar: 'https://api.adorable.io/avatars/150/Katrine.png', isMe: false},
          {name: 'Doug', avatar: 'https://api.adorable.io/avatars/150/Doug.png', isMe: false}
        ]
      },
      {
        name: 'Team 3',
        isMyTeam: false,
        number: 2,
        members: [
          {name: 'Eric', avatar: 'https://api.adorable.io/avatars/150/Eric.png', isMe: false},
          {name: 'Mark', avatar: 'https://api.adorable.io/avatars/150/Mark.png', isMe: false}
        ]
      },
      {
        name: 'Team 4',
        isMyTeam: false,
        number: 3,
        members: [
          {name: 'Sarah', avatar: 'https://api.adorable.io/avatars/150/Sarah.png', isMe: false},
          {name: 'Jordan', avatar: 'https://api.adorable.io/avatars/150/Jordan.png', isMe: false}
        ]
      }
    ],
    cta: {
      submitValue: 'Click to start',
      onClick: () => console.log('Joined !')
    }
  }
};
