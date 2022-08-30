import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {items, userChoices} from '../../template/test/fixtures/default';
import Switch from '../index.native';

test('basic question › should handle onInputValueChange', t => {
  const TEST_VALUE = 'Foobarbaz';

  const onInputValueChange = (_value: string) => {
    t.is(_value, TEST_VALUE);
  };

  const component = (
    <Switch
      type="basic"
      items={items}
      userChoices={userChoices}
      onInputValueChange={onInputValueChange}
    />
  );

  const {getByTestId} = render(component);
  const text = getByTestId('question-input-text');

  fireEvent(text, 'onChange', TEST_VALUE);

  t.plan(1);
});
