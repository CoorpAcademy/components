export default {
  props: {
    type: 'tertiary',
    label: 'Button',
    'data-name': 'default-button',
    icon: {
      position: 'left',
      type: 'see'
    },
    onClick: () => console.log('click')
  }
};
