import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {identity} from 'lodash/fp';
import {fireEvent} from '@testing-library/react';
import ActionableExpandableErrorsTable from '..';
import {renderWithContext} from '../../../util/render-with-context';
import defaultFixture from './fixtures/dashboard-saved';

browserEnv();
const translate = identity;

test('should launch onClick and toggle dropDown icon style and nested table', t => {
  const {getByTestId, queryAllByTestId, queryByTestId} = renderWithContext(
    <ActionableExpandableErrorsTable {...defaultFixture.props} />,
    {
      context: {translate}
    }
  );

  let bulkArrowDown = getByTestId('button-arrowUp-button-0-bulkArrowDown');
  let bulkArrowUp = queryByTestId('button-arrowUp-button-0-bulkArrowUp');
  let tables = queryAllByTestId('expandible-actionable-table');
  t.is(tables.length, 1);
  t.is(bulkArrowUp, null);

  fireEvent.click(bulkArrowDown);

  tables = queryAllByTestId('expandible-actionable-table');
  bulkArrowUp = getByTestId('button-arrowUp-button-0-bulkArrowUp');
  bulkArrowDown = queryByTestId('button-arrowUp-button-0-bulkArrowDown');

  t.is(tables.length, 2);
  t.is(bulkArrowDown, null);

  fireEvent.click(bulkArrowUp);

  bulkArrowDown = getByTestId('button-arrowUp-button-0-bulkArrowDown');
  bulkArrowUp = queryByTestId('button-arrowUp-button-0-bulkArrowUp');
  tables = queryAllByTestId('expandible-actionable-table');
  t.is(tables.length, 1);
  t.is(bulkArrowUp, null);

  let nextBulkArrowDown = getByTestId('button-arrowUp-button-1-bulkArrowDown');
  fireEvent.click(nextBulkArrowDown);
  tables = queryAllByTestId('expandible-actionable-table');
  t.is(tables.length, 2);

  nextBulkArrowDown = getByTestId('button-arrowUp-button-1-bulkArrowDown');
  t.truthy(nextBulkArrowDown);

  fireEvent.click(nextBulkArrowDown);
  const nextBulkArrowUp = queryAllByTestId('button-arrowUp-button-1-bulkArrowUp');
  t.is(nextBulkArrowUp.length, 2);
  nextBulkArrowDown = queryByTestId('button-arrowUp-button-1-bulkArrowDown');
  t.is(nextBulkArrowDown, null);
});
