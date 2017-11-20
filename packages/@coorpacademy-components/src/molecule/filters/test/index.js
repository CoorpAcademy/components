import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filters from '..';

configure({adapter: new Adapter()});

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
