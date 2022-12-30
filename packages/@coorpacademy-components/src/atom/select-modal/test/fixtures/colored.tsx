import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {items} from './default';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    questionType: 'template',
    placeholder: 'Feel free to edit',
    analyticsID: 'foo',
    values: items,
    onChange: noop,
    onBlur: noop,
    onFocus: noop
  }
};

export default fixture;
