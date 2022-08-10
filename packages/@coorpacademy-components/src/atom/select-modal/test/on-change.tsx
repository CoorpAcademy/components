import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Select from '../index.native';
import mockMobileContext from '../../../test/helpers/mock-mobile-context';
import {TemplateContext} from '../../../template/app-review/template-context';
import {ANALYTICS_EVENT_TYPE} from '../../../variables/analytics';
import {OnChangeFunction} from '../../../hoc/modal/select/index.native';
import {select} from './fixtures/default';

test('should handle change', t => {
  const analyticsID = 'fake-analytics-id';
  const questionType = 'template';

  const context = mockMobileContext({
    logEvent: (eventName: string, options: {id: string}) => {
      t.is(eventName, ANALYTICS_EVENT_TYPE.CLOSE_SELECT);
      t.deepEqual(options, {id: analyticsID, questionType});
    }
  });

  const items = select.items || [];
  const NEW_VALUE = items[2].text;

  const handleBlur = () => {
    t.pass();
  };

  const handleFocus = () => {
    t.fail();
  };

  const handleChange: OnChangeFunction = _value => {
    t.is(_value, NEW_VALUE);
  };

  const component = (
    <TemplateContext values={context}>
      <Select
        values={items}
        value={items[1].text}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
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
  const modalSelect = getByTestId('select-modal');

  fireEvent(modalSelect, 'change', NEW_VALUE);

  t.plan(4);
});
