export default {
  props: {
    field: {
      type: 'text',
      title: 'Couleur',
      placeholder: '#2F3487',
      value: '#FFFFFF',
      onChange: value => console.log(value) // eslint-disable-line no-console
    }
  }
};
