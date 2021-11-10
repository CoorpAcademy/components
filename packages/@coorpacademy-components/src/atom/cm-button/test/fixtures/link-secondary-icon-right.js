export default {
  props: {
    type: 'secondary',
    label: 'Button',
    'data-name': 'default-button',
    icon: {
      position: 'right',
      type: 'see'
    },
    onClick: () => console.log('click')
  }
};
