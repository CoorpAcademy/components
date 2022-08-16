import React from 'react';
import {Text} from 'react-native';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    colors: ['#fff'],
    children: <Text>dummy gradient child</Text>
  }
};

export default fixture;
