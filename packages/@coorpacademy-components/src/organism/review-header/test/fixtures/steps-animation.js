import stepsProps from '../../../../molecule/review-header-steps/test/fixtures/all-questions-ok';
import {defaultHeaderProps} from './all-questions-ok';

export default {
  props: {
    ...defaultHeaderProps,
    steps: stepsProps.props.steps,
    hiddenSteps: true
  }
};
