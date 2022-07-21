import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import mockMobileContext from '../../../test/helpers/mock-mobile-context';
import Touchable from '../index.native';
import {TemplateContext} from '../../../template/app-review/template-context';
import {ANALYTICS_EVENT_TYPE} from '../../../variables/analytics';

test('should not vibrate and not log analytics without props.onLongPress', t => {
  const context = mockMobileContext({
    logEvent: () => t.pass(),
    vibrate: () => t.pass()
  });

  const component = (
    <TemplateContext values={context}>
      <Touchable analyticsID="fake-touchable" testID="touchable-fake" />;
    </TemplateContext>
  );

  const {getByTestId} = render(component);
  const touchable = getByTestId('touchable-fake');

  fireEvent(touchable, 'onLongPress');

  t.plan(0);
});

test('should vibrate and log analytics event', t => {
  const analyticsID = 'fake-analytics-id';
  const context = mockMobileContext({
    logEvent: (eventName: string, options: {id: string}) => {
      t.is(eventName, ANALYTICS_EVENT_TYPE.LONG_PRESS);
      t.deepEqual(options, {id: analyticsID});
    },
    vibrate: () => t.pass()
  });

  const handleLongPress = () => t.pass();

  const component = (
    <TemplateContext values={context}>
      <Touchable onLongPress={handleLongPress} analyticsID={analyticsID} testID="touchable-fake" />;
    </TemplateContext>
  );

  const {getByTestId} = render(component);
  const touchable = getByTestId('touchable-fake');

  fireEvent(touchable, 'onLongPress');

  t.plan(4);
});

test('should not vibrate if context has no vibration', t => {
  const context = mockMobileContext({
    logEvent: () => t.pass()
  });
  const handleLongPress = () => t.pass();

  const component = (
    <TemplateContext values={context}>
      <Touchable
        onLongPress={handleLongPress}
        analyticsID="fake-touchable"
        testID="touchable-fake"
      />
      ;
    </TemplateContext>
  );

  const {getByTestId} = render(component);
  const touchable = getByTestId('touchable-fake');

  fireEvent(touchable, 'onLongPress');

  t.plan(2);
});

test('should not log analytics if context has no analytics', t => {
  const context = mockMobileContext({
    vibrate: () => t.pass()
  });

  delete context.analytics;

  const handleLongPress = () => {
    t.pass();
  };

  const component = (
    <TemplateContext values={context}>
      <Touchable
        onLongPress={handleLongPress}
        analyticsID="fake-touchable"
        testID="touchable-fake"
      />
      ;
    </TemplateContext>
  );

  const {getByTestId} = render(component);
  const touchable = getByTestId('touchable-fake');

  fireEvent(touchable, 'onLongPress');

  t.plan(2);
});

test('should log analytics with custom params', t => {
  const analyticsID = 'fake-analytics-id';
  const analyticsParams = {
    foo: 'bar',
    baz: 'qux'
  };

  const context = mockMobileContext({
    logEvent: (eventName: string, options: {id: string}) => {
      t.is(eventName, ANALYTICS_EVENT_TYPE.LONG_PRESS);
      t.deepEqual(options, {...analyticsParams, id: analyticsID});
    },
    vibrate: () => t.pass()
  });

  const handleLongPress = () => t.pass();

  const component = (
    <TemplateContext values={context}>
      <Touchable
        onLongPress={handleLongPress}
        analyticsParams={analyticsParams}
        analyticsID={analyticsID}
        testID="touchable-fake"
      />
      ;
    </TemplateContext>
  );

  const {getByTestId} = render(component);
  const touchable = getByTestId('touchable-fake');

  fireEvent(touchable, 'onLongPress');

  t.plan(4);
});
