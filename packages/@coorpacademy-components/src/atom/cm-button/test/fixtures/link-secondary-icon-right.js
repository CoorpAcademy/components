export default {
  props: {
    type: 'secondary',
    label: 'Global Analytics',
    'data-name': 'default-button',
    icon: {
      position: 'right',
      type: 'analytics'
    },
    onClick: () => console.log('click')
  }
};
