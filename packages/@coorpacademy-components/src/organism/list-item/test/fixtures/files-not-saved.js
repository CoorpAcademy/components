export default {
  props: {
    id: 'default',
    status: 'saved',
    title: 'Leaders of tomorrow',
    dataColumns: [
      {label: '24/10/2022', className: 'cell'},
      {label: '231 files', className: 'cell'},
      {label: '2 files not saved', type: 'progress', className: 'cell'}
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
      }
    },
    bulletPointMenuButton: {
      buttonAriaLabel: 'aria button',
      menuAriaLabel: 'aria menu',
      buttons: [
        {
          'data-name': 'CP-archive-button',
          label: 'Download report',
          type: 'defaultLeft',
          onClick: () => console.log('click')
        },
        {
          'data-name': 'CP-archive-button',
          label: 'Download files',
          type: 'defaultLeft',
          onClick: () => console.log('click')
        }
      ],
      isBulkMenu: true,
      onClick: () => console.log('click')
    },
    isBulkStyle: true,
    'aria-label': "Certification's order"
  }
};
