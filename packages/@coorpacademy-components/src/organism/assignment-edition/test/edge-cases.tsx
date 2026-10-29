import test from 'ava';
import browserEnv from 'browser-env';
import React, {useState} from 'react';
import {cleanup, fireEvent, render, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {wrappingComponent} from '../../../test/helpers/render-component';
import AssignmentEdition from '..';
import {makeProps} from './helpers/props';

browserEnv();
const selection = Object.getOwnPropertyDescriptor(document, 'getSelection');
test.beforeEach(() => {
  // Older jsdom lacks the document selection API used when user-event moves focus.
  document.getSelection = () => null;
});
test.afterEach.always(() => {
  cleanup();
  if (selection) Object.defineProperty(document, 'getSelection', selection);
  else delete (document as Partial<Document>).getSelection;
});
const mount = (props = makeProps()) =>
  render(<AssignmentEdition {...props} />, {wrapper: wrappingComponent});

test.serial('title accepts 100 characters and prevents a 101st character', async t => {
  const initial = makeProps();
  const values: string[] = [];
  const Consumer = () => {
    const [value, setValue] = useState('a'.repeat(99));
    return (
      <AssignmentEdition
        {...initial}
        information={{
          ...initial.information,
          field: {
            ...initial.information.field,
            value,
            onChange: next => {
              values.push(next);
              setValue(next);
            }
          }
        }}
      />
    );
  };
  const view = render(<Consumer />, {wrapper: wrappingComponent});
  const input = view.getByRole('textbox', {name: 'Input Text'}) as HTMLInputElement;
  const user = userEvent.setup({document});
  await user.type(input, 'bc');
  t.deepEqual(values, [`${'a'.repeat(99)}b`]);
  t.is(input.value, `${'a'.repeat(99)}b`);
});

test.serial('clearing title and dates forwards empty strings and accepts consumer reset', t => {
  const props = makeProps();
  const calls: unknown[] = [];
  props.information.field.onChange = value => calls.push(['title', value]);
  props.dates.fields = props.dates.fields.map((field, index) => ({
    ...field,
    max: '2027-01-01',
    required: true,
    onChange: value => calls.push([index, value])
  }));
  const view = mount(props);
  const title = view.getByRole('textbox', {name: 'Input Text'}) as HTMLInputElement;
  const start = view.getByLabelText('Start date') as HTMLInputElement;
  const end = view.getByLabelText('End date') as HTMLInputElement;
  t.is(start.max, '2027-01-01');
  t.true(start.required);
  [title, start, end].forEach(input => fireEvent.input(input, {target: {value: ''}}));
  t.deepEqual(calls, [
    ['title', ''],
    [0, ''],
    [1, '']
  ]);
  view.rerender(
    <AssignmentEdition
      {...props}
      information={{...props.information, field: {...props.information.field, value: ''}}}
      dates={{...props.dates, fields: props.dates.fields.map(field => ({...field, value: ''}))}}
    />
  );
  t.deepEqual([title.value, start.value, end.value], ['', '', '']);
  t.deepEqual(calls, [
    ['title', ''],
    [0, ''],
    [1, '']
  ]);
});

test.serial('minimal optional blocks and empty date controls preserve the four sections', t => {
  const props = makeProps();
  props.audience = {title: 'Audience'};
  props.contents = {
    title: 'Contents',
    button: {label: 'Add content', onClick: () => undefined},
    list: {}
  };
  props.dates.fields = [];
  props.dates.rule.options = [];
  props.dates.reminders.switches = [];
  const view = mount(props);
  t.is(view.container.querySelectorAll('[id^="assignment-"]').length, 4);
  const audience = within(view.container.querySelector('#assignment-audience') as HTMLElement);
  t.is(audience.queryByRole('checkbox'), null);
  t.is(audience.queryByRole('combobox'), null);
  const dates = within(view.container.querySelector('#assignment-dates') as HTMLElement);
  t.truthy(dates.getByText('Dates'));
  t.truthy(dates.getByText('Completion rule'));
  t.is(dates.queryByRole('radio'), null);
  t.is(dates.queryByRole('checkbox'), null);
  t.truthy(view.getByRole('button', {name: 'Add content'}));
});

test.serial(
  'busy transitions preserve individual information date rule and reminder locks',
  async t => {
    const props = makeProps();
    const calls: unknown[] = [];
    props.information.field.disabled = true;
    props.information.field.onChange = value => calls.push(value);
    props.dates.fields[0].disabled = true;
    props.dates.rule.options[0].disabled = true;
    props.dates.rule.options[0].hint = 'This option is unavailable';
    props.dates.rule.options[0].onChange = value => calls.push(['locked-rule', value]);
    props.dates.rule.options[1].onChange = value => calls.push(['rule', value]);
    props.dates.reminders.switches = [
      {
        name: 'locked',
        'aria-label': 'Locked reminder',
        value: true,
        disabled: true,
        onChange: value => calls.push(['locked-reminder', value])
      },
      {
        name: 'editable',
        'aria-label': 'Editable reminder',
        value: false,
        onChange: value => calls.push(['reminder', value])
      }
    ];
    const view = mount({...props, busy: true});
    view.rerender(<AssignmentEdition {...props} busy={false} />);
    const locked = [
      view.getByRole('textbox', {name: 'Input Text'}),
      view.getByLabelText('Start date'),
      view.getByRole('radio', {name: 'All modules'}),
      view.getByRole('checkbox', {name: 'Locked reminder'})
    ];
    t.true(locked.every(control => control.matches(':disabled')));
    t.false(view.getByLabelText('End date').matches(':disabled'));
    t.truthy(view.getByText('This option is unavailable'));
    const user = userEvent.setup({document});
    await user.pointer(locked.map(target => ({target, keys: '[MouseLeft]'})));
    t.deepEqual(calls, []);
    await user.click(view.getByRole('radio', {name: 'Any module'}));
    await user.click(view.getByRole('checkbox', {name: 'Editable reminder'}));
    t.deepEqual(calls, [
      ['rule', true],
      ['reminder', true]
    ]);
  }
);

test.serial('radio groups stay independent across editors and stable across rerenders', t => {
  const props = makeProps();
  props.dates.rule.options = props.dates.rule.options.map(option => ({
    title: {title: option.title.title},
    onChange: option.onChange
  }));
  const pages = (busy = false) => (
    <div>
      <AssignmentEdition {...props} busy={busy} />
      <AssignmentEdition {...props} />
    </div>
  );
  const view = render(pages(), {wrapper: wrappingComponent});
  const radios = view.getAllByRole('radio') as HTMLInputElement[];
  t.true(radios.every(radio => !radio.checked));
  t.truthy(radios[0].name);
  t.is(radios[0].name, radios[1].name);
  t.is(radios[2].name, radios[3].name);
  t.not(radios[0].name, radios[2].name);
  const names = radios.map(radio => radio.name);
  view.rerender(pages(true));
  t.deepEqual(
    (view.getAllByRole('radio') as HTMLInputElement[]).map(radio => radio.name),
    names
  );
});

test.serial('simultaneous section errors render literal text and clear independently', t => {
  const props = makeProps();
  const keys = ['information', 'audience', 'contents', 'dates'] as const;
  keys.forEach(key => {
    props[key].error = `<img src=x onerror=alert(1)> ${key}`;
  });
  const view = mount(props);
  t.is(view.getAllByRole('alert').length, 4);
  keys.forEach(key => {
    const section = view.container.querySelector(`#assignment-${key}`) as HTMLElement;
    t.truthy(
      within(within(section).getByRole('alert')).getByText(`<img src=x onerror=alert(1)> ${key}`)
    );
    t.is(section.querySelector('[onerror]'), null);
  });
  view.rerender(<AssignmentEdition {...props} contents={{...props.contents, error: undefined}} />);
  t.is(view.getAllByRole('alert').length, 3);
  t.is(
    within(view.container.querySelector('#assignment-contents') as HTMLElement).queryByRole(
      'alert'
    ),
    null
  );
});
