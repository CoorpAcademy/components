import React, {ReactNode} from 'react';
import {Text} from 'react-native';
import {Props} from '../../index.native';

type Fixture = {children: ReactNode; props: Props};

const fixture: Fixture = {
  props: {},
  children: <Text>Some content</Text>
};

export default fixture;
