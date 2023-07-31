export default {
  props: {
    id: 'default',
    status: 'saved',
    data: {
      title: 'Leaders of tomorrow',
      dataColumns: [
        {label: '24/10/2022', className: 'cell'},
        {label: '-', className: 'cell'},
        {label: 'Upload In Progress', type: 'progress', className: 'cell'}
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
          onClick: () => console.log('click'),
          disabled: true
        },
        bulletPointMenuButton: {
          buttonAriaLabel: 'aria button',
          menuAriaLabel: 'aria menu',
          disabled: true,
          buttons: [
            {
              'data-name': 'CP-archive-button',
              label: 'Archive',
              type: 'default',
              onClick: () => console.log('click')
            },
            {
              'data-name': 'CP-delete-button',
              label: 'Delete',
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
