import Autocomplete from '../../../../atom/autocomplete/test/fixtures/filled';

export default {
  props: {
    title: 'Massive Battle',
    fields: [
      {
        type: 'autoComplete',
        ...Autocomplete.props,
        title: 'Users'
      },
      {
        title: 'Population',
        type: 'selectMultiple',
        key: 'payload.language.supported',
        description: '',
        options: [
          {
            value: 'pop-1',
            name: 'Population 1',
            selected: false
          },
          {
            value: 'pop-2',
            name: 'Population 2',
            selected: true
          },
          {
            value: 'pop-3',
            name: 'Population 2',
            selected: false
          },
          {
            value: 'pop-4',
            name: 'Population 4',
            selected: false
          },
          {
            value: 'pop-5',
            name: 'Population 5',
            selected: false
          }
        ],
        multiple: true,
        value: ['pop-1', 'pop-2'],
        theme: 'setup',
        modified: false
      },
      {
        type: 'autoComplete',
        ...Autocomplete.props,
        title: 'Cours'
      },
      {
        title: 'Difficulty level',
        type: 'select',
        key: 'payload.sector',
        value: 'none',
        options: [
          {
            value: 0.2,
            name: 'Easy',
            selected: true
          },
          {
            value: 0.5,
            name: 'Average',
            selected: false
          },
          {
            value: 0.8,
            name: 'Hard',
            selected: false
          }
        ],
        modified: false
      }
    ]
  }
};
