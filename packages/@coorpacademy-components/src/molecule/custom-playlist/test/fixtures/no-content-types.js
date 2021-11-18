export default {
  props: {
    id: 'no-content-types',
    title: 'No content types',
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
