import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Select from '../../select-modal/index.native';
import {createSelectChoice} from '../../../hoc/modal/select/test/fixtures/default';
import mockMobileContext from '../../../test/helpers/mock-mobile-context';
import {TemplateContext} from '../../../template/app-review/template-context';
import {ANALYTICS_EVENT_TYPE} from '../../../variables/analytics';

test('should handle on blur', t => {
  const analyticsID = 'fake-analytics-id';
  const context = mockMobileContext({
    logEvent: (eventName: string, options: {id: string}) => {
      t.is(eventName, ANALYTICS_EVENT_TYPE.CLOSE_SELECT);
      t.deepEqual(options, {id: analyticsID});
    }
  });

  const select = createSelectChoice({name: 'sel456'});
  const items = select.items || [];

  const questionType = 'template';
  const handleBlur = value => {
    t.is(value, 'App Store');
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

  const cpt = getByTestId('change-modal-select-item-2');

  fireEvent(cpt, 'press', 'change-modal-select-item-2');

  t.plan(1);
});
