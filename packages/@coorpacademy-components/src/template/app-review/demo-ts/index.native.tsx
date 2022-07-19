import React from 'react';
import {View, Text} from 'react-native';

export type Props = {plop: string};

const DemoTs = ({plop}: Props) => (
  <View>
    <Text>{plop}</Text>
  </View>
);

export default DemoTs;
