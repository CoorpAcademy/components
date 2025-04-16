export default {
  props: {
    iconPreview: {
      title: 'Cloud computing technology',
      icon: {color: '#0042AD', name: 'globe-pointer'}
    },
    inputText: {
      description: 'Use darker colors (e.g., #0042AD) to ensure better contrast and visibility.',
      handleChange: (value: string) => console.log(`Change color: ${value}`),
      value: '#0042AD'
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
