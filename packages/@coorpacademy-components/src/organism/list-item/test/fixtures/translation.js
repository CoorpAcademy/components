export default {
  props: {
    id: 'default',
    title: '🇫🇷 French',
    buttonLink: {
      type: 'secondary',
      label: 'Edit',
      ariaLabel: 'aria button',
      dataName: 'default-button',
      icon: {
        position: 'left',
        type: 'edit'
      },
      onClick: () => console.log('click')
    },
    editAsIcon: true,
    secondButtonLink: {
      type: 'secondary',
      label: 'Delete',
      ariaLabel: 'aria button',
      dataName: 'default-button',
      icon: {
        position: 'left',
        type: 'trash'
      },
      onClick: () => console.log('click')
    },
    deleteAsIcon: true
  }
};
