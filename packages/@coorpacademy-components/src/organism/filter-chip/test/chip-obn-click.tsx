import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import {renderWithContext} from '../../../util/render-with-context';
import FilterChip from '..';
import filterChipProps from './fixtures/no-selected';

browserEnv();

test('should launch onClick on click event', t => {
  t.plan(3);

  const props = {
    ...filterChipProps.props,
    options: [
      {
        label: 'Courses',
        type: 'course',
        selected: false,
        icon: 'fa-book-open',
        onClick: (type: string) => {
          t.is(type, 'course');
        }
      }
    ]
  };

  const {container} = renderWithContext(<FilterChip {...props} />);

  const chip = container.querySelector('[data-name="chip-Courses"]');
  t.truthy(chip);

  fireEvent.click(chip as Element);

  t.pass();
});
