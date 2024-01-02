export default {
  props: {
    mainText: 'Your file is uploading...',
    subText:
      'Continue working (or go for a coffee) while your files are being uploading, you will be notified when it is over',
    progression: 0,
    firstButtonLink: {
      type: 'secondary',
      label: 'Create new import',
      ariaLabel: 'aria button',
      dataName: 'default-button',
      onClick: () => console.log('click')
    },
    secondButtonLink: {
      type: 'primary',
      label: 'Go to dashboard',
      ariaLabel: 'aria button',
      dataName: 'default-button',
      onClick: () => console.log('click')
    }
  }
};
