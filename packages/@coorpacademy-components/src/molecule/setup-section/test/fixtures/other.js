export default {
  props: {
    id: '98e898748',
    title: 'Recommended for you',
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
