import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import QuickFilters from '..';
import defaultProps from './fixtures/default';
import someFiltersSelected from './fixtures/with-filter-button-some-filters-selected';

browserEnv();

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

test.afterEach(() => {
  cleanup();
});

test('filterButton is displayed when filterButton props is provided', t => {
  // const propsWithFilterButton = {
  //   ...defaultProps,
  //   filterButton: {
  //     label: 'Open filters',
  //     onClick: noop,
  //     iconName: 'filter'
  //   }
  // };
  const {container} = render(<QuickFilters {...defaultProps.props} />);
  const filterButton = container.querySelector('[data-name="scroll-left-button"]') as HTMLElement;
  t.truthy(filterButton);
});

test('leftArrow and rightArrow should be hidden when filters is setup', t => {
  const {container} = render(<QuickFilters {...defaultProps.props} />);
  const leftArrow = container.querySelector('[data-name="scroll-left-button"]') as HTMLElement;
  const rightArrow = container.querySelector('[data-name="scroll-right-button"]') as HTMLElement;
  t.truthy(leftArrow);
  t.truthy(rightArrow);
  t.is(leftArrow.style.visibility, 'hidden');
  t.is(rightArrow.style.visibility, 'hidden');
});

test('leftArrowButton is visible when scroll update is permitted', t => {
  scrollLeft = 120;
  const {container} = render(<QuickFilters {...someFiltersSelected.props} />);
  const leftArrow = container.querySelector('[data-name="scroll-left-button"]') as HTMLElement;
  t.truthy(leftArrow);
  t.is(leftArrow.style.visibility, 'visible');
});

test('rightArrowButton is visible when scrollWidth is inferior to scrollLeft and clientWidth', t => {
  scrollWidth = 200;
  clientWidth = 100;
  scrollLeft = 1;
  const {container} = render(<QuickFilters {...someFiltersSelected.props} />);
  const rightArrow = container.querySelector('[data-name="scroll-right-button"]') as HTMLElement;
  t.truthy(rightArrow);
  t.is(rightArrow.style.visibility, 'visible');
});

test('rightArrowButton is hidden when scrollWidth is superior to scrollLeft and clientWidth', t => {
  scrollWidth = 100;
  clientWidth = 200;
  scrollLeft = 1;
  const {container} = render(<QuickFilters {...someFiltersSelected.props} />);
  const rightArrow = container.querySelector('[data-name="scroll-right-button"]') as HTMLElement;
  t.truthy(rightArrow);
  t.is(rightArrow.style.visibility, 'hidden');
});
