import stepsProps from '../../../../molecule/review-header-steps/test/fixtures/all-questions-ok';

export const defaultHeaderProps = {
  mode: 'Revision mode',
  skillName: 'Agility',
  onQuitClick: () => {
    console.log('onQuitClick');
  },
  'aria-label': 'aria-header-wrapper',
  closeButtonAriaLabel: 'aria-close-button'
};

export default {
  props: {
    ...defaultHeaderProps,
    steps: stepsProps.props.steps
  }
};
