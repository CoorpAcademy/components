export default {
  props: {
    title: '2mins – 3 hours +',
    onDrag: state => console.log('onDrag', {state}),
    onDragEnd: state => console.log('onDragEnd', {state})
  }
};
