import React from 'react';
import {Text} from 'react-native';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    testID: 'basic-text',
    children: <Text>Basic text</Text>,
    accessibilityLabel: 'basic-text'
  }
};

export default fixture;
