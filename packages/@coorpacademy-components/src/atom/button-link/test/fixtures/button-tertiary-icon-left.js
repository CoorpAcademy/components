export default {
  props: {
    type: 'tertiary',
    label: 'Button',
    'aria-title': 'aria button',
    'data-name': 'default-button',
    icon: {
      position: 'left',
      type: 'see'
    },
    onClick: () => console.log('click')
  }
};
