const archiveFixture = {
  props: {
    onQuitClick: () => {
      console.log('onQuitClick');
    },
    title: 'Conflict Management',
    tag: {
      label: 'Published',
      type: 'success',
      size: 'S'
    },
    saveStatus: {
      display: false
    },
    archiveButton: {
      label: 'Archive',
      onClick: () => console.log('click Archive')
    }
  }
};

export default archiveFixture;
