export default {
  props: {
    teams: [
      {
        name: 'Team 1',
        members: [{name: 'Joe'}, {name: 'empty-slot'}]
      },
      {
        name: 'Team 2',
        members: [{name: 'Katrine'}, {name: 'empty-slot'}]
      },
      {
        name: 'Team 3',
        members: [{name: 'Eric'}, {name: 'empty-slot'}]
      },
      {
        name: 'Team 4',
        members: [{name: 'Sarah'}, {name: 'empty-slot'}]
      }
    ],
    cta: null,
    title: 'Waiting for players...'
  }
};
