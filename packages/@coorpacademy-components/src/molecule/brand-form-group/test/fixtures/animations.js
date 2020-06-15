import Autocomplete from '../../../../atom/autocomplete/test/fixtures/filled';

export default {
  props: {
    title: 'Massive Battle',
    fields: [
      {
        type: 'autoComplete',
        ...Autocomplete.props,
        title: 'User',
        description: 'Name of the fictive user who will send the battle',
        required: true
      },
      {
        title: 'Populations',
        type: 'selectMultiple',
        description: 'The cohorte which will receive the battle',
        required: true,
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
        theme: 'setup',
        modified: false
      },
      {
        type: 'autoComplete',
        ...Autocomplete.props,
        title: 'Course',
        description: 'Name of the course and the level used to make the battle',
        required: true
      },
      {
        title: 'Difficulty level',
        type: 'select',
        description: 'Level of difficulty (if it is easy, the population is more likely to win)',
        required: true,
        options: [
          {
            value: 0.2,
            name: 'Easy (20% of well answered questions)',
            selected: true
          },
          {
            value: 0.5,
            name: 'Average (50% of well answered questions)',
            selected: false
          },
          {
            value: 0.8,
            name: 'Hard (80% of well answered questions)',
            selected: false
          }
        ],
        modified: false
      }
    ]
  }
};
