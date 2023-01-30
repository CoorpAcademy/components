export default {
  props: {
    'aria-label': 'select aria-label',
    theme: 'filter',
    title: 'Propriétés de la marque :',
    optgroups: [
      {
        label: 'Generic playlists',
        options: [
          {name: 'Onboarding', value: 'ref_1234', selected: true},
          {name: 'Re-energize yourself', value: 'Re-energize yourself', selected: false}
        ]
      },
      {
        label: 'Brand playlists',
        options: [
          {
            name: 'All about Cybersecurity',
            value: 'All about Cybersecurity',
            selected: false
          },
          {name: 'People Development', value: 'People Development', selected: false}
        ]
      }
    ],
    onChange: value => console.log(value)
  }
};
