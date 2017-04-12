export default {
  props: {
    id: '98e898748',
    title: 'Recommended for you',
    onUp: e => {console.log(e);}, // eslint-disable-line no-console
    onDown: e => {console.log(e);}, // eslint-disable-line no-console
    display: {
      value: true,
      onChange: value => console.log(value) // eslint-disable-line no-console
    }
  }
};
