import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Select from '../index.native';
import mockMobileContext from '../../../test/helpers/mock-mobile-context';
import {TemplateContext} from '../../../template/app-review/template-context';
import {ANALYTICS_EVENT_TYPE} from '../../../variables/analytics';

import {select} from './fixtures/default';

test('should handle focus', t => {
  const analyticsID = 'fake-analytics-id';
  const questionType = 'template';

  const context = mockMobileContext({
    logEvent: (eventName: string, options: {id: string}) => {
      if (eventName === ANALYTICS_EVENT_TYPE.PRESS) {
        t.deepEqual(options, {id: analyticsID});
      }

      if (eventName === ANALYTICS_EVENT_TYPE.OPEN_SELECT) {
        t.deepEqual(options, {id: analyticsID, questionType});
      }
    }
  });

  const items = select.items || [];

  const handleFocus = () => {
    t.pass();
  };

  const handleBlur = () => {
    t.fail();
  };

  const handleChange = () => {
    t.fail();
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
  const touchable = getByTestId('select-input');

  fireEvent(touchable, 'press');

  t.plan(3);
});
