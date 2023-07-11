import Autocomplete from '../../../../atom/autocomplete/test/fixtures/cm-default';

export default {
  props: {
    title: {
      type: 'form-group',
      title: '1. Battle sender',
      subtitle: 'Define the user who will send the battle'
    },
    field: {
      ...Autocomplete.props,
      type: 'autoComplete'
    },
    type: 'titleAndInput'
  }
};
