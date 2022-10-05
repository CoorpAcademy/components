import onboarding from '../../onboarding/test/fixtures/default';
import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
};

const fixture: Fixture = {
  props: {
    onboarding: onboarding.props,
    viewName: 'onboarding'
  }
};

export default fixture;
