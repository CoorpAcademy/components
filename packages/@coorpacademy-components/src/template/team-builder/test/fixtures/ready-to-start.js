export default {
  props: {
    teams: [
      {
        name: 'Team 1',
        number: 0,
        isMyTeam: false,
        members: [{name: 'Joe eoj', initial: 'JE'}, {name: 'Kim mik', initial: 'KM'}]
      },
      {
        name: 'Team 2',
        number: 1,
        members: [{name: 'Katrine enirtak', initial: 'KE'}, {name: 'Doug goud', initial: 'DG'}]
      },
      {
        name: 'Team 3',
        number: 2,
        members: [{name: 'Eric cire', initial: 'EC'}, {name: 'Mark kram', initial: 'MK'}]
      },
      {
        name: 'Team 4',
        number: 3,
        members: [{name: 'Sarah haras', initial: 'SH'}, {name: 'Jordan nadroj', initial: 'JN'}]
      }
    ],
    cta: {
      submitValue: 'Start',
      animate: true,
      onClick: () => console.log('start!')
    }
  }
};
