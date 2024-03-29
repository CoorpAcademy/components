export default {
  props: {
    id: 'default',
    status: 'saved',
    title: 'Leaders of tomorrow',
    dataColumns: [
      {label: '24/10/2022', className: 'cell'},
      {label: '-', className: 'cell'},
      {label: 'Upload In Progress', type: 'progress', className: 'cell'}
    ],
    buttonLink: {
      type: 'secondary',
      label: 'Inspect',
      ariaLabel: 'aria button',
      dataName: 'default-button',
      icon: {
        position: 'left',
        type: 'see'
      },
      onClick: () => console.log('click'),
      customStyle: {
        paddingTop: '12px',
        paddingRight: '24px',
        paddingBottom: '12px',
        paddingLeft: '24px'
      },
      disabled: true
    },
    bulletPointMenuButton: {
      buttonAriaLabel: 'aria button',
      menuAriaLabel: 'aria menu',
      disabled: true,
      buttons: [],
      onClick: () => console.log('click')
    },
    isBulkStyle: true,
    'aria-label': "Certification's order"
  }
};
