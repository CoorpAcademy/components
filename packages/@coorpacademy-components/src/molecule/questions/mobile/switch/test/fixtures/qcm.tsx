import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {SelectableChoice} from '../../../../types';

export const choices: SelectableChoice[] = [
  {
    _id: '1',
    label: 'Play Store',
    selected: false,
    onPress: () => null
  },
  {
    _id: '2',
    label: 'App Store',
    selected: false,
    onPress: () => null
  },
  {
    _id: '3',
    label: 'Apple Store',
    selected: false,
    onPress: () => null
  },
  {
    _id: '4',
    label: 'Pineapple Store',
    selected: false,
    onPress: () => null
  },
  {
    _id: '6666',
    label:
      'Hodor hodor. Hodor? Hodor hodor. Hodor? Hodor, hodor. Hodor. Hodor. Hodor? Hodor? Hodor, hodor. Hodor. Hodor. Hodor hodor HODOR! Hodor. Hodor! Hodor hodor. Hodor? Hodor hodor! Hodor... Hodor hodor. Hodor, hodor. Hodor. Hodor hodor. Hodor? Hodor! Hodor hodor',
    selected: false,
    onPress: () => null
  }
];

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    type: 'qcm',
    choices,
    onItemPress: noop
  }
};

export default fixture;
