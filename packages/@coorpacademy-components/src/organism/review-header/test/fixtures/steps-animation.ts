import stepsProps from '../../../../molecule/review-header-steps/test/fixtures/all-questions-ok';
import {HeaderProps} from '../../types';
import {defaultHeaderProps} from './all-questions-ok';

type Fixture = {
  props: HeaderProps;
};

const fixture: Fixture = {
  props: {
    ...defaultHeaderProps,
    steps: stepsProps.props.steps,
    hiddenSteps: true
  }
};

export default fixture;
