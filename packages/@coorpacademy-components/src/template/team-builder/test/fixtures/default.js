export default {
  props: {
    teams: [
      {
        name: 'Team 1',
        members: [{name: 'Joe'}, {name: 'Kim'}]
      },
      {
        name: 'Team 2',
        members: [{name: 'Katrine'}, {name: 'Doug'}]
      },
      {
        name: 'Team 3',
        members: [{name: 'Eric'}, {name: 'Mark'}]
      },
      {
        name: 'Team 4',
        members: [{name: 'Sarah'}, {name: 'Jordan'}]
      }
    ],
    cta: {
      submitValue: 'Join a team',
      onClick: () => console.log('Joined !')
    }
  }
};
