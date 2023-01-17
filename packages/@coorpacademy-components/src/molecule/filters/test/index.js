import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Filters from '..';

browserEnv();
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
