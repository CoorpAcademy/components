import stepsProps from '../../../../molecule/review-header-steps/test/fixtures/current-question-no-aswered';
import {Props} from '../../types';
import {defaultHeaderProps} from './all-questions-ok';

type Fixture = {
  props: Props;
};

const fixture: Fixture = {
  props: {
    ...defaultHeaderProps,
    steps: stepsProps.props.steps,
    mode: 'Another mode',
    skillName: 'This client usually uses long skill titles'
  }
};

export default fixture;
