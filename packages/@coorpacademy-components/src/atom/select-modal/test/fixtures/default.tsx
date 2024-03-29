import noop from 'lodash/fp/noop';
import {ChoiceItem, Props} from '../../index.native';

export const items: ChoiceItem[] = [
  {
    _id: '1',
    text: 'Play Store',
    value: 'Play Store',
    selected: true
  },
  {
    _id: '2',
    text: 'App Store',
    value: 'App Store',
    selected: false
  },
  {
    _id: '3',
    text: 'Apple Store',
    value: 'Apple Store',
    selected: false
  },
  {
    _id: '4',
    text: 'Pineapple Store',
    value: 'Pineapple Store',
    selected: false
  }
];

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    questionType: 'template',
    analyticsID: 'foo',
    values: items,
    onChange: noop,
    onBlur: noop,
    onFocus: noop
  }
};

export default fixture;
