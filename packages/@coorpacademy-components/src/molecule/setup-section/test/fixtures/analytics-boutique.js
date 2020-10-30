export default {
  props: {
    id: 'analytics-boutique',
    title: 'Boutique',
    onUp: e => {
      console.log(e);
    },
    onDown: e => {
      console.log(e);
    },
    display: {
      value: true,
      onChange: value => console.log(value)
    }
  }
};
