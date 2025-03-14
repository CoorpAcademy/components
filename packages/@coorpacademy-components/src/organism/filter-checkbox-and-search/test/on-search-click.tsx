import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent} from '@testing-library/react';
import FilterCheckboxAndSearch from '..';
import {renderWithContext} from '../../../util/render-with-context';

browserEnv();

test.afterEach(() => {
  cleanup();
});

test('should setSearchValue on search input change', t => {
  // t.plan3);
  const context = {
    translate: (key: string) => key
  };
  const props = {
    title: 'Skills',
    placeholder: 'Search for a skill',
    onClear: () => {
      console.log('clear filters');
    },
    withSearch: true,
    options: [
      {
        label: 'Active listening',
        value: 'active-listening',
        selected: false,
        reference: 'skill_94',
        count: 104,
        onClick: () => {
          console.log('active listening selected');
        }
      },
      {
        label: 'Resilience and wellbeing',
        value: 'resilience-and-wellbeing',
        selected: false,
        reference: 'skill_95',
        count: 184,
        onClick: () => {
          console.log('Resilience and wellbeing selected');
        }
      },
      {
        label: 'Agility',
        value: 'agility',
        selected: false,
        reference: 'skill_96',
        count: 234,
        onClick: () => {
          console.log('Agility selected');
        }
      },
      {
        label: 'Analytical and Critical Thinking',
        value: 'analytical-and-critical-thinking',
        selected: false,
        reference: 'skill_97',
        count: 75,
        onClick: () => {
          console.log('Analytical and Critical Thinking selected');
        }
      }
    ]
  };
  const {container, rerender} = renderWithContext(<FilterCheckboxAndSearch {...props} />, {
    context
  });
  const searchInput = container.querySelector(
    '[data-testid="filter-checkbox-and-search-searchinput"]'
  ) as HTMLInputElement;
  t.truthy(searchInput);
  fireEvent.change(searchInput, {target: {value: 'no-value-result'}});
  t.is(searchInput.value, 'no-value-result');
  rerender(<FilterCheckboxAndSearch {...props} />);
  const optionRow = container.querySelectorAll(
    '[data-testid="filter-checkbox-and-search-option-row"]'
  );
  t.truthy(optionRow);
  // console.log(optionRow.length);
  t.is(optionRow.length, 0);
});
