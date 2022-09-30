import {items} from '../../../../../atom/select-modal/test/fixtures/default';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    values: items,
    onChange: () => null
  }
};

export default fixture;
