import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ConfirmEmailSent from '../index.native';
import fixture from './fixtures/confirm-email-sent';

test('should handle buttons', t => {
  t.plan(2);

  const onOpenInbox = () => {
    t.pass();
  };
  const onClose = () => {
    t.pass();
  };

  const component = (
    <ConfirmEmailSent onOpenInbox={onOpenInbox} onClose={onClose} locales={fixture.props.locales} />
  );

  const {getByTestId} = render(component);
  const openInbox = getByTestId('open-inbox-button');
  fireEvent.press(openInbox);

  const closeButton = getByTestId('close-button');
  fireEvent.press(closeButton);
});
