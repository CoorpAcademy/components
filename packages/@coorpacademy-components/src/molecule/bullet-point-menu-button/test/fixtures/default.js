const actionButtonProps = {
  'data-name': `menu-publish-button`,
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
    buttonAriaLabel: 'aria button',
    menuAriaLabel: 'aria menu',
    buttons: [actionButtonProps, deleteButtonProps],
    onClick: () => console.log('click on bullet point button - test in a bigger component to see the menu')
  }
};
