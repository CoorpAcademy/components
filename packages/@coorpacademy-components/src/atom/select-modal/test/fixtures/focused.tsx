import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {items} from './default';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    questionType: 'template',
    analyticsID: 'foo',
    values: items,
    isFocused: true,
    onChange: noop,
    onBlur: noop,
    onFocus: noop
  }
};

export default fixture;
