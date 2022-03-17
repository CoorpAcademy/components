import stepsProps from '../../../../molecule/review-header-steps/test/fixtures/first-question-current-right';
import {defaultHeaderProps} from './all-questions-ok';

export default {
  props: {
    ...defaultHeaderProps,
    steps: stepsProps.props.steps
  }
};
