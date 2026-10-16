export default {
  props: {
    everyone: {value: false, label: 'Everyone in the brand', onChange: value => console.log(value)},
    populations: {
      title: 'Populations',
      options: [
        {name: 'Sales', value: 'sales', selected: true},
        {name: 'Engineering', value: 'engineering', selected: false}
      ],
      onChange: options => console.log(options)
    },
    upload: {
      status: 'done',
      onUpload: file => console.log(file),
      templateHref: '/audience-template.csv',
      summary: {valid: 12, inactive: 2, invalid: 0, notFound: 3, shared: 1},
      rows: [
        {email: 'valid@example.com', status: 'valid'},
        {email: 'inactive@example.com', status: 'inactive'},
        {email: 'invalid@example.com', status: 'invalid'},
        {email: 'unknown@example.com', status: 'notFound'},
        {email: 'shared@example.com', status: 'shared'}
      ]
    },
    individuals: {
      value: 'Alex',
      suggestions: [
        {id: 'alex', label: 'Alex Rivers'},
        {id: 'sam', label: 'Sam Lee'}
      ],
      selected: [{id: 'sam', label: 'Sam Lee'}],
      onSearch: query => console.log(query),
      onAdd: learner => console.log(learner),
      onRemove: id => console.log(id)
    },
    total: {label: 'Estimated audience: 42 learners'}
  }
};
