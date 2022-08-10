import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {select} from './default';

type Fixture = {props: Props};

const items = select.items || [];

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
