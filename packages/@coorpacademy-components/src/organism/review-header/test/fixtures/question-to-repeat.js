import stepsProps from '../../../../molecule/review-header-steps/test/fixtures/question-to-repeat';
import {defaultHeaderProps} from './all-questions-ok';

export default {
  props: {
    ...defaultHeaderProps,
    steps: stepsProps.props.steps
  }
};
