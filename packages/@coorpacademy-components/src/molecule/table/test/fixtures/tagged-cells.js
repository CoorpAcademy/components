export default {
  props: {
    editable: false,
    columns: [
      {title: 'Completed on'},
      {title: 'Status'},
      {title: 'Status and flag'},
      {title: 'Learner'}
    ],
    rows: [
      {
        fields: [
          {text: '12 Nov 2026', tags: [{status: 'late', label: 'Late'}]},
          {tags: [{status: 'assigned', label: 'Not started'}]},
          {
            tags: [
              {status: 'inProgress', label: 'In progress'},
              {status: 'overdue', label: 'Overdue'}
            ]
          },
          'Alice Martin'
        ]
      }
    ]
  }
};
