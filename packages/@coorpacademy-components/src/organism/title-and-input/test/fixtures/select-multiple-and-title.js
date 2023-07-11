import SelectMultiple from '../../../../molecule/select-multiple/test/fixtures/checked-cm-theme';

export default {
  props: {
    title: {
      type: 'form-group',
      title: '4. Difficulty level',
      subtitle: 'If it is easy, the population is more likely to win'
    },
    field: {
      ...SelectMultiple.props,
      type: 'selectMultiple'
    },
    type: 'titleAndInput'
  }
};
