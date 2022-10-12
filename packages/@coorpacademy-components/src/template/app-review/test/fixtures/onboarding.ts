import onboarding from '../../onboarding/test/fixtures/default';
import {AppReviewProps} from '../../prop-types';

type Fixture = {
  props: AppReviewProps;
};

const fixture: Fixture = {
  props: {
    onboarding: onboarding.props,
    viewName: 'onboarding'
  }
};

export default fixture;
