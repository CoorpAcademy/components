import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import AssignmentEdition from '..';
import {makeProps} from './helpers/props';

browserEnv();
test.afterEach.always(cleanup);

const twoReminders = () => {
  const props = makeProps();
  const base = props.dates.reminders.switches[0];
  return {
    ...props,
    dates: {
      ...props.dates,
      rule: {...props.dates.rule, hint: 'The rule is locked once the assignment started.'},
      reminders: {
        ...props.dates.reminders,
        switches: [
          {...base, title: 'When the assignment starts', 'aria-label': 'start'},
          {...base, title: '1 day after the due date (overdue)', 'aria-label': 'overdue'}
        ]
      }
    }
  };
};

test.serial('each reminder toggle comes before its label, so the toggles line up', t => {
  const view = render(<AssignmentEdition {...twoReminders()} />, {wrapper: wrappingComponent});
  const rows = [
    ...view.container.querySelectorAll<HTMLElement>(
      '#assignment-dates [data-name^="switch-input-"]'
    )
  ];
  t.is(rows.length, 2);
  rows.forEach(row => {
    const toggle = row.querySelector('input') as HTMLElement;
    const label = row.querySelector('[id^="title-view-"]') as HTMLElement;
    // eslint-disable-next-line no-bitwise
    t.truthy(toggle.compareDocumentPosition(label) & Node.DOCUMENT_POSITION_FOLLOWING);
  });
});

test.serial('the rule and reminder hints use the page typography, not bare text', t => {
  const props = twoReminders();
  const view = render(<AssignmentEdition {...props} />, {wrapper: wrappingComponent});
  [props.dates.rule.hint as string, props.dates.reminders.hint].forEach(hint => {
    const node = view.getByText(hint);
    t.truthy(node.className, hint);
  });
});
