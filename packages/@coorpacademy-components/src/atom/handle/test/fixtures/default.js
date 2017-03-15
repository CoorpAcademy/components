export default {
  props: {
    x: 50,
    y: 50,
    handlePan: e => console.log('handlePan', e.type), // eslint-disable-line no-console
    handlePanStart: e => console.log('handlePanStart', e.type), // eslint-disable-line no-console
    handlePanEnd: e => console.log('handlePanEnd', e.type) // eslint-disable-line no-console
  }
};
