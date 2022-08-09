import {select} from '../../../../../atom/select-modal/test/fixtures/default';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    values: select.items || [],
    onChange: () => null
  }
};

export default fixture;
