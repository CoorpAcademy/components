import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import SearchAndChipsResults from '..';
import style from '../style.css';
import chipsStyle from '../../../atom/chips/style.css';
import defaultFixture from './fixtures/default';
import empty from './fixtures/empty';
import filtered from './fixtures/filtered';
import loading from './fixtures/loading';
import sorted from './fixtures/sorted-selected';
import unsorted from './fixtures/unsorted-selected';

browserEnv();
test.afterEach.always(cleanup);
const mount = props => render(<SearchAndChipsResults {...props} />, {wrapper: wrappingComponent});

[236, '12rem', 0].forEach(height => {
  test.serial(`results scroll at height ${height}`, t => {
    const view = mount({...defaultFixture.props, resultsMaxHeight: height});
    const results = view.container.querySelector('[data-name="results"]');
    t.truthy(results);
    t.is(results.style.maxHeight, typeof height === 'number' ? `${height}px` : height);
    t.is(results.style.overflowY, 'auto');
    const header = view.getByRole('button', {name: 'Select All'}).parentElement.parentElement;
    t.is(header.nextElementSibling, results);
    t.false(results.contains(header));
  });
});

test.serial('optional controls omit their wrappers and empty header', t => {
  [[], ['search'], ['selectAllButton'], ['search', 'selectAllButton']].forEach(controls => {
    const props = {...defaultFixture.props, search: undefined, selectAllButton: undefined};
    controls.forEach(control => {
      props[control] = defaultFixture.props[control];
    });
    const view = mount(props);
    t.is(view.container.querySelectorAll(`.${style.header}`).length, controls.length > 0 ? 1 : 0);
    t.is(
      view.container.querySelectorAll(`.${style.search}`).length,
      controls.includes('search') ? 1 : 0
    );
    t.is(
      view.container.querySelectorAll(`.${style.button}`).length,
      controls.includes('selectAllButton') ? 1 : 0
    );
    cleanup();
  });
});

test.serial('bulk icon defaults to add and accepts close; clicks reach callback', t => {
  [undefined, 'close'].forEach(icon => {
    let calls = 0;
    const props = {
      ...defaultFixture.props,
      selectAllButton: {label: 'Bulk', icon, onClick: () => calls++}
    };
    const tree = SearchAndChipsResults(props);
    const header = tree.props.children[0];
    t.is(header.props.children[0].props.children.props.icon.type, icon || 'add');
    const view = mount(props);
    fireEvent.click(view.getByRole('button', {name: 'Bulk'}));
    t.is(calls, 1);
    cleanup();
  });
});

[defaultFixture, empty, filtered, loading, sorted, unsorted].forEach((fixture, index) => {
  test.serial(`legacy picker fixture ${index} keeps controls, order and states`, t => {
    const {props} = fixture;
    const view = mount(props);
    t.truthy(view.getByRole('button', {name: props.selectAllButton.label}));
    t.is(view.getByRole('textbox').value, props.search.value);
    const results = view.container.querySelector(`.${style.resultContainer}`);
    t.is(results.getAttribute('style'), null);
    t.is(results.getAttribute('data-name'), null);
    t.false(results.classList.contains(style.scrollResults));
    if (props.isLoading) {
      t.truthy(results.querySelector(`.${style.loaderContainer}`));
      t.is(results.querySelector('ul'), null);
    } else if (props.results.length === 0) {
      t.truthy(view.getByText(props.emptyMessages.firstMessage));
      t.truthy(view.getByText(props.emptyMessages.secondMessage));
    } else {
      t.deepEqual(
        [...results.querySelectorAll('[role="button"]')].map(chip =>
          chip.getAttribute('data-name')
        ),
        props.results.map(result => result.text)
      );
      props.results.forEach((result, position) => {
        const chip = results.querySelectorAll('[role="button"]')[position];
        t.is(chip.classList.contains(chipsStyle.selected), Boolean(result.selected));
        t.truthy(view.getByText(result.information));
      });
    }
  });
});

test.serial(
  'scroll height can change and be removed without leaving styles or changing results',
  t => {
    const props = sorted.props;
    const view = mount({...props, resultsMaxHeight: 236});
    const results = view.container.querySelector('[data-name="results"]');
    const header = view.container.querySelector(`.${style.header}`);
    view.rerender(<SearchAndChipsResults {...props} resultsMaxHeight="18vh" />);
    t.is(results.style.maxHeight, '18vh');
    view.rerender(<SearchAndChipsResults {...props} />);
    t.is(results.getAttribute('data-name'), null);
    t.is(results.style.maxHeight, '');
    t.is(results.style.overflowY, '');
    t.false(results.classList.contains(style.scrollResults));
    t.true(results.classList.contains(style.resultContainer));
    t.is(header.nextElementSibling, results);
    t.deepEqual(
      [...results.querySelectorAll('[role="button"]')].map(result =>
        result.getAttribute('data-name')
      ),
      props.results.map(result => result.text)
    );
    props.results.forEach((result, index) => {
      t.is(
        results.querySelectorAll('[role="button"]')[index].classList.contains(chipsStyle.selected),
        Boolean(result.selected)
      );
    });
    view.rerender(<SearchAndChipsResults {...props} resultsMaxHeight={0} />);
    t.is(results.style.maxHeight, '0px');
    t.is(results.style.overflowY, 'auto');
    t.true(results.classList.contains(style.scrollResults));
    t.is(header.nextElementSibling, results);
  }
);

test.serial(
  'scroll container survives transitions through loading empty and populated results',
  t => {
    const props = {...defaultFixture.props, resultsMaxHeight: 'calc(50vh - 2rem)'};
    const view = mount(props);
    const results = view.container.querySelector('[data-name="results"]');
    const header = view.container.querySelector(`.${style.header}`);
    view.rerender(<SearchAndChipsResults {...props} results={[]} isLoading />);
    t.truthy(results.querySelector(`.${style.loaderContainer}`));
    t.is(results.querySelector('ul'), null);
    t.is(header.nextElementSibling, results);
    view.rerender(
      <SearchAndChipsResults {...props} results={[]} emptyMessages={empty.props.emptyMessages} />
    );
    t.is(results.querySelector(`.${style.loaderContainer}`), null);
    t.true(results.contains(view.getByText(empty.props.emptyMessages.firstMessage)));
    t.true(results.contains(view.getByText(empty.props.emptyMessages.secondMessage)));
    t.is(results.style.maxHeight, 'calc(50vh - 2rem)');
    t.is(results.style.overflowY, 'auto');
    t.false(results.contains(header));
    view.rerender(<SearchAndChipsResults {...props} />);
    t.truthy(view.getByRole('list', {name: props['results-aria-label']}));
    t.is(results.querySelectorAll('[role="button"]').length, props.results.length);
    t.is(view.queryByText(empty.props.emptyMessages.firstMessage), null);
  }
);
