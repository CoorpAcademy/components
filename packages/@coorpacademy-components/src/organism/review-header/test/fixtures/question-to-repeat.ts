import stepsProps from '../../../../molecule/review-header-steps/test/fixtures/question-to-repeat';
import {HeaderProps} from '../../types';
import {defaultHeaderProps} from './all-questions-ok';

type Fixture = {
  props: HeaderProps;
};

const fixture: Fixture = {
  props: {
    ...defaultHeaderProps,
    steps: stepsProps.props.steps
  }
};

export default fixture;
