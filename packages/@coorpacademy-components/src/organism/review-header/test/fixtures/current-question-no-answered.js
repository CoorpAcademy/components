import stepsProps from '../../../../molecule/review-header-steps/test/fixtures/current-question-no-aswered';
import {defaultHeaderProps} from './all-questions-ok';

export default {
  props: {
    ...defaultHeaderProps,
    steps: stepsProps.props.steps,
    mode: 'Another mode',
    skillName: 'This client usually uses long skill titles'
  }
};
