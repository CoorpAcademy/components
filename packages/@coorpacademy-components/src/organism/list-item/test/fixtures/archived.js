export default {
  props: {
    id: 'default',
    data: {
      title: 'Leaders of tomorrow'
    },
    settings: {
      tags: [
        {
          label: 'Archived',
          type: 'warning'
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
