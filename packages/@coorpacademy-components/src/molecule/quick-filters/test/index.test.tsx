import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import QuickFilters from '..';

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

test('clicking left arrow calls scrollBy with -120', t => {
  const {container} = render(<QuickFilters {...defaultProps} />);
  const list = container.querySelector(`.${'filtersList'}`) || container.querySelector('div');
  const calls: any[] = [];
  if (list) list.scrollBy = (opts: any) => calls.push(opts);

  const leftBtn = container.querySelector('[data-name="scroll-left-button"]') as HTMLDivElement;
  t.truthy(leftBtn);
  fireEvent.click(leftBtn);

  t.deepEqual(calls, [{left: -120, behavior: 'smooth'}]);
});

test('clicking right arrow calls scrollBy with 120', t => {
  const {container} = render(<QuickFilters {...defaultProps} />);
  const list = container.querySelector(`.${'filtersList'}`) || container.querySelector('div');
  const calls: any[] = [];
  if (list) list.scrollBy = (opts: any) => calls.push(opts);

  const rightBtn = container.querySelector('[data-name="scroll-right-button"]') as HTMLDivElement;
  t.truthy(rightBtn);
  fireEvent.click(rightBtn);

  t.deepEqual(calls, [{left: 120, behavior: 'smooth'}]);
});
