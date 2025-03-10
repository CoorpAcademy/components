export default {
  props: {
    id: 'default',
    title: 'Ensuring team cohesion and well-being',
    subtitle: 'Coorpacademy',
    image:
      'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
    tags: [
      {
        label: 'Course',
        type: 'default',
        icon: {
          iconName: 'book-open',
          preset: 's',
          customStyle: {
            padding: 0
          },
          position: 'left'
        }
      }
    ],
    buttonLink: {
      'aria-label': 'Delete',
      type: 'primary',
      customStyle: {
        width: 'fit-content',
        backgroundColor: 'transparent'
      },
      hoverBackgroundColor: '#EAEAEB',
      icon: {
        position: 'left',
        faIcon: {
          name: 'trash',
          color: '#515161',
          size: 16
        }
      },
      onClick: () => console.log('click')
    },
    selected: true,
    checkable: true
  }
};
