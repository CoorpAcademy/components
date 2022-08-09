import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import type {PressEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import ModalSelect, {OnChangeFunction} from '../index.native';
import fixture from './fixtures/default';

test('should handle close', t => {
  const handlePress = (event: PressEvent) => {
    t.is(event, 'fake-event');
  };

  const onChange: OnChangeFunction = () => {
    t.fail();
  };

  const values = fixture.props.values;

  const component = <ModalSelect values={values} onClose={handlePress} onChange={onChange} />;

  const {getByTestId} = render(component);
  const cpt = getByTestId('close-modal');

  fireEvent(cpt, 'press', 'fake-event');

  t.plan(1);
});
