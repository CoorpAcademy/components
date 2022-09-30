import React from 'react';
import {Text} from 'react-native';
import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    onClose: noop,
    children: <Text>Some content</Text>
  }
};

export default fixture;
