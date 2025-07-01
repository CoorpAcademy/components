export default {
  props: {
    id: 'html-title',
    title: 'Programme du certificat <i>Les enjeux du développement durable</i>',
    'data-name': 'list-item-html',
    provider: {
      label: 'Coorpacademy',
      type: 'info'
    },
    subtitle: '15 courses',
    leftIcon: {
      iconName: 'leaf',
      iconColor: '#35CC7F',
      borderRadius: '25%',
      gradientBackground: true,
      preset: 'xl'
    },
    buttonLink: {
      'aria-label': 'View documents',
      type: 'primary',
      customStyle: {
        width: 'fit-content',
        backgroundColor: 'transparent'
      },
      hoverBackgroundColor: '#EAEAEB',
      icon: {
        position: 'left',
        faIcon: {
          name: 'folder',
          color: '#515161',
          size: 16
        }
      },
      onClick: () => console.log('View documents clicked')
    }
  }
};
