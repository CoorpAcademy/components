export default {
  props: {
    x: 50,
    y: 50,
    onPan: e => console.log('onPan', e.type), // eslint-disable-line no-console
    onPanStart: e => console.log('onPanStart', e.type), // eslint-disable-line no-console
    onPanEnd: e => console.log('onPanEnd', e.type) // eslint-disable-line no-console
  }
};
