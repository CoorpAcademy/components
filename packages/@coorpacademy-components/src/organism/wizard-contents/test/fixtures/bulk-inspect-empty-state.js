export default {
  props: {
    isLoading: false,
    wizardHeader: {
      title: 'Inspect import',
      onClick: () => console.log('Close')
    },
    actions: {
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
            'data-name': 'CP-delete-button',
            label: 'Download files',
            type: 'default',
            onClick: () => console.log('click')
          }
        ],
        onClick: () => console.log('click')
      },
      firstButtonLink: {
        type: 'secondary',
        label: 'Delete import',
        'aria-label': 'aria button',
        'data-name': 'default-button',
        icon: {
          position: 'left',
          type: 'bin'
        },
        onClick: () => console.log('click')
      },
      secondButtonLink: {
        type: 'primary',
        label: 'Save import',
        'aria-label': 'aria button',
        'data-name': 'default-button',
        icon: {
          position: 'left',
          type: 'save'
        },
        onClick: () => console.log('click')
      }
    },
    tabs: [
      {
        title: 'Success',
        href: '',
        status: '0',
        selected: true
      },
      {
        title: 'Failed',
        href: '',
        status: '56',
        selected: false
      }
    ],
    content: {
      type: 'expandible-table',
      columns: [],
      emptyStateFistMessage: "There's nothing here",
      emptyStateSecondMessage: 'No content tagged as success'
    }
  }
};
