export default {
  props: {
    id: 'default',
    status: 'saved',
    data: {
      title: 'Leaders of tomorrow',
      dataColumns: [
        {label: '24/10/2022', className: 'cell'},
        {label: '231 files', className: 'cell'},
        {label: '2 files not saved', type: 'progress', className: 'cell'}
      ]
    },
    settings: {
      buttonLinks: {
        buttonLink: {
          type: 'secondary',
          label: 'Inspect',
          ariaLabel: 'aria button',
          dataName: 'default-button',
          icon: {
            position: 'left',
            type: 'see'
          },
          onClick: () => console.log('click')
        },
        bulletPointMenuButton: {
          buttonAriaLabel: 'aria button',
          menuAriaLabel: 'aria menu',
          buttons: [
            {
              'data-name': 'CP-archive-button',
              label: 'Download report',
              type: 'default',
              onClick: () => console.log('click')
            },
            {
              'data-name': 'CP-archive-button',
              label: 'Download files',
              type: 'default',
              onClick: () => console.log('click')
            }
          ],
          isBulkMenu: true,
          onClick: () => console.log('click')
        }
      }
    },
    isBulkStyle: true,
    'aria-label': "Certification's order"
  }
};
