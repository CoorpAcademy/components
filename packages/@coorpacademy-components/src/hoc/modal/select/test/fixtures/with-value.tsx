import {Props} from '../../index.native';
import {items} from '../../../../../atom/select-modal/test/fixtures/default';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    values: items,
    value: items[1].text,
    onChange: () => null
  }
};

export default fixture;
