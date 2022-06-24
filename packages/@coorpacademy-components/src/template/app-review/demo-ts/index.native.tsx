import React from 'react';
import {Text} from 'react-native';

export type Props = {plop: string};

const DemoTs = ({plop}: Props) => <Text> demo mobile: {plop}</Text>;

export default DemoTs;
