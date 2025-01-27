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
      'aria-label': 'Edit',
      type: 'primary',
      customStyle: {
        width: 'fit-content',
        backgroundColor: 'transparent'
      },
      hoverBackgroundColor: '#EAEAEB',
      icon: {
        position: 'left',
        faIcon: {
          name: 'edit',
          color: '#515161',
          size: 16
        }
      },
      onClick: () => console.log('click')
    },
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
