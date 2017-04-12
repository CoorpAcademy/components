export default {
  props: {
    id: 'aiz12ueaz97',
    title: 'Recommended for you',
    onUp: null,
    onDown: e => {console.log(e);}, // eslint-disable-line no-console
    display: {
      value: true,
      onChange: value => console.log(value) // eslint-disable-line no-console
    }
  }
};
