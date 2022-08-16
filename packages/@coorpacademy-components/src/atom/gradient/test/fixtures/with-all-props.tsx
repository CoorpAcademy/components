import React from 'react';
import {Text} from 'react-native';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    colors: ['#fff', '#f0f'],
    children: <Text>dummy gradient child</Text>,
    transparencyPosition: 'bottom',
    height: 30,
    testID: 'gradient-test-id',
    pointerEvents: 'none',
    style: {flex: 1}
  }
};

export default fixture;
