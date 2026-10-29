export default {
  props: {
    headerTitle: 'Learners',
    editable: false,
    isPending: false,
    emptyValue: 'There are no learners to display.',
    search: {value: '', placeholder: 'Name, login…', onChange: () => {}},
    pagination: {
      value: '1-4 on 24',
      nextHref: '#learners-page-2',
      previousHref: '#learners-page-1'
    },
    columns: [
      {title: 'Learner'},
      {title: 'Status'},
      {title: 'Progress'},
      {
        title: 'Due date',
        options: [
          {title: 'Sort oldest first', onChange: () => {}, selected: true},
          {title: 'Sort newest first', onChange: () => {}, selected: false}
        ]
      },
      {title: 'Completed on'},
      {title: 'Last reminder'}
    ],
    rows: [
      {
        fields: [
          'Alice Martin · alice.martin@example.com',
          {tags: [{status: 'assigned', label: 'Not started'}]},
          '0 / 3 modules',
          '20 Nov 2026',
          '-',
          '-'
        ]
      },
      {
        fields: [
          'Ben Dupont · ben.dupont@example.com',
          {
            tags: [
              {status: 'inProgress', label: 'In progress'},
              {status: 'overdue', label: 'Overdue'}
            ]
          },
          '1 / 3 modules',
          '10 Nov 2026',
          '-',
          '11 Nov 2026'
        ]
      },
      {
        fields: [
          'Carla Lopez · carla.lopez@example.com',
          {tags: [{status: 'completed', label: 'Completed'}]},
          '3 / 3 modules',
          '10 Nov 2026',
          '9 Nov 2026',
          '-'
        ]
      },
      {
        fields: [
          'David Chen · david.chen@example.com',
          {tags: [{status: 'completed', label: 'Completed'}]},
          '3 / 3 modules',
          '10 Nov 2026',
          {text: '12 Nov 2026', tags: [{status: 'late', label: 'Late'}]},
          '-'
        ]
      }
    ]
  }
};
