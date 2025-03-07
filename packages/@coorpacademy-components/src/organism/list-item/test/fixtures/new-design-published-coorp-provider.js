export default {
  props: {
    id: 'default',
    title: 'Leaders of tomorrow',
    provider: {
      label: 'Coorpacademy',
      type: 'info'
    },
    subtitle: '23 courses',
    tags: [
      {
        label: 'Published',
        type: 'success'
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
      'aria-label': 'See details',
      type: 'primary',
      customStyle: {
        width: 'fit-content',
        backgroundColor: 'transparent'
      },
      hoverBackgroundColor: '#EAEAEB',
      icon: {
        position: 'left',
        faIcon: {
          name: 'eye',
          color: '#515161',
          size: 16
        }
      },
      onClick: () => console.log('click')
    },
    bulletPointMenuButton: {
      buttonAriaLabel: 'More',
      menuAriaLabel: 'aria menu',
      buttons: [
        {
          'data-name': 'custom-skill-archive-button',
          label: 'Archive',
          type: 'default',
          onClick: () => console.log('click')
        },
        {
          'data-name': 'custom-skill-delete-button',
          label: 'Delete',
          type: 'dangerous',
          onClick: () => console.log('click')
        }
      ],
      onClick: () => console.log('click')
    }
  }
};
