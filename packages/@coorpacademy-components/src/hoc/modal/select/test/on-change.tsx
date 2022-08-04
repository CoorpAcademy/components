import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ModalSelect, {OnChangeFunction} from '../index.native';
import {createSelectChoice} from './fixtures/default';

test('should handle on change', t => {
  const onChange: OnChangeFunction = value => {
    t.is(value, 'App Store');
  };

  const select = createSelectChoice({name: 'sel456'});

  const component = (
    <ModalSelect values={select.items || []} onChange={onChange} testID="change-modal-select" />
  );

  const {getByTestId} = render(component);

  const cpt = getByTestId('change-modal-select-item-2');

  fireEvent(cpt, 'press', 'change-modal-select-item-2');

  t.plan(1);
});
