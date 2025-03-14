import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent} from '@testing-library/react';
import FilterCheckboxAndSearch from '..';
import {renderWithContext} from '../../../util/render-with-context';
import filterCheckboxSelected from './fixtures/filters-selected';

browserEnv();

test.afterEach(() => {
  cleanup();
});

test('should display options contents on show more click', t => {
  t.plan(3);
  const context = {
    translate: (key: string) => key
  };
  const {container} = renderWithContext(
    <FilterCheckboxAndSearch {...filterCheckboxSelected.props} />,
    {context}
  );
  const showButton = container.querySelector(
    '[data-testid="filter-checkbox-and-search-show-button"]'
  ) as Element;
  t.truthy(showButton);
  t.is(showButton.textContent, 'Show more');
  fireEvent.click(showButton);
  t.is(showButton.textContent, 'Show less');
  const options = container.querySelectorAll(
    '[data-testid="filter-checkbox-and-search-option-row"]'
  );
  t.is(options.length, 7);
});
