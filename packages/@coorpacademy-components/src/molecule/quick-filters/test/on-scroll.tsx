/* eslint-disable ava/no-only-test */
import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render, act, fireEvent} from '@testing-library/react';
import QuickFilters, {handleScroll} from '..';
import someFiltersSelected from './fixtures/with-filter-button-some-filters-selected';

browserEnv();

let getByTestId: ReturnType<typeof render>['getByTestId']; // avoid

const mockComputedStyle = () => {
  Object.defineProperty(window, 'getComputedStyle', {
    value: (el: HTMLElement) => ({visibility: el.style.visibility})
  });
};

const clientWidth = 0;
const scrollWidth = 0;
const scrollLeft = 0;

test.before(() => {
  mockComputedStyle();
  Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
    get() {
      return clientWidth;
    }
  });
  Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
    get() {
      return scrollWidth;
    }
  });
  Object.defineProperty(HTMLElement.prototype, 'scrollLeft', {
    get() {
      return scrollLeft;
    },
    configurable: true
  });
});

test.beforeEach(() => {
  cleanup();
  ({getByTestId} = render(<QuickFilters {...someFiltersSelected.props} />));
});

test('handleScroll should scroll the list by the given direction and call scrollBy of listRef', t => {
  const listRef = {current: {scrollBy: (options: {left: number}) => t.is(options.left, 120)}};
  handleScroll(120, listRef as React.RefObject<HTMLDivElement>);
});

test('handleScroll should not throw an error when listRef is null', t => {
  const emptyListRef = {current: null};
  t.notThrows(() => handleScroll(120, emptyListRef as React.RefObject<HTMLDivElement>));
});

test('filterButton is displayed when filterButton props is provided', t => {
  const filterButton = getByTestId('open-filters-modal-button');
  t.truthy(filterButton);
});

test('click on leftArrowButton should call handleScroll with right size scroll', t => {
  const list = getByTestId('filters-options-list');
  t.truthy(list);

  const calls: Array<{left: number; behavior: 'smooth'}> = [];
  list.scrollBy = (opts: any) => calls.push(opts);

  const leftArrowButton = getByTestId('scroll-left-button');
  act(() => {
    fireEvent.click(leftArrowButton);
  });

  t.deepEqual(calls, [{left: -120, behavior: 'smooth'}]);
});

test('click on rightArrowButton should call handleScroll with right size scroll', t => {
  const list = getByTestId('filters-options-list');
  t.truthy(list);

  const calls: Array<{left: number; behavior: 'smooth'}> = [];
  list.scrollBy = (opts: any) => calls.push(opts);

  const rightArrowButton = getByTestId('scroll-right-button');
  act(() => {
    fireEvent.click(rightArrowButton);
  });

  t.deepEqual(calls, [{left: 120, behavior: 'smooth'}]);
});
