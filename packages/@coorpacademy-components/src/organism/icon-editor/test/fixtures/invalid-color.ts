export default {
  props: {
    iconPreview: {
      title: 'Cloud computing technology',
      icon: {color: '#invalid-color', name: 'globe-pointer'}
    },
    inputText: {
      description: '',
      handleChange: () => console.log('change'),
      value: '#invalid-color'
    },
    buttonLink: {
      type: 'secondary',
      label: 'Change icon',
      ariaLabel: 'aria button',
      dataName: 'default-button',
      icon: {
        position: 'left',
        faIcon: {
          name: 'arrows-rotate',
          size: 16
        }
      },
      onClick: () => console.log('click'),
      customStyle: {
        paddingTop: '12px',
        paddingRight: '24px',
        paddingBottom: '12px',
        paddingLeft: '24px'
      }
    }
  }
};
