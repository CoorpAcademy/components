import {Props} from '../../index.native';
import {createSelectChoice} from '../../../../hoc/modal/select/test/fixtures/default';

type Fixture = {props: Props};

const select = createSelectChoice({name: 'sel456'});
const items = select.items || [];

const fixture: Fixture = {
  props: {
    questionType: 'template',
    placeholder: 'Feel free to edit',
    analyticsID: 'foo',
    values: items,
    value: items[1].text
  }
};

export default fixture;
