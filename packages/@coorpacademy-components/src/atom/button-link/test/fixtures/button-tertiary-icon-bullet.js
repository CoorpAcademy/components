export default {
  props: {
    type: 'tertiary',
    'aria-label': 'aria button',
    'data-name': 'bullet-button',
    icon: {
      position: 'center',
      type: 'bullet-point',
      size: 14
    },
    onClick: () => console.log('click')
  }
};
