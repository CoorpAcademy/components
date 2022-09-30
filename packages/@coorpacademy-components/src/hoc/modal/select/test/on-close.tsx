import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {GestureResponderEvent} from 'react-native';
import ModalSelect, {OnChangeFunction} from '../index.native';
import mockedGestureEvent from '../../../../test/helpers/mocked-gesture-event';
import fixture from './fixtures/default';

test('should handle close', t => {
  const handlePress = (event: GestureResponderEvent) => {
    t.is(event, mockedGestureEvent);
  };

  const onChange: OnChangeFunction = () => {
    t.fail();
  };

  const values = fixture.props.values;

  const component = <ModalSelect values={values} onClose={handlePress} onChange={onChange} />;

  const {getByTestId} = render(component);
  const cpt = getByTestId('close-modal');

  fireEvent(cpt, 'press', mockedGestureEvent);

  t.plan(1);
});
