import {OnboardingProps} from '../../prop-types';
import {defaultProps} from './default';

type Fixture = {
  props: OnboardingProps;
};

const fixture: Fixture = {
  props: {
    ...defaultProps,
    onPress: () => null
  }
};

export default fixture;
