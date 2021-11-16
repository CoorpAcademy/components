export default {
  props: {
    type: 'text-negative',
    label: 'Delete',
    'aria-title': 'delete play list',
    'data-name': 'default-button',
    onClick: () => console.log('click'),
    icon: {
      position: 'left',
      type: 'deleteIcon'
    }
  }
};
