export default {
  props: {
    title: '10mn - +1h',
    labelMin: '1mn',
    labelMax: '+2h',
    handle1: {
      x: 120
    },
    handle2: {
      x: 250
    },
    onChange: state => console.log({state}) // eslint-disable-line no-console
  }
};
