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
      {title: 'Learner', order: '', onClick: () => {}},
      {title: 'Status', order: '', onClick: () => {}},
      {title: 'Progress', order: '', onClick: () => {}},
      {title: 'Due date', order: 'asc', onClick: () => {}},
      {title: 'Completed on', order: '', onClick: () => {}},
      {title: 'Last reminder', order: '', onClick: () => {}}
    ],
    rows: [
      {
        fields: [
          'Alice Martin · alice.martin',
          {tags: [{status: 'assigned', label: 'Not started'}]},
          '0 / 3 modules',
          '20 Nov 2026',
          '-',
          '-'
        ]
      },
      {
        fields: [
          'Ben Dupont · ben.dupont',
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
          'Carla Lopez · carla.lopez',
          {tags: [{status: 'completed', label: 'Completed'}]},
          '3 / 3 modules',
          '10 Nov 2026',
          '9 Nov 2026',
          '-'
        ]
      },
      {
        fields: [
          'David Chen · david.chen',
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
