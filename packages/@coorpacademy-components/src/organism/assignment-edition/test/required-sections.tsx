import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render, within} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import AssignmentEdition from '..';
import {makeProps} from './helpers/props';

browserEnv();
test.afterEach.always(cleanup);

test.serial('only the title has a required marker and explains its character limits', t => {
  const props = makeProps();
  const view = render(<AssignmentEdition {...props} />, {wrapper: wrappingComponent});
  const information = view.container.querySelector('#assignment-information') as HTMLElement;
  t.true((within(information).getByRole('textbox') as HTMLInputElement).required);
  t.truthy(within(information).getByText('*'));
  t.is(view.getAllByText('*').length, 1);
  t.truthy(view.getByText('Enter a title of 3–100 characters.'));
  t.truthy(
    view.getByText(
      'Fields marked with * are required to save a draft. All fields are required to publish.'
    )
  );
});

test.serial('dates, completion rule and notifications occupy separate sibling cards', t => {
  const props = makeProps();
  const view = render(<AssignmentEdition {...props} />, {wrapper: wrappingComponent});
  const dates = view.container.querySelector('#assignment-dates') as HTMLElement;
  const rule = view.container.querySelector('#assignment-rule') as HTMLElement;
  const notifications = view.container.querySelector('#assignment-notifications') as HTMLElement;
  t.is(dates.parentElement, rule.parentElement);
  t.is(rule.parentElement, notifications.parentElement);
  t.is(dates.nextElementSibling, rule);
  t.is(rule.nextElementSibling, notifications);
  t.is(dates.className, rule.className);
  t.is(rule.className, notifications.className);
  t.is(within(dates).queryByRole('radio'), null);
  t.is(within(dates).queryByRole('checkbox'), null);
  t.is(within(rule).getAllByRole('radio').length, props.dates.rule.options.length);
  t.is(within(notifications).queryByRole('radio'), null);
  t.truthy(within(notifications).getByText('Notifications'));
});
