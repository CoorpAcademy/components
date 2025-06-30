export default {
  props: {
    id: 'complex-html-title',
    title:
      'Programme du certificat <i>Diversité et inclusion au travail</i> - <strong>Module 2</strong>',
    'data-name': 'list-item-complex-html',
    provider: {
      label: 'External Provider',
      type: 'warning'
    },
    subtitle: '8 courses • 2h30min',
    dataColumns: [
      {
        label: '85%',
        className: 'cell'
      },
      {
        label: 'In Progress',
        type: 'progress',
        className: 'cell'
      }
    ],
    tags: [
      {
        label: 'Mandatory',
        type: 'failure'
      }
    ],
    leftIcon: {
      iconName: 'users',
      iconColor: '#FF541F',
      borderRadius: '25%',
      gradientBackground: true,
      preset: 'xl'
    },
    buttonLink: {
      'aria-label': 'Continue learning',
      label: 'Continue',
      type: 'primary',
      onClick: () => console.log('Continue learning clicked')
    },
    bulletPointMenuButton: {
      buttonAriaLabel: 'More options',
      menuAriaLabel: 'Menu options',
      buttons: [
        {
          'data-name': 'restart-button',
          icon: {
            position: 'left',
            faIcon: {
              name: 'rotate-right',
              color: '#515161',
              size: 14,
              customStyle: {padding: 0}
            }
          },
          label: 'Restart',
          type: 'default',
          onClick: () => console.log('Restart clicked')
        },
        {
          'data-name': 'download-certificate',
          icon: {
            position: 'left',
            faIcon: {
              name: 'download',
              color: '#515161',
              size: 14,
              customStyle: {padding: 0}
            }
          },
          label: 'Download Certificate',
          type: 'default',
          onClick: () => console.log('Download certificate clicked')
        }
      ],
      onClick: () => console.log('Menu clicked')
    }
  }
};
