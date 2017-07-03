export default {
  props: {
    x: 50,
    y: 50,
    onPan: e => console.log('onPan', e.type),
    onPanStart: e => console.log('onPanStart', e.type),
    onPanEnd: e => console.log('onPanEnd', e.type)
  }
};
