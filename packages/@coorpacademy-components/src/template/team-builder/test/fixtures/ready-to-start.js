export default {
  props: {
    teams: [
      {
        name: 'Team 1',
        number: 0,
        isMyTeam: false,
        members: [
          {name: 'Joe', avatar: 'https://api.adorable.io/avatars/150/Joe.png'},
          {name: 'Kim', avatar: 'https://api.adorable.io/avatars/150/Kim.png'}
        ]
      },
      {
        name: 'Team 2',
        number: 1,
        members: [
          {name: 'Katrine', avatar: 'https://api.adorable.io/avatars/150/Katrine.png'},
          {name: 'Doug', avatar: 'https://api.adorable.io/avatars/150/Doug.png'}
        ]
      },
      {
        name: 'Team 3',
        number: 2,
        members: [
          {name: 'Eric', avatar: 'https://api.adorable.io/avatars/150/Eric.png'},
          {name: 'Mark', avatar: 'https://api.adorable.io/avatars/150/Mark.png'}
        ]
      },
      {
        name: 'Team 4',
        number: 3,
        members: [
          {name: 'Sarah', avatar: 'https://api.adorable.io/avatars/150/Sarah.png'},
          {name: 'Jordan', avatar: 'https://api.adorable.io/avatars/150/Jordan.png'}
        ]
      }
    ],
    cta: {
      submitValue: 'Start',
      animate: true,
      onClick: () => console.log('start!')
    }
  }
};
