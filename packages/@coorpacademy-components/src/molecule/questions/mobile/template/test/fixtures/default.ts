import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {Choice, TemplateListOfChoices, TemplateTextChoice} from '../../../../types';

type Fixture = {props: Props};

const field1: TemplateTextChoice = {
  _id: '123',
  name: 'inp1',
  label: '',
  type: 'text',
  value: '',
  selected: false
};

const field2: TemplateListOfChoices = {
  _id: '456',
  type: 'select',
  name: 'sel1',
  label: '',
  value: 'App Store',
  items: [
    {
      _id: '1',
      text: 'Play Store',
      selected: false
    },
    {
      _id: '2',
      text: 'App Store',
      selected: true
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

const field3 = {...field1, name: 'inp2'};
const field4 = {...field2, name: 'sel2'};

export const template =
  'My app {{inp1}}<br><s> NOT on</s> {{sel1}}, <br/>but {{inp2}} <br /><i>is on</i> {{sel2}}';

export const choices = [field1, field2, field3, field4];

const fixture: Fixture = {
  props: {
    template,
    choices,
    onInputChange: noop,
    handleFocus: (id: string) => noop,
    handleBlur: noop,
    focusedSelectId: null
  }
};

export default fixture;
