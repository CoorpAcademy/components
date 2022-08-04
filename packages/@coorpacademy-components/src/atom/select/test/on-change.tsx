import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Select from '../index.native';
import {createSelectChoice} from '../../../hoc/modal/select/test/fixtures/default';
import mockMobileContext from '../../../test/helpers/mock-mobile-context';
import {TemplateContext} from '../../../template/app-review/template-context';

test('should handle on change', t => {
  const context = mockMobileContext({
    logEvent: () => t.pass()
  });

  const select = createSelectChoice({name: 'sel456'});
  const items = select.items || [];

  const analyticsID = 'foo';
  const questionType = 'template';
  const handleChange = value => {
    t.is(value, 'App Store');
  };

  const component = (
    <TemplateContext values={context}>
      <Select
        values={items}
        value={items[1].text}
        onChange={handleChange}
        questionType={questionType}
        analyticsID={analyticsID}
        placeholder="Foo bar baz"
        isDisabled
        isFocused
        testID="select"
      />
    </TemplateContext>
  );

  const {getByTestId} = render(component);

  const cpt = getByTestId('change-modal-select-item-2');

  fireEvent(cpt, 'press', 'change-modal-select-item-2');

  t.plan(1);
});
