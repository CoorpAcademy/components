export default {
  props: {
    editable: false,
    columns: [{title: 'Name'}, {title: 'Login'}, {title: ''}],
    rows: [
      {
        fields: [
          'Alice Martin',
          'alice.martin',
          {
            action: {label: 'Remove', variant: 'danger', onClick: () => console.log('remove alice')}
          }
        ]
      },
      {
        fields: [
          'Diego Costa',
          'diego.costa',
          {
            action: {label: 'Undo', variant: 'neutral', onClick: () => console.log('undo diego')}
          }
        ]
      }
    ]
  }
};
