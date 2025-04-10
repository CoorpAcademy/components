export default {
  props: {
    contentType: 'certification',
    id: 'default',
    title: 'Leaders of tomorrow',
    tags: [
      {
        label: 'Published',
        type: 'success'
      }
    ],
    buttonLink: {
      type: 'secondary',
      label: 'Edit',
      ariaLabel: 'aria button',
      dataName: 'default-button',
      icon: {
        position: 'left',
        type: 'edit'
      },
      onClick: () => console.log('click'),
      customStyle: {
        paddingTop: '12px',
        paddingRight: '24px',
        paddingBottom: '12px',
        paddingLeft: '24px'
      }
    },
    bulletPointMenuButton: {
      buttonAriaLabel: 'aria button',
      menuAriaLabel: 'aria menu',
      buttons: [
        {
          'data-name': 'CP-archive-button',
          label: 'Archive',
          type: 'default',
          onClick: () => console.log('Archive click')
        },
        {
          'data-name': 'CP-delete-button',
          label: 'Delete',
          type: 'dangerous',
          onClick: () => console.log('Delete click')
        }
      ],
      onClick: () => console.log('click')
    },
    'aria-label': "Certification's order"
  }
};
