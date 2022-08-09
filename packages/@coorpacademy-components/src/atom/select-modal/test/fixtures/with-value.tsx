import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {select} from './default';

type Fixture = {props: Props};

const items = select.items || [];

const fixture: Fixture = {
  props: {
    questionType: 'template',
    placeholder: 'Feel free to edit',
    analyticsID: 'foo',
    values: items,
    value: items[1].text,
    onChange: noop,
    onBlur: noop,
    onFocus: noop
  }
};

export default fixture;
