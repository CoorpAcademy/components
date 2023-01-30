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
          {name: 'Re-energize yourself', value: 'ref_5678', selected: false}
        ]
      },
      {
        label: 'Brand playlists',
        options: [
          {
            name: 'All about Cybersecurity',
            value: 'ref_9123',
            selected: false
          },
          {name: 'People Development', value: 'ref_4567', selected: false}
        ]
      }
    ],
    onChange: value => console.log(value)
  }
};
