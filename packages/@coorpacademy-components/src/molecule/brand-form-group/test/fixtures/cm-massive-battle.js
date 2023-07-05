import Autocomplete from '../../../../atom/autocomplete/test/fixtures/filled';
import SelectPopulation from '../../../../organism/select-population/test/fixtures/default';

export default {
  props: {
    title: 'Massive Battle',
    fields: [
      {
        ...Autocomplete.props,
        type: 'autoComplete',
        title: 'User',
        description: 'Name of the fictive user who will send the battle',
        required: true,
        theme: 'coorpmanager'
      },
      {
        ...SelectPopulation.props,
        type: 'populationSelect'
      },
      {
        ...Autocomplete.props,
        type: 'autoComplete',
        title: 'Course',
        description: 'Name of the course and the level used to make the battle',
        required: true,
        theme: 'coorpmanager'
      },
      {
        title: 'Difficulty level',
        type: 'selectMultiple',
        description: 'Level of difficulty (if it is easy, the population is more likely to win)',
        required: true,
        multiple: false,
        theme: 'coorpmanager',
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
        ]
      }
    ]
  }
};
