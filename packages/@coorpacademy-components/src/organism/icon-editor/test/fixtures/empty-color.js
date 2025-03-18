export default {
  props: {
    iconColor: '',
    iconName: 'globe-pointer',
    title: 'Cloud computing technology',
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
    },
    handleChange: () => console.log('change')
  }
};
