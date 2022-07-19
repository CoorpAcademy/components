import React from 'react';
import {View, Text} from 'react-native';
import {Props} from './typings';

const DemoTs = ({plop}: Props) => (
  <View>
    <Text>{plop}</Text>
  </View>
);

export default DemoTs;
