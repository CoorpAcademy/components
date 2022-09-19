import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {Choice} from '../../../../types';

type Fixture = {props: Props};

const choices: Choice[] = [
  {
    _id: '1',
    label: 'Play Store',
    value: undefined
  },
  {
    _id: '2',
    label: 'App Store',
    value: undefined
  }
];

const userChoices = choices.slice(0, 2).map(item => item.label);

const fixture: Fixture = {
  props: {
    choices,
    userChoices,
    onPress: noop
  }
};

export default fixture;
