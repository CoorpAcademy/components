import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Filters from '..';

browserEnv();

test('mount Filters with React Testing Library', t => {
  t.plan(6);

  const onToggleFilters = () => {
    t.pass();
  };

  const onToggleSorts = () => {
    t.pass();
  };

  const onSearch = () => {
    t.pass();
  };

  const {container} = render(
    <Filters onToggleFilters={onToggleFilters} onToggleSorts={onToggleSorts} onSearch={onSearch} />
  );

  const openFilterButton = container.querySelector('[data-name="filterButton"]');
  t.truthy(openFilterButton);
  fireEvent.click(openFilterButton as Element);

  const openSortButton = container.querySelector('[data-name="sortButton"]');
  t.truthy(openSortButton);
  fireEvent.click(openSortButton as Element);

  const searchButton = container.querySelector('[data-name="cta"]');
  t.truthy(searchButton);
  fireEvent.click(searchButton as Element);
});
