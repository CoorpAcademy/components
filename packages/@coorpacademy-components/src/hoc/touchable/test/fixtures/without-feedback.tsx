import React from 'react';
import {Text} from 'react-native';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    analyticsID: 'fake-touchable',
    isWithoutFeedback: true,
    children: <Text>Foo</Text>
  }
};

export default fixture;
