export default {
  props: {
    id: 'default',
    title: 'Leaders of tomorrow',
    provider: 'Coorpacademy',
    subtitle: '23 courses',
    tags: [
      {
        label: 'Archived',
        type: 'warning'
      }
    ],
    leftIcon: {
      iconName: 'bullseye-pointer',
      iconColor: '#35CC7F',
      borderRadius: '25%',
      gradientBackground: true,
      preset: 'xl'
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
    editAsIcon: true,
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
    }
  }
};
