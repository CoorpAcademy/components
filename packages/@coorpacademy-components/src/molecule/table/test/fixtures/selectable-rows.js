export default {
  props: {
    editable: false,
    columns: [{title: 'Name'}, {title: 'Login'}],
    selectAll: {
      checked: false,
      ariaLabel: 'Select all learners on this page',
      onChange: value => console.log('toggle page', value)
    },
    rows: [
      {
        fields: ['Alice Martin', 'alice.martin'],
        select: {
          checked: true,
          ariaLabel: 'Alice Martin',
          onChange: value => console.log('toggle alice', value)
        }
      },
      {
        fields: ['Camille Durand', 'camille.durand'],
        select: {
          checked: false,
          ariaLabel: 'Camille Durand',
          onChange: value => console.log('toggle camille', value)
        }
      },
      {
        fields: ['Deleted account', '—'],
        select: {
          checked: false,
          disabled: true,
          ariaLabel: 'Deleted account',
          onChange: value => console.log('toggle deleted', value)
        }
      }
    ]
  }
};
