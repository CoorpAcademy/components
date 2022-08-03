import {Props} from '../../index.native';
import {createSelectChoice} from './default';

type Fixture = {props: Props};

const select = createSelectChoice({name: 'sel456'});

const fixture: Fixture = {
  props: {
    value: select.items && select.items[1] && select.items[1].text,
    values: select.items || []
  }
};

export default fixture;
