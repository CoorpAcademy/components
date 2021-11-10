export default {
  props: {
    type: 'primary',
    label: 'See my platform',
    'data-name': 'default-button',
    icon: {
      position: 'left',
      type: 'chevron-left'
    },
    onClick: () => console.log('click')
  }
};
