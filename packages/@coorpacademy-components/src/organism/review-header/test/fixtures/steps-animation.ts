import stepsProps from '../../../../molecule/review-header-steps/test/fixtures/all-questions-ok';
import {Props} from '../../types';
import {defaultHeaderProps} from './all-questions-ok';

type Fixture = {
  props: Props;
};

const fixture: Fixture = {
  props: {
    ...defaultHeaderProps,
    steps: stepsProps.props.steps,
    hiddenSteps: true
  }
};

export default fixture;
