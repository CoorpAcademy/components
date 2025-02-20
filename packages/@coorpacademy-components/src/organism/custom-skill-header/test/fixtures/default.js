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
    }
  }
};

export default fixture;
