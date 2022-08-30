import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {items, template, userChoices} from '../../../template/test/fixtures/default';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    type: 'template',
    items,
    template,
    onInputValueChange: noop,
    userChoices,
    onItemInputChange: noop,
    focusedSelectId: 'foo',
    handleBlur: noop,
    handleFocus: () => noop
  }
};

export default fixture;
