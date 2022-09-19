import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {Choice} from '../../../../molecule/questions/types';

export const select: Choice = {
  _id: '456',
  type: 'select',
  name: 'sel456',
  label: '',
  items: [
    {
      _id: '1',
      text: 'Play Store',
      selected: false
    },
    {
      _id: '2',
      text: 'App Store',
      selected: false
    },
    {
      _id: '3',
      text: 'Apple Store',
      selected: false
    },
    {
      _id: '4',
      text: 'Pineapple Store',
      selected: false
    }
  ]
};

type Fixture = {props: Props};

const items = select.items || [];

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
