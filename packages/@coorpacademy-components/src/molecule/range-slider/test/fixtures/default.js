export default {
  props: {
    label: 'Time:',
    labelMin: '0',
    labelMax: '∞',
    title: '2mins – 3 hours +',
    onDrag: state => console.log('onDrag', {state}), // eslint-disable-line no-console
    onDragEnd: state => console.log('onDragEnd', {state}) // eslint-disable-line no-console
  }
};
