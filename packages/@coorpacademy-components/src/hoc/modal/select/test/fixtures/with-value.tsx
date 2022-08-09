import {Props} from '../../index.native';
import {select} from '../../../../../atom/select-modal/test/fixtures/default';

type Fixture = {props: Props};

const values = select.items || [];

const fixture: Fixture = {
  props: {
    values,
    value: values[1].text,
    onChange: () => null
  }
};

export default fixture;
