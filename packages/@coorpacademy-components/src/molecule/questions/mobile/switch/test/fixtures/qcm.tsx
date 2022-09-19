import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {Choice} from '../../../../types';

export const choices: Choice[] = [
  {
    _id: '1',
    label: 'Play Store',
    value: 'play_store'
  },
  {
    _id: '2',
    label: 'App Store',
    value: 'app_store'
  },
  {
    _id: '3',
    label: 'Apple Store',
    value: 'apple_store'
  },
  {
    _id: '4',
    label: 'Pineapple Store',
    value: 'pineapple_store'
  },
  {
    _id: '6666',
    label:
      'Hodor hodor. Hodor? Hodor hodor. Hodor? Hodor, hodor. Hodor. Hodor. Hodor? Hodor? Hodor, hodor. Hodor. Hodor. Hodor hodor HODOR! Hodor. Hodor! Hodor hodor. Hodor? Hodor hodor! Hodor... Hodor hodor. Hodor, hodor. Hodor. Hodor hodor. Hodor? Hodor! Hodor hodor',
    value: 'hodorHodr'
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
