import React, {ReactNode} from 'react';
import {Text} from 'react-native';
import {Props} from '../../index.native';

type Fixture = {children: ReactNode; props: Props};

const fixture: Fixture = {
  props: {
    testID: 'basic-text'
  },
  children: <Text>Basic text</Text>
};

export default fixture;
