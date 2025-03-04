const defaultFixture = {
  props: {
    onClose: () => {
      console.log('Close');
    },
    title: 'Large Language Models',
    tag: {
      label: 'Ongoing changes',
      type: 'progress',
      size: 'S'
    },
    saveStatus: {
      label: 'Saved',
      display: true
    },
    bulletPointMenuButton: {
      buttons: [
        {
          'data-name': 'discard-button',
          label: 'Discard changes',
          linkType: 'tertiary',
          icon: {
            position: 'left',
            faIcon: {name: 'circle-xmark', color: '#515161', size: 14}
          },
          onClick: () => console.log('click on Discard changes'),
          customStyle: {
            color: '#1D1D2B',
            hoverBackgroundColor: '#EAEAEB',
            padding: '6px'
          }
        },
        {
          'data-name': 'archive-button',
          label: 'Archive',
          linkType: 'tertiary',
          icon: {
            position: 'left',
            faIcon: {name: 'folder-open', color: '#515161', size: 14}
          },
          onClick: () => console.log('click on Archive'),
          customStyle: {
            color: '#1D1D2B',
            hoverBackgroundColor: '#EAEAEB',
            padding: '6px'
          }
        },
        {
          'data-name': 'delete-button',
          label: 'Delete',
          linkType: 'tertiary',
          icon: {
            position: 'left',
            faIcon: {name: 'trash', color: '#B81400', size: 14}
          },
          onClick: () => console.log('click on Delete'),
          customStyle: {
            color: '#991100',
            hoverBackgroundColor: '#FCDADA',
            padding: '6px'
          }
        }
      ],
      onClick: () => console.log('click on bullet point menu')
    },
    actionButtons: [
      {
        label: 'Save changes',
        type: 'save',
        onClick: () => console.log('click Save changes'),
        disabled: true
      },
      {
        label: 'Publish changes',
        type: 'publish',
        onClick: () => console.log('click Publish changes')
      }
    ]
  }
};

export default defaultFixture;
