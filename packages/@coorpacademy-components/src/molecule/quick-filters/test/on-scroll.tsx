import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import QuickFilters from '..';

browserEnv();

const defaultProps = {
  primaryOption: {
    defaultLabel: 'All content',
    defaultValue: 'all-content',
    defaultIconName: 'grid-2',
    defaultSelected: true,
    onDefaultClick: () => {
      console.log('default All content clicked');
    }
  },
  filterOptions: [
    {
      iconName: 'shapes',
      label: 'Skills',
      value: 'skills',
      onClick: () => {
        console.log('skills selected');
      },
      selected: false
    },
    {
      iconName: 'wreath-laurel',
      label: 'Certificates',
      value: 'certificates',
      onClick: () => {
        console.log('certificates selected');
      },
      selected: false
    },
    {
      iconName: 'lines-leaning',
      label: 'Playlists',
      value: 'playlists',
      onClick: () => {
        console.log('playlists selected');
      },
      selected: false
    },
    {
      iconName: 'book-open',
      label: 'Courses',
      value: 'courses',
      onClick: () => {
        console.log('Courses selected');
      },
      selected: false
    },
    {
      iconName: 'stopwatch',
      label: `5'learning`,
      value: '5-learning',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false
    },
    {
      iconName: 'rectangle-history',
      label: 'Interactives',
      value: 'interactives',
      onClick: () => {
        console.log('interactives selected');
      },
      selected: false
    },
    {
      iconName: 'circle-play',
      label: 'Videos',
      value: 'videos',
      onClick: () => {
        console.log('videos selected');
      },
      selected: false
    },
    {
      iconName: 'circle-play',
      label: 'Podcasts',
      value: 'podcasts',
      onClick: () => {
        console.log('podcast selected');
      },
      selected: false
    },
    {
      iconName: 'file-lines',
      label: 'Documents',
      value: 'documents',
      onClick: () => {
        console.log('documents selected');
      },
      selected: false
    },
    {
      iconName: 'stopwatch',
      label: "5'learning 1",
      value: '5-learning-1',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 2`,
      value: '5-learning-2',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false
    },
    {
      iconName: 'stopwatch',
      label: `5'learnin 3`,
      value: '5-learning-3',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 4`,
      value: '5-learning-4',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false
    }
  ]
};

const mockComputedStyle = () => {
  Object.defineProperty(window, 'getComputedStyle', {
    value: (el: HTMLElement) => ({visibility: el.style.visibility}),
    configurable: true
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

test('leftArrow and rightArrow should be hidden when filters is setup', t => {
  const {container} = render(<QuickFilters {...defaultProps} />);
  const leftArrow = container.querySelector('[data-name="scroll-left-button"]') as HTMLElement;
  const rightArrow = container.querySelector('[data-name="scroll-right-button"]') as HTMLElement;
  t.truthy(leftArrow);
  t.truthy(rightArrow);
  t.is(leftArrow.style.visibility, 'hidden');
  t.is(rightArrow.style.visibility, 'hidden');
});

test('leftArrowButton is visible when scroll update is permitted', t => {
  scrollLeft = 120; // default user behavior pixel scrolled
  const {container} = render(<QuickFilters {...defaultProps} />);
  const leftArrow = container.querySelector('[data-name="scroll-left-button"]') as HTMLElement;
  t.truthy(leftArrow);
  t.is(leftArrow.style.visibility, 'visible');
});

test('rightArrowButton is visible when scrollWidth is inferior to scrollLeft and clientWidth', t => {
  scrollWidth = 200;
  clientWidth = 100;
  scrollLeft = 1;
  const {container} = render(<QuickFilters {...defaultProps} />);
  const rightArrow = container.querySelector('[data-name="scroll-right-button"]') as HTMLElement;
  t.truthy(rightArrow);
  t.is(rightArrow.style.visibility, 'visible');
});

test('rightArrowButton is hidden when scrollWidth is superior to scrollLeft and clientWidth', t => {
  scrollWidth = 100;
  clientWidth = 200;
  scrollLeft = 1;
  const {container} = render(<QuickFilters {...defaultProps} />);
  const rightArrow = container.querySelector('[data-name="scroll-right-button"]') as HTMLElement;
  t.truthy(rightArrow);
  t.is(rightArrow.style.visibility, 'hidden');
});
