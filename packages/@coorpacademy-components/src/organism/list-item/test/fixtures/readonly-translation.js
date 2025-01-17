export default {
  props: {
    id: 'default',
    title: '🇫🇷 French',
    buttonLink: {
      type: 'primary',
      customStyle: {
        width: 'fit-content',
        backgroundColor: '#EAEAEB'
      },
      icon: {
        position: 'left',
        faIcon: {
          name: 'eye',
          color: '#515161',
          size: 16
        }
      },
      onClick: () => console.log('click')
    }
  }
};
