export default {
  props: {
    id: 'default',
    title: '🇫🇷 French',
    buttonLink: {
      type: 'primary',
      customStyle: {
        width: 'fit-content',
        backgroundColor: 'transparent'
      },
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
      type: 'primary',
      customStyle: {
        width: 'fit-content',
        backgroundColor: 'transparent'
      },
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
