import stepsProps from '../../../../molecule/review-header-steps/test/fixtures/current-question-wrong';
import {defaultHeaderProps} from './all-questions-ok';

export default {
  props: {
    ...defaultHeaderProps,
    steps: stepsProps.props.steps
  }
};
