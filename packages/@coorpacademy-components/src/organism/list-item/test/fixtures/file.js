export default {
  props: {
    id: 'default',
    title: 'file.zip',
    buttonLink: {
      type: 'secondary',
      ariaLabel: 'aria button',
      dataName: 'default-button',
      icon: {
        position: 'left',
        type: 'close'
      },
      onClick: () => console.log('click')
    }
  }
};
