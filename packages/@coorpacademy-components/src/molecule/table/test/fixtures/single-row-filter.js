export default {
  props: {
    editable: false,
    columns: [
      {
        title: 'Populations',
        filtered: true,
        options: [
          'All populations',
          'Sales Europe',
          'Customer success',
          'Product and engineering',
          'New starters'
        ].map((title, index) => ({
          title,
          selected: index === 1,
          onChange: () => {}
        }))
      },
      {title: 'Learner'},
      {title: 'Email'},
      {title: 'Completed on'}
    ],
    rows: [
      {
        fields: ['Sales Europe', 'Camille Martin', 'camille.martin@example.com', '6 Nov 2026']
      }
    ]
  }
};
