import {Props} from '../../index.native';
import {Choice} from '../../../../types';
import defaultFixture from './default';

type Fixture = {props: Props};

const field1: Choice = {
  _id: '123',
  name: 'inp123456789',
  label: '',
  type: 'text'
};

const field2: Choice = {
  _id: '456',
  type: undefined,
  name: 'sel1',
  label: '',
  items: []
};

const field3 = {...field1, name: undefined};

export const choices = [field1, field2, field3];

const fixture: Fixture = {
  props: {
    ...defaultFixture.props,
    choices
  }
};

export default fixture;
