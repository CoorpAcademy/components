import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {omit} from 'lodash/fp';
import InputHtml from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test('should call the onChange function with the value of the target', t => {
  const {getByTestId, queryByTestId, unmount} = render(<InputHtml {...defaultFixture.props} />);

  // display is in preview state
  t.truthy(getByTestId('input-preview'));
  t.is(queryByTestId('input-preview-textarea'), null);
  t.truthy(getByTestId('pencil-icon'));

  // toggling to edition state
  fireEvent.click(getByTestId('pencil-icon'));

  // display is in edition state
  t.is(queryByTestId('input-preview'), null);
  t.truthy(getByTestId('preview-icon'));
  t.truthy(getByTestId('input-preview-textarea'));

  // editing the content
  const NEW_VALUE = 'foobarbaz';
  fireEvent.change(getByTestId('input-preview-textarea'), {target: {value: NEW_VALUE}});
  t.is(getByTestId('input-preview-textarea').value, NEW_VALUE);

  // display is still in edition state
  t.is(queryByTestId('input-preview'), null);
  t.truthy(getByTestId('preview-icon'));
  t.truthy(getByTestId('input-preview-textarea'));

  // toggling to preview state
  fireEvent.click(getByTestId('preview-icon'));

  // display is back to preview state
  t.truthy(getByTestId('input-preview'));
  t.is(queryByTestId('input-preview-textarea'), null);
  t.truthy(getByTestId('pencil-icon'));

  unmount();
});

test('should not crash if the onChange function has not been specified', t => {
  const {getByTestId, unmount} = render(<InputHtml {...omit('onChange', defaultFixture.props)} />);

  t.truthy(getByTestId('pencil-icon'));
  fireEvent.click(getByTestId('pencil-icon'));
  fireEvent.change(getByTestId('input-preview-textarea'), {target: {value: 'foo'}});
  t.truthy(getByTestId('preview-icon'));

  unmount();
});

test('should not crash if the value has not been specified', t => {
  const {getByTestId} = render(<InputHtml {...defaultFixture.props} value={undefined} />);
  t.is(getByTestId('input-preview').innerHTML, '');
});
