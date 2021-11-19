export default {
  props: {
    id: 'default',
    title: 'Leaders of tomorrow',
    type: 'revision',
    label: 'Draft',
    buttons: [
      {
        'data-name': 'CP-publish-button',
        label: 'Publish',
        type: 'default'
      },
      {
        'data-name': 'CP-delete-button',
        label: 'Delete',
        type: 'dangerous'
      }
    ],
    editButtonOnClick: () => console.log('click'),
    bulletPointButtonOnClick: () => console.log('click')
  }
};
