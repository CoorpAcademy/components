import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render, within} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import AssignmentEdition from '..';
import {makeProps} from './helpers/props';

browserEnv();
test.afterEach.always(cleanup);

test.serial(
  'only the title section heading has a required marker and the field explains its limits',
  t => {
    const props = makeProps();
    const view = render(<AssignmentEdition {...props} />, {wrapper: wrappingComponent});
    const information = view.container.querySelector('#assignment-information') as HTMLElement;
    t.true((within(information).getByRole('textbox') as HTMLInputElement).required);
    const marker = within(information).getByText('*');
    const heading = within(information).getByText(props.information.title, {
      exact: false,
      selector: '[role="group"]'
    });
    t.is(marker.parentElement, heading);
    t.is(
      within(information).getByRole('textbox').closest('label')?.firstElementChild?.textContent,
      props.information.field.title
    );
    t.is(view.getAllByText('*').length, 2);
    t.truthy(view.getByText('Enter a title of 3–100 characters.'));
    const legend = view.getByText('Fields marked with', {exact: false});
    t.is(legend.textContent, props.requiredFieldsHint?.replace(/\*\*/g, '') || '');
    t.truthy(within(legend).getByText('*'));
    t.deepEqual(
      [...legend.querySelectorAll('strong')].map(element => element.textContent),
      ['save a draft', 'publish']
    );
  }
);

test.serial('the required-field legend preserves translated text without interpreting HTML', t => {
  const props = makeProps();
  props.requiredFieldsHint = '**Publier** requiert tous les champs. * <b>Texte littéral</b>';
  const view = render(<AssignmentEdition {...props} />, {wrapper: wrappingComponent});
  const legend = view.getByText('requiert tous les champs.', {exact: false});
  t.is(legend.textContent, props.requiredFieldsHint.replace(/\*\*/g, ''));
  t.truthy(within(legend).getByText('*'));
  t.is(within(legend).getByText('Publier').tagName, 'STRONG');
  t.is(legend.querySelector('b'), null);
});

test.serial('the title input respects the character limit supplied by the application', t => {
  const props = makeProps();
  props.information.field.maxLength = 80;
  props.information.field.hint = 'Enter a title of 5–80 characters.';
  const view = render(<AssignmentEdition {...props} />, {wrapper: wrappingComponent});
  const information = view.container.querySelector('#assignment-information') as HTMLElement;
  t.is((within(information).getByRole('textbox') as HTMLInputElement).maxLength, 80);
  t.truthy(view.getByText('Enter a title of 5–80 characters.'));
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
