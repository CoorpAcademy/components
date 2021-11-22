export default {
  props: {
    id: 'default',
    title: 'Leaders of tomorrow',
    type: 'revised',
    label: 'Ongoing changes',
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
    editButtonOnClick: () => console.log('click'),
    bulletPointButtonOnClick: () => console.log('click')
  }
};
