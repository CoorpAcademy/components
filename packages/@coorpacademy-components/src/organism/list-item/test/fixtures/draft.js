export default {
  props: {
    id: 'default',
    data: {
      title: 'Leaders of tomorrow'
    },
    settings: {
      tags: [
        {
          label: 'Draft',
          type: 'progress'
        }
      ],
      buttonLinks: {
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
        bulletPointMenuButton: {
          buttonAriaLabel: 'aria button',
          menuAriaLabel: 'aria menu',
          buttons: [
            {
              'data-name': 'CP-publish-button',
              label: 'Publish',
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
    }
  }
};
