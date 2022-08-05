import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {createSelectChoice} from '../../../hoc/modal/select/test/fixtures/default';
import mockMobileContext from '../../../test/helpers/mock-mobile-context';
import {TemplateContext} from '../../../template/app-review/template-context';
import {ANALYTICS_EVENT_TYPE} from '../../../variables/analytics';
import Select from '../index.native';

test('should handle blur', t => {
  const analyticsID = 'fake-analytics-id';
  const questionType = 'template';

  const context = mockMobileContext({
    logEvent: (eventName: string, options: {id: string}) => {
      t.is(eventName, ANALYTICS_EVENT_TYPE.CLOSE_SELECT);
      t.deepEqual(options, {id: analyticsID, questionType});
    }
  });

  const select = createSelectChoice({name: 'sel456'});
  const items = select.items || [];

  const handleBlur = () => {
    t.pass();
  };

  const component = (
    <TemplateContext values={context}>
      <Select
        values={items}
        value={items[1].text}
        onBlur={handleBlur}
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

  fireEvent(modalSelect, 'close');

  t.plan(3);
});
