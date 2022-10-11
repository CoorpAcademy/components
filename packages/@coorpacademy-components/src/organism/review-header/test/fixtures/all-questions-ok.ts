import stepsProps from '../../../../molecule/review-header-steps/test/fixtures/all-questions-ok';
import {Props} from '../../types';

type Fixture = {
  props: Props;
};

export const defaultHeaderProps = {
  mode: 'Revision mode',
  skillName: 'Agility',
  onQuitClick: () => {
    console.log('onQuitClick');
  },
  'aria-label': 'aria-header-wrapper',
  closeButtonAriaLabel: 'aria-close-button',
  hiddenSteps: false
};

const fixture: Fixture = {
  props: {
    ...defaultHeaderProps,
    steps: stepsProps.props.steps
  }
};

export default fixture;