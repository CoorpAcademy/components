import 'jsdom-global/register'; // eslint-disable-line import/no-unresolved
import test from 'ava';
import React from 'react';
import {mount} from 'enzyme'; // eslint-disable-line import/no-unresolved
import Filters from '..';

test('mount Filters with enzyme', t => {
  t.plan(9);

  const onToggleFilters = () => {
    t.pass();
  };

  const onToggleSorts = () => {
    t.pass();
  };

  const onSearch = () => {
    t.pass();
  };

  const component = (
    <Filters onToggleFilters={onToggleFilters} onToggleSorts={onToggleSorts} onSearch={onSearch} />
  );

  const filters = mount(component);

  filters.instance().handleOpenFilter();
  let state = filters.state();
  t.is(state.filter, true);
  t.is(state.sorted, false);

  filters.instance().handleOpenSort();
  state = filters.state();
  t.is(state.filter, false);
  t.is(state.sorted, true);

  filters.instance().handleSearch();
  state = filters.state();
  t.is(state.filter, false);
  t.is(state.sorted, false);
});
