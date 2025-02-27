const defaultFixture = {
  props: {
    onQuitClick: () => {
      console.log('onQuitClick');
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
          onClick: () => console.log('click Download Report'),
          customStyle: {
            color: '#1D1D2B',
            hoverBackgroundColor: '#EAEAEB'
          },
          isCustomSkillMenu: true
        },
        {
          'data-name': 'archive-button',
          label: 'Archive',
          linkType: 'tertiary',
          icon: {
            position: 'left',
            faIcon: {name: 'folder-open', color: '#515161', size: 14}
          },
          onClick: () => console.log('click Download Report'),
          customStyle: {
            color: '#1D1D2B',
            hoverBackgroundColor: '#EAEAEB'
          },
          isCustomSkillMenu: true
        },
        {
          'data-name': 'delete-button',
          label: 'Delete',
          linkType: 'tertiary',
          icon: {
            position: 'left',
            faIcon: {name: 'trash', color: '#B81400', size: 14}
          },
          onClick: () => console.log('click Download Report'),
          customStyle: {
            color: '#991100',
            hoverBackgroundColor: '#FCDADA'
          },
          isCustomSkillMenu: true
        }
      ]
    },
    saveButton: {
      label: 'Save changes',
      onClick: () => console.log('click Save changes'),
      disabled: true
    },
    publishButton: {
      label: 'Publish changes',
      onClick: () => console.log('click Publish changes'),
      faIconName: 'circle-check'
    }
  }
};

export default defaultFixture;
