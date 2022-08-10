import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {Choice} from '../../../../../../types/progression-engine.d';

type Fixture = {props: Props};

const field1: Choice = {
  _id: '123',
  name: 'inp1',
  label: '',
  type: 'text'
};

const field2: Choice = {
  _id: '456',
  type: 'select',
  name: 'sel1',
  label: '',
  items: [
    {
      _id: '1',
      text: 'Play Store',
      value: 'play_store'
    },
    {
      _id: '2',
      text: 'App Store',
      value: 'app_store'
    },
    {
      _id: '3',
      text: 'Apple Store',
      value: 'apple_store'
    },
    {
      _id: '4',
      text: 'Pineapple Store',
      value: 'pineapple_store'
    }
  ]
};

const field3 = {...field1, name: 'inp2'};
const field4 = {...field2, name: 'sel2'};

export const template =
  'My app {{inp1}}<br><s> NOT on</s> {{sel1}}, <br/>but {{inp2}} <br /><i>is on</i> {{sel2}}';
export const items = [field1, field2, field3, field4];
export const userChoices = [
  '',
  '',
  'Waze',
  (field4.items && field4.items[1] && field4.items[1].text) || ''
];

const fixture: Fixture = {
  props: {
    template,
    items,
    userChoices,
    onInputChange: noop,
    handleFocus: (id: string) => noop,
    handleBlur: noop,
    focusedSelectId: null
  }
};

export default fixture;
