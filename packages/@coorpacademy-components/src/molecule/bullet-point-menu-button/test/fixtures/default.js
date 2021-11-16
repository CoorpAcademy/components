export default {
  props: {
    buttonAriaLabel: 'aria button',
    menuAriaLabel: 'aria menu',
    menuButtonsProps: {
      actionButton: {
        actionType: 'publish',
        label: 'Publish',
        onClick: () => console.log('click on Publish button')
      },
      deleteButton: {
        label: 'Delete',
        onClick: () => console.log('click on Delete button')
      }
    },
    onClick: () => console.log('click on bullet point button - test in a bigger component to see the menu')
  }
};
