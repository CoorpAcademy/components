import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render, act, fireEvent} from '@testing-library/react';
import QuickFilters, {handleScroll} from '..';
import {ScrollByOptions} from '../types';
import someFiltersSelected from './fixtures/many-categorize-with-filters-selected';

browserEnv();

let getByTestId: ReturnType<typeof render>['getByTestId']; // avoid DOM concurrency

const mockComputedStyle = () => {
  Object.defineProperty(window, 'getComputedStyle', {
    value: (el: HTMLElement) => ({visibility: el.style.visibility})
  });
};

let clientWidth = 0;
let scrollWidth = 0;
let scrollLeft = 0;

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

test.afterEach(() => {
  cleanup();
});

test('handleScroll should scroll the list by the given direction and call scrollBy of listRef', t => {
  const listRef = {current: {scrollBy: (options: {left: number}) => t.is(options.left, 120)}};
  handleScroll(120, listRef as unknown as React.RefObject<HTMLDivElement>);
});

test('handleScroll should not throw an error when listRef is null', t => {
  const emptyListRef = {current: null};
  t.notThrows(() => handleScroll(120, emptyListRef as React.RefObject<HTMLDivElement>));
});

test('filterButton is displayed when filterButton props is provided', t => {
  const filterButton = getByTestId('open-filters-modal-button');
  t.truthy(filterButton);
});

test('click on leftArrowButton should call handleScroll with left size scroll', t => {
  const list = getByTestId('filters-options-list') as HTMLElement;
  const calls: ScrollByOptions[] = [];
  Object.defineProperty(list, 'scrollBy', {
    configurable: true,
    writable: true,
    value(opts: ScrollByOptions) {
      calls.push(opts);
    }
  });

  const leftArrow = getByTestId('scroll-left-button');
  act(() => {
    fireEvent.click(leftArrow);
  });

  t.deepEqual(calls, [{left: -120, behavior: 'smooth'}]);
});

test('click on rightArrowButton should call handleScroll with right size scroll', t => {
  const list = getByTestId('filters-options-list') as HTMLElement;
  const calls: ScrollByOptions[] = [];

  Object.defineProperty(list, 'scrollBy', {
    configurable: true,
    writable: true,
    value(opts: ScrollByOptions) {
      calls.push(opts);
    }
  });
  const rightArrow = getByTestId('scroll-right-button');
  act(() => {
    fireEvent.click(rightArrow);
  });

  t.deepEqual(calls, [{left: 120, behavior: 'smooth'}]);
});

test('rightArrowButton is visible when scrollWidth is inferior to scrollLeft and clientWidth', t => {
  scrollWidth = 200;
  clientWidth = 100;
  scrollLeft = 1;
  const list = getByTestId('filters-options-list');
  act(() => {
    fireEvent.scroll(list);
  });
  const rightArrow = getByTestId('scroll-right-button');
  const rightArrowWrapper = rightArrow.parentElement as HTMLElement; // the ref is in the parent element
  t.truthy(rightArrowWrapper);
  t.is(window.getComputedStyle(rightArrowWrapper).visibility, 'visible');
});
