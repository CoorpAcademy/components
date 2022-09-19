import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Switch from '../index.native';
import {choices} from '../../template/test/fixtures/default';
import {TemplateContext} from '../../../../../template/app-review/template-context';
import mockMobileContext from '../../../../../test/helpers/mock-mobile-context';

test('basic question › should handle onInputValueChange', t => {
  const TEST_VALUE = 'Foobarbaz';

  const onInputValueChange = (_value: string) => {
    t.is(_value, TEST_VALUE);
  };

  const mockedMobileContext = mockMobileContext();

  const component = (
    <TemplateContext values={mockedMobileContext}>
      <Switch type="basic" choices={choices} onInputValueChange={onInputValueChange} />
    </TemplateContext>
  );

  const {getByTestId} = render(component);
  const text = getByTestId('question-input-text');

  fireEvent(text, 'onChange', TEST_VALUE);

  t.plan(1);
});
