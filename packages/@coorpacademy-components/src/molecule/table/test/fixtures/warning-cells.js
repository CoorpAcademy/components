export default {
  props: {
    editable: false,
    columns: [{title: 'Learner'}, {title: 'Progress'}],
    rows: [
      {
        fields: [
          'Alice Martin',
          {
            text: '4 / 5 modules',
            warning:
              '4/4 accessible modules completed · 1 unavailable module\nUnavailable content does not count toward the assignment status.'
          }
        ]
      },
      {
        fields: [
          'Sam Taylor',
          {text: '0 / 5 modules', warning: 'No accessible content · 5 unavailable modules'}
        ]
      },
      {fields: ['Alex Morgan', '5 / 5 modules']}
    ]
  }
};
