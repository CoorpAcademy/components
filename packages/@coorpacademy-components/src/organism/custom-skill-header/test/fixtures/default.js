import menuWithIconFixture from '../../../../atom/button-menu/test/fixtures/menu-with-icon';

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
      buttons: menuWithIconFixture.props.buttons
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
