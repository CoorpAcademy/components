import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {NativeTouchEvent} from 'react-native';
import ModalSelect, {OnChangeFunction} from '../index.native';
import fixture from './fixtures/default';

test('should handle close', t => {
  const fakeEvent: NativeTouchEvent = {
    changedTouches: [],
    identifier: 'fake',
    locationX: 0,
    locationY: 0,
    pageX: 0,
    pageY: 0,
    target: '',
    timestamp: 0,
    touches: []
  };

  const handlePress = (event: NativeTouchEvent) => {
    t.is(event, fakeEvent);
  };

  const onChange: OnChangeFunction = () => {
    t.fail();
  };

  const values = fixture.props.values;

  const component = <ModalSelect values={values} onClose={handlePress} onChange={onChange} />;

  const {getByTestId} = render(component);
  const cpt = getByTestId('close-modal');

  fireEvent(cpt, 'press', fakeEvent);

  t.plan(1);
});
