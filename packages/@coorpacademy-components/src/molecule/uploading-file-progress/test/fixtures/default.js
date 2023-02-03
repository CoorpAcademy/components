export default {
  props: {
    mainText: 'Upload in Progress ...',
    subText:
      'continue working (or go for a coffee) while your files are being uploading, you will be notified when it is over. ',
    progressionValue: 3,
    leftButtonLink: {
      type: 'secondary',
      label: 'Create New Import',
      ariaLabel: 'Create New Import',
      dataName: 'default-button',
      onClick: () => console.log('click')
    },
    rightButtonLink: {
      type: 'primary',
      label: 'Go to Dashboard',
      ariaLabel: 'Go to Dashboard',
      dataName: 'default-button',
      onClick: () => console.log('click')
    }
  }
};
