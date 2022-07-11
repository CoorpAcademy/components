// import React, {FunctionComponent} from 'react';
import React from 'react';
import {View} from 'react-native';

export type Props = {plop: string};

const DemoTs = ({plop}: Props) => console.log({plop});
// const DemoTs = ({plop}: Props) => <View>{plop}</View>;

export default DemoTs;
