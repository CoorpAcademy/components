import React from 'react';
import {Text} from 'react-native';
import {NovaSolidSpaceRingPlanet as RingPlanet} from '@coorpacademy/nova-icons';
import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    renderIcon: <RingPlanet color="#f00" height={60} width={60} />,
    headerBackgroundColor: 'rgba(0, 128, 0, 0.2)',
    iconBackgroundColor: 'rgba(0, 128, 0, 0.2)',
    onClose: noop,
    children: <Text>Modal with header and icon</Text>
  }
};

export default fixture;
