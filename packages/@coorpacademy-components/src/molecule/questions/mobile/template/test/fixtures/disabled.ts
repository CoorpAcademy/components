import {Props} from '../../index.native';
import defaultFixture from './default';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    ...defaultFixture.props,
    isDisabled: true
  }
};

export default fixture;
