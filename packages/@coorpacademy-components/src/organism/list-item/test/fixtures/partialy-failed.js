export default {
  props: {
    id: 'default',
    status: 'saved',
    data: {
      title: 'Leaders of tomorrow',
      dataColumns: [
        {label: '24/10/2022', className: 'cell'},
        {label: '56 files', className: 'cell'},
        {label: '2 files failed', type: 'warning', className: 'cell'}
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
              label: 'Download files',
              type: 'default',
              onClick: () => console.log('click')
            },
            {
              'data-name': 'CP-delete-button',
              label: 'Delete import',
              type: 'dangerous',
              onClick: () => console.log('click')
            }
          ],
          onClick: () => console.log('click')
        }
      }
    },
    'aria-label': "Certification's order"
  }
};
