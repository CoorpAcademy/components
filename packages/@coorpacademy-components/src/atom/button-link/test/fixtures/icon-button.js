export default {
  props: {
    type: 'secondary',
    'data-name': 'default-button',
    'aria-label': 'aria button',
    icon: {
      position: 'center',
      type: 'close'
    },
    onClick: () => console.log('click')
  }
};
