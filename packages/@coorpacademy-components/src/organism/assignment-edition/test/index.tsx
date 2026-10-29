import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {cleanup, fireEvent, render, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {wrappingComponent} from '../../../test/helpers/render-component';
import AssignmentEdition from '..';
import {makeProps} from './helpers/props';

browserEnv();
test.afterEach.always(cleanup);
const mount = (props = makeProps()) =>
  render(<AssignmentEdition {...props} />, {wrapper: wrappingComponent});
const keys = ['information', 'audience', 'contents', 'dates'] as const;

test.serial(
  'sections have stable anchors and render information audience contents dates in order',
  t => {
    const view = mount();
    const sections = [...view.container.querySelectorAll('[id^="assignment-"]')];
    t.deepEqual(
      sections.map(section => section.id),
      keys.map(key => `assignment-${key}`)
    );
    sections.forEach(section => t.is(section.getAttribute('data-name'), section.id));
  }
);

test.serial('information delegates text field and forwards its string callback', t => {
  const props = makeProps();
  const values: string[] = [];
  props.information.field.onChange = value => values.push(value);
  const view = mount(props);
  t.truthy(view.getByText('Name this assignment'));
  const input = view.getByRole('textbox', {
    name: 'Input Text'
  }) as HTMLInputElement;
  t.is(input.type, 'text');
  t.is(input.maxLength, 100);
  t.is(input.value, 'Safety onboarding');
  fireEvent.input(input, {target: {value: 'New title'}});
  t.deepEqual(values, ['New title']);
  view.rerender(
    <AssignmentEdition
      {...props}
      information={{
        ...props.information,
        field: {...props.information.field, value: 'Consumer title'}
      }}
    />
  );
  t.is(input.value, 'Consumer title');
});

test.serial('audience forwards optional blocks and callbacks', t => {
  const props = makeProps();
  const calls: unknown[] = [];
  props.audience = {
    ...props.audience,
    everyone: {
      ...props.audience.everyone!,
      onChange: value => calls.push(value)
    },
    individuals: {
      ...props.audience.individuals!,
      onRemove: value => calls.push(value)
    }
  };
  const view = mount(props);
  const audience = within(view.container.querySelector('#assignment-audience') as HTMLElement);
  fireEvent.click(
    audience.getByRole('checkbox', {
      name: 'Assign to every learner of the platform'
    })
  );
  fireEvent.click(audience.getByRole('button', {name: 'Remove Camille Durand'}));
  t.deepEqual(calls, [true, 'u1']);
  view.rerender(
    <AssignmentEdition
      {...props}
      audience={{
        title: 'Audience',
        team: {label: 'All My Team', name: 'Sales FR'}
      }}
    />
  );
  t.truthy(audience.getByText('Sales FR'));
  t.is(audience.queryByRole('checkbox'), null);
  t.is(audience.queryByRole('combobox'), null);
});

test.serial('contents delegates selection addition and independent deletions', t => {
  const props = makeProps();
  const calls: unknown[] = [];
  props.contents = {
    ...props.contents,
    button: {label: 'Add content', onClick: () => calls.push('add')},
    checkboxWithTitle: {
      title: '2 items',
      checked: false,
      onChange: value => calls.push(value)
    },
    actionButtons: [{label: 'Delete selected', onClick: () => calls.push('batch')}],
    list: {
      ...props.contents.list,
      items: props.contents.list.items!.map((item, index) => ({
        ...item,
        checkbox: {
          checked: false,
          onChange: value => calls.push([index, value])
        },
        deleteButton: {
          'aria-label': 'Delete',
          onClick: () => calls.push(index)
        }
      }))
    }
  };
  const view = mount(props);
  const section = within(view.container.querySelector('#assignment-contents') as HTMLElement);
  fireEvent.click(section.getByRole('button', {name: 'Add content'}));
  fireEvent.click(section.getByRole('checkbox', {name: '2 items'}));
  fireEvent.click(section.getAllByRole('checkbox')[1]);
  fireEvent.click(section.getByRole('button', {name: 'Delete selected'}));
  fireEvent.click(section.getAllByRole('button', {name: 'Delete'})[1]);
  t.deepEqual(calls, ['add', true, [0, true], 'batch', 1]);
  t.truthy(section.getByText('Hidden'));
});

test.serial('dates preserve bounds GMT hints and independent callbacks', t => {
  const props = makeProps();
  const calls: unknown[] = [];
  props.dates = {
    ...props.dates,
    fields: props.dates.fields.map((field, index) => ({
      ...field,
      onChange: value => calls.push([index, value])
    })),
    rule: {
      ...props.dates.rule,
      hint: 'Choose a completion rule',
      options: props.dates.rule.options.map((option, index) => ({
        ...option,
        onChange: value => calls.push([index, value])
      }))
    },
    reminders: {
      ...props.dates.reminders,
      switches: [
        {
          ...props.dates.reminders.switches[0],
          onChange: value => calls.push(value)
        }
      ]
    }
  };
  const view = mount(props);
  const start = view.getByLabelText('Start date') as HTMLInputElement;
  const end = view.getByLabelText('End date') as HTMLInputElement;
  t.is(start.value, '2026-11-03');
  t.is(start.min, '2026-11-01');
  t.is(end.min, '2026-11-03');
  t.is(view.getAllByText('GMT').length, 2);
  t.truthy(view.getByText('Start in GMT'));
  fireEvent.input(start, {target: {value: '2026-11-04'}});
  fireEvent.input(end, {target: {value: '2026-12-04'}});
  const radios = view.getAllByRole('radio') as HTMLInputElement[];
  t.true(radios.every(radio => !radio.checked));
  t.is(radios[0].name, radios[1].name);
  fireEvent.click(radios[1]);
  t.false(radios[1].checked);
  fireEvent.click(view.getByRole('checkbox', {name: 'Send reminders'}));
  t.deepEqual(calls, [[0, '2026-11-04'], [1, '2026-12-04'], [1, true], false]);
  t.truthy(view.getByText('Example: one of two'));
  t.is(view.getAllByText('Choose a completion rule').length, 1);
});

keys.forEach(key => {
  test.serial(`errors appear once beneath their own section title: ${key}`, t => {
    const props = makeProps();
    props[key] = {...props[key], error: 'Section needs attention'} as never;
    const view = mount(props);
    keys.forEach(section => {
      const element = view.container.querySelector(`#assignment-${section}`) as HTMLElement;
      t.is(within(element).queryAllByRole('alert').length, section === key ? 1 : 0);
      if (section === key && (key === 'information' || key === 'dates')) {
        const alert = within(element).getByRole('alert');
        t.true(Boolean(alert.compareDocumentPosition(element.querySelector('input')!) & 4));
      }
    });
    view.rerender(<AssignmentEdition {...makeProps()} />);
    t.is(view.queryByRole('alert'), null);
  });
});

test.serial('busy disables every section and preserves controls', async t => {
  const props = makeProps();
  const calls: unknown[] = [];
  props.information.field.onChange = value => calls.push(value);
  props.contents.button.onClick = () => calls.push('add');
  props.contents.list = {
    ...props.contents.list,
    search: {
      value: '',
      placeholder: 'Search modules',
      onChange: value => calls.push(value)
    }
  };
  props.dates.fields[0] = {...props.dates.fields[0], disabled: true};
  props.dates.rule.disabled = true;
  const view = mount({...props, busy: true});
  const controls = [...view.container.querySelectorAll('input, button, select, textarea')];
  t.true(controls.length > 15);
  t.deepEqual(
    controls
      .filter(control => !control.matches(':disabled') && !control.closest('fieldset[disabled]'))
      .map(control => control.outerHTML),
    []
  );
  t.is(
    within(view.container.querySelector('#assignment-contents') as HTMLElement).getAllByRole(
      'checkbox'
    ).length,
    3
  );
  const user = userEvent.setup({document});
  await user.click(view.getByRole('button', {name: 'Add content'}));
  await user.type(view.getByRole('textbox', {name: 'Input Text'}), 'changed');
  t.deepEqual(calls, []);
  view.rerender(<AssignmentEdition {...props} busy={false} />);
  t.false(view.getByRole('button', {name: 'Add content'}).matches(':disabled'));
  t.true(view.getByLabelText('Start date').matches(':disabled'));
  t.true(view.getAllByRole('radio').every(radio => radio.matches(':disabled')));
  view.rerender(
    <AssignmentEdition
      {...props}
      audience={{...props.audience, disabled: true}}
      contents={{...props.contents, disabled: true}}
    />
  );
  t.true(view.getByRole('button', {name: 'Add content'}).matches(':disabled'));
  t.true(
    view
      .getByRole('checkbox', {
        name: 'Assign to every learner of the platform'
      })
      .matches(':disabled')
  );
});

test.serial('fetching renders only the Coorpmanager loader', t => {
  const props = makeProps();
  const view = mount({
    ...props,
    busy: true,
    isFetching: true,
    focusSection: 'contents',
    information: {...props.information, error: 'Missing'}
  });
  t.truthy(view.container.querySelector('[data-name="loader"]'));
  t.is(view.container.querySelector('[id^="assignment-"]'), null);
  t.is(view.queryByRole('alert'), null);
  t.is(view.queryByRole('textbox'), null);
  view.rerender(<AssignmentEdition {...props} />);
  t.truthy(view.container.querySelector('#assignment-information'));
});

test.serial('static server rendering does not need browser effects', t => {
  t.notThrows(() => renderToString(<AssignmentEdition {...makeProps()} focusSection="contents" />));
});

test.serial('audience preserves population file and learner callback payloads', t => {
  const props = makeProps();
  const calls: unknown[] = [];
  const learner = {id: 'marc', label: 'Marc Dubois', login: 'm.dubois'};
  props.audience = {
    ...props.audience,
    populations: {
      ...props.audience.populations!,
      onChange: options => calls.push(options)
    },
    upload: {
      ...props.audience.upload!,
      status: 'idle',
      onUpload: file => calls.push(file)
    },
    individuals: {
      ...props.audience.individuals!,
      suggestions: [learner],
      onSearch: query => calls.push(query),
      onAdd: value => calls.push(value)
    }
  };
  const view = mount(props);
  const section = view.container.querySelector('#assignment-audience') as HTMLElement;
  fireEvent.click(section.querySelector('[data-name="select-languages"]')!);
  fireEvent.click(section.querySelectorAll('[data-name="populations"] input[type="checkbox"]')[2]);
  t.deepEqual(
    calls[0],
    props.audience.populations!.options.map(option => ({
      ...option,
      selected: true
    }))
  );
  const file = new window.File(['login'], 'learners.csv');
  fireEvent.change(section.querySelector('input[type="file"]')!, {
    target: {files: [file]}
  });
  t.is(calls[1], file);
  const input = view.getByTestId('autocomplete-input');
  fireEvent.input(input, {target: {value: 'marc'}});
  t.is(calls[2], 'marc');
  view.rerender(
    <AssignmentEdition
      {...props}
      audience={{
        ...props.audience,
        individuals: {...props.audience.individuals!, value: 'marc'}
      }}
    />
  );
  fireEvent.focus(input);
  fireEvent.click(view.getByRole('option'));
  t.is(calls[3], learner);
});
