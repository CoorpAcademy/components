const singleActionFixture = {
  props: {
    onClose: () => {
      console.log('Close');
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
    actionButtons: [
      {type: 'archive', label: 'Archive', onClick: () => console.log('click on Archive')}
    ]
  }
};

export default singleActionFixture;
