const fixture = {
  props: {
    onQuitClick: () => {
      console.log('onQuitClick');
    },
    title: 'Create new skill',
    tag: {
      label: 'Draft',
      type: 'progress',
      size: 'S'
    },
    bulletPointMenuButton: {
      buttons: [
        {
          'data-name': 'delete-button',
          label: 'Delete',
          type: 'default',
          faIcon: 'trash',
          onClick: () => console.log('click Download Report')
        }
      ]
    }
  }
};

export default fixture;
