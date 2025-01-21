export default {
  props: {
    id: 'default',
    title: '🇫🇷 French',
    buttonLink: {
      'aria-label': 'Edit',
      type: 'primary',
      customStyle: {
        width: 'fit-content',
        backgroundColor: 'transparent'
      },
      hoverBackgroundColor: "#EAEAEB",
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
    secondButtonLink: {
      'aria-label': 'Delete',
      type: 'primary',
      customStyle: {
        width: 'fit-content',
        backgroundColor: 'transparent'
      },
      hoverBackgroundColor: "#EAEAEB",
      icon: {
        position: 'left',
        faIcon: {
          name: 'trash',
          color: '#515161',
          size: 16
        }
      },
      onClick: () => console.log('click')
    }
  }
};
