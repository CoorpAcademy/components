import {Props} from '../../../select-modal/index.native';
import {createSelectChoice} from '../../../../hoc/modal/select/test/fixtures/default';

type Fixture = {props: Props};

const select = createSelectChoice({name: 'sel456'});
const items = select.items || [];

const fixture: Fixture = {
  props: {
    questionType: 'template',
    analyticsID: 'foo',
    values: items,
    isDisabled: true
  }
};

export default fixture;
