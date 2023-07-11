import SelectOpponents from '../../../select-opponents/test/fixtures/default';

export default {
  props: {
    title: {
      type: 'form-group',
      title: '2. Opponents',
      subtitle: 'Choose the population who will receive the battle'
    },
    field: {
      ...SelectOpponents.props
    },
    childType: 'selectOpponents'
  }
};
