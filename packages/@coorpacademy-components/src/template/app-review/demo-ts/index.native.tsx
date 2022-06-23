import React from 'react';
import {View} from 'react-native';

export type Props = {plop: string};

const DemoTs = ({plop}: Props) => <View> demo mobile: {plop}</View>;

export default DemoTs;
