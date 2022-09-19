import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {noop} from 'lodash/fp';
import Switch from '../index.native';
import {choices, template} from '../../template/test/fixtures/default';
import {Choice} from '../../../types';
import {TemplateContext} from '../../../../../template/app-review/template-context';
import mockMobileContext from '../../../../../test/helpers/mock-mobile-context';

test('template question › should handle onItemInputChange', t => {
  const TEST_VALUE = 'Foobarbaz';

  const handleItemInputChange = (_choice: Choice, _value: string) => {
    t.is(_choice, choices[0]);
    t.is(_value, TEST_VALUE);
  };

  const mockedMobileContext = {
    ...mockMobileContext(),
    store: {
      focusedSelectId: 'foo',
      handleBlur: noop,
      handleFocus: () => noop
    }
  };

  const component = (
    <TemplateContext values={mockedMobileContext}>
      <Switch
        type="template"
        template={template}
        choices={choices}
        onItemInputChange={handleItemInputChange}
      />
    </TemplateContext>
  );

  const {getByTestId} = render(component);
  const text = getByTestId('question-section-1-part-2-text');

  fireEvent(text, 'onChange', TEST_VALUE);

  t.plan(2);
});
