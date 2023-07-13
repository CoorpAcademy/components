export default {
  props: {
    title: {
      type: 'form-group',
      title: '4. Difficulty level',
      subtitle: 'Level of difficulty (if it is easy, the population is more likely to win)'
    },
    field: {
      title: 'Difficulty level',
      description: 'Level of difficulty (if it is easy, the population is more likely to win)',
      required: true,
      multiple: false,
      theme: 'coorpmanager',
      options: [
        {
          value: '0.2',
          name: 'Easy (20% of well answered questions)',
          selected: true
        },
        {
          value: '0.5',
          name: 'Average (50% of well answered questions)',
          selected: false
        },
        {
          value: '0.8',
          name: 'Hard (80% of well answered questions)',
          selected: false
        }
      ],
      onChange: value => console.log('onChange', value),
      onError: () => true
    },
    childType: 'selectMultiple'
  }
};
