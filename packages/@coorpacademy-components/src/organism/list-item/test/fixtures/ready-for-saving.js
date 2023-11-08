export default {
  props: {
    id: 'default',
    status: 'saved',
    title: 'Leaders of tomorrow',
    dataColumns: [
      {label: '24/10/2022', className: 'cell'},
      {label: '56 files', className: 'cell'},
      {label: 'Ready for Saving', type: 'success', className: 'cell'}
    ],

    buttonLink: {
      type: 'primary',
      label: 'Save import',
      ariaLabel: 'aria button',
      dataName: 'default-button',
      icon: {
        position: 'left',
        type: 'save'
      },
      onClick: () => console.log('click'),
      customStyle: {
        paddingTop: '12px',
        paddingRight: '24px',
        paddingBottom: '12px',
        paddingLeft: '24px'
      }
    },
    secondButtonLink: {
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
          label: 'Download files',
          type: 'defaultLeft',
          onClick: () => console.log('click')
        },
        {
          'data-name': 'CP-delete-button',
          label: 'Delete import',
          type: 'dangerousLeft',
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
