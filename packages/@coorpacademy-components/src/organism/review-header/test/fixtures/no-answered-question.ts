import stepsProps from '../../../../molecule/review-header-steps/test/fixtures/no-answered-question';
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
