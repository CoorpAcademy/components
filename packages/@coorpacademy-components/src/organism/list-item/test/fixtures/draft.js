export default {
  props: {
    id: 'default',
    title: 'Leaders of tomorrow',
    tags: [
      {
        label: 'Draft',
        type: 'draft'
      }
    ],
    bulletPointMenuButton: {
      buttonAriaLabel: 'aria button',
      menuAriaLabel: 'aria menu',
      buttons: [
        {
          'data-name': 'CP-publish-button',
          label: 'Publish',
          type: 'default',
          onClick: () => console.log('click')
        },
        {
          'data-name': 'CP-delete-button',
          label: 'Delete',
          type: 'dangerous',
          onClick: () => console.log('click')
        }
      ],
      onClick: () => console.log('click')
    },
    buttonLink: {
      type: 'secondary',
      label: 'Edit',
      ariaLabel: 'aria button',
      dataName: 'default-button',
      icon: {
        position: 'left',
        type: 'edit'
      },
      onClick: () => console.log('click')
    },
    bulletPointButtonOnClick: () => console.log('click')
  }
};
