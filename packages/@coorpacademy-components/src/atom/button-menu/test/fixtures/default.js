const actionButtonProps = {
  'data-name': 'menu-publish-button',
  label: 'Publish',
  onClick: () => console.log('Publish'),
  type: 'secondary'
};

const deleteButtonProps = {
  'data-name': 'menu-delete-button',
  label: 'Delete',
  onClick: () => console.log('Delete'),
  type: 'dangerous'
};

export default {
  props: {
    buttons: [actionButtonProps, deleteButtonProps],
    key: 'default-menu',
    'aria-label': 'aria button',
    'data-name': 'default-menu'
  }
};