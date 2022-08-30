import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {noop} from 'lodash/fp';
import {items, template, userChoices} from '../../template/test/fixtures/default';
import Switch from '../index.native';
import {Choice} from '../../../../../types/progression-engine';

test('template question › should handle onItemInputChange', t => {
  const TEST_VALUE = 'Foobarbaz';

  const handleItemInputChange = (_item: Choice, _value: string) => {
    t.is(_item, items[0]);
    t.is(_value, TEST_VALUE);
  };

  const component = (
    <Switch
      type="template"
      template={template}
      items={items}
      userChoices={userChoices}
      onItemInputChange={handleItemInputChange}
      focusedSelectId="foo"
      handleBlur={noop}
      handleFocus={() => noop}
    />
  );

  const {getByTestId} = render(component);
  const text = getByTestId('question-section-1-part-2-text');

  fireEvent(text, 'onChange', TEST_VALUE);

  t.plan(2);
});
