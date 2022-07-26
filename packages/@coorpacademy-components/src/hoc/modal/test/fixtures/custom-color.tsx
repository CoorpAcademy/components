import React, {ReactNode} from 'react';
import {Text} from 'react-native';
import {NovaSolidSpaceRingPlanet as RingPlanet} from '@coorpacademy/nova-icons';
import {Props} from '../../index.native';

type Fixture = {children: ReactNode; props: Props};

const renderIcon = () => <RingPlanet color="#f00" height={60} width={60} />;

const fixture: Fixture = {
  props: {
    // analyticsID: 'fake-touchable',
    renderIcon: renderIcon(),
    headerBackgroundColor: 'rgba(0, 128, 0, 0.2)',
    iconBackgroundColor: 'rgba(0, 128, 0, 0.2)'
  },
  children: <Text>Modal with header and icon</Text>
};

export default fixture;
