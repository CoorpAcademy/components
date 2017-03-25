export default {
  props: {
    title: 'Recommended for you',
    handleUpClick: () => {},
    handleDownClick: () => {},
    display: {
      value: true,
      onChange: value => console.log(value) // eslint-disable-line no-console
    }
  }
};
