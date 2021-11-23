export default {
  props: {
    id: 'default',
    title: 'Leaders of tomorrow',
    tags: [
      {
        label: 'Published',
        type: 'published'
      }
    ],
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
    bulletPointButtonOnClick: () => console.log('click')
  }
};
