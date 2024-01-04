import progress from './progress';

export default {
  props: {
    ...progress.props,
    mainText: 'Your file is uploaded',
    subText: 'You can now go to inspect your import',
    progression: 100,
    secondButtonLink: {
      type: 'primary',
      label: 'Go to inspect',
      ariaLabel: 'aria button',
      dataName: 'default-button',
      onClick: () => console.log('click')
    }
  }
};
