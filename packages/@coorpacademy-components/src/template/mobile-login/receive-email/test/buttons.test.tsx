import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ReceiveEmail from '../index.native';
import fixture from './fixtures/receive-email';

test('should handle buttons', t => {
  t.plan(2);

  const onSend = () => {
    t.pass();
  };
  const onClose = () => {
    t.pass();
  };

  const component = (
    <ReceiveEmail onSend={onSend} onClose={onClose} locales={fixture.props.locales} />
  );

  const {getByTestId} = render(component);
  const sendButton = getByTestId('send-button');
  fireEvent.press(sendButton);

  const closeButton = getByTestId('close-button');
  fireEvent.press(closeButton);
});
