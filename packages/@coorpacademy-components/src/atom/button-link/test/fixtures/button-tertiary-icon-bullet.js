export default {
  props: {
    type: 'tertiary',
    'aria-label': 'aria button',
    'data-name': 'bullet-button',
    icon: {
      position: 'center',
      type: 'bullet-point'
    },
    onClick: () => console.log('click')
  }
};
