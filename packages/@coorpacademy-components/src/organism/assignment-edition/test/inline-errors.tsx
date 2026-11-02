import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render, within} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import AssignmentEdition from '..';
import {makeProps} from './helpers/props';

browserEnv();
test.afterEach.always(cleanup);
const section = (view: ReturnType<typeof render>, key: string) =>
  view.container.querySelector(`#assignment-${key}`) as HTMLElement;

test.serial('a contents error is one line of text under the list, not a notification box', t => {
  const props = makeProps();
  const view = render(
    <AssignmentEdition
      {...props}
      contents={{...props.contents, error: 'Add at least one content.'}}
    />,
    {wrapper: wrappingComponent}
  );
  const [alert] = within(section(view, 'contents')).getAllByRole('alert');
  t.is(within(section(view, 'contents')).getAllByRole('alert').length, 1);
  t.is(alert.tagName, 'P');
  t.is(alert.textContent, 'Add at least one content.');
  t.is(alert.parentElement, section(view, 'contents'));
  t.is(section(view, 'contents').lastElementChild, alert);
});

test.serial('a rule error is one line of text right after the rule options', t => {
  const props = makeProps();
  const view = render(
    <AssignmentEdition
      {...props}
      dates={{...props.dates, rule: {...props.dates.rule, error: 'Choose a completion rule.'}}}
    />,
    {wrapper: wrappingComponent}
  );
  const alert = within(section(view, 'dates')).getByRole('alert');
  t.is(alert.tagName, 'P');
  t.is(alert.textContent, 'Choose a completion rule.');
  const radios = within(section(view, 'dates')).getAllByRole('radio');
  const lastRadio = radios[radios.length - 1];
  // eslint-disable-next-line no-bitwise
  t.truthy(lastRadio.compareDocumentPosition(alert) & Node.DOCUMENT_POSITION_FOLLOWING);
  // eslint-disable-next-line no-bitwise
  t.truthy(
    alert.compareDocumentPosition(view.getByText(props.dates.reminders.hint)) &
      Node.DOCUMENT_POSITION_FOLLOWING
  );
});

test.serial('no error props render no alert', t => {
  const view = render(<AssignmentEdition {...makeProps()} />, {wrapper: wrappingComponent});
  t.is(view.queryAllByRole('alert').length, 0);
});
