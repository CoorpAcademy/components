export default {
  props: {
    id: 'default',
    title: 'Leaders of tomorrow',
    type: 'published',
    label: 'Published',
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
    editButtonOnClick: () => console.log('click'),
    bulletPointButtonOnClick: () => console.log('click')
  }
};
