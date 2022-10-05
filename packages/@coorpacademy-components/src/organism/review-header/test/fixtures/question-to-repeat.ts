import stepsProps from '../../../../molecule/review-header-steps/test/fixtures/question-to-repeat';
import {Props} from '../../types';
import {defaultHeaderProps} from './all-questions-ok';

type Fixture = {
  props: Props;
};

const fixture: Fixture = {
  props: {
    ...defaultHeaderProps,
    steps: stepsProps.props.steps
  }
};

export default fixture;
