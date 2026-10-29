import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent, render, within} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import ListItem from '..';
import checkbox from './fixtures/checkbox';
import selected from './fixtures/checkbox-selected';
import deletable from './fixtures/checkbox-deletable';

browserEnv();
test.afterEach.always(cleanup);

test.serial('legacy checkbox rows keep their controls and have no sub-items', t => {
  [checkbox, selected, deletable].forEach(fixture => {
    const changes: boolean[] = [];
    const view = render(
      <ListItem
        {...fixture.props}
        checkbox={{
          ...fixture.props.checkbox,
          onChange: (value: boolean) => changes.push(value)
        }}
      />,
      {wrapper: wrappingComponent}
    );
    const input = view.getByRole('checkbox') as HTMLInputElement;
    t.is(input.checked, fixture.props.checkbox.checked);
    fireEvent.click(input);
    t.deepEqual(changes, [!fixture.props.checkbox.checked]);
    t.is(view.container.querySelector('[data-name="list-item-sub-items"]'), null);
    if (fixture === deletable) t.truthy(view.getByRole('button', {name: 'Delete'}));
    view.unmount();
  });
});

const courseProps = () => {
  const calls: {parent: boolean[]; row: string[]; modules: boolean[][]} = {
    parent: [],
    row: [],
    modules: [[], [], []]
  };
  return {
    calls,
    props: {
      title: 'Team cohesion',
      checkbox: {checked: false, onChange: (value: boolean) => calls.parent.push(value)},
      onClick: () => calls.row.push('course'),
      subItems: ['Getting started', 'Working together', 'Resolving conflict'].map(
        (title, index) => ({
          ref: `module-${index}`,
          title,
          checkbox: {
            checked: index === 0,
            onChange: (value: boolean) => calls.modules[index].push(value)
          }
        })
      )
    }
  };
};

test.serial('three modules render below the course with supplied checked values', t => {
  const {props} = courseProps();
  const view = render(<ListItem {...props} />, {wrapper: wrappingComponent});
  const list = view.container.querySelector(
    '[data-name="list-item-sub-items"]'
  ) as HTMLUListElement;
  t.truthy(list);
  t.is(list.tagName, 'UL');
  t.is(list.children.length, 3);
  t.true([...list.children].every(child => child.tagName === 'LI'));
  t.truthy(list.previousElementSibling?.textContent?.includes('Team cohesion'));
  t.deepEqual(
    props.subItems.map(item => (view.getByLabelText(item.title) as HTMLInputElement).checked),
    [true, false, false]
  );
  t.is(view.container.querySelectorAll('input[type="checkbox"]').length, 4);
});

test.serial('disabled module cannot call its callback', t => {
  const {props, calls} = courseProps();
  const subItems = props.subItems.map((item, index) => ({...item, disabled: index === 1}));
  const view = render(<ListItem {...props} subItems={subItems} />, {wrapper: wrappingComponent});
  const input = view.getByLabelText('Working together') as HTMLInputElement;
  t.true(input.disabled);
  fireEvent.click(view.getByText('Working together').closest('label') as HTMLLabelElement);
  t.deepEqual(calls, {parent: [], row: [], modules: [[], [], []]});
});

test.serial('second module calls only its callback with true', t => {
  const {props, calls} = courseProps();
  const view = render(<ListItem {...props} />, {wrapper: wrappingComponent});
  fireEvent.click(view.getByText('Working together').closest('label') as HTMLLabelElement);
  t.deepEqual(calls, {parent: [], row: [], modules: [[], [true], []]});
});

test.serial('checked module calls its callback with false', t => {
  const {props, calls} = courseProps();
  const view = render(<ListItem {...props} />, {wrapper: wrappingComponent});
  fireEvent.click(view.getByText('Getting started').closest('label') as HTMLLabelElement);
  t.deepEqual(calls, {parent: [], row: [], modules: [[false], [], []]});
});

test.serial('rerender reflects consumer selection without internal state', t => {
  const {props, calls} = courseProps();
  const view = render(<ListItem {...props} />, {wrapper: wrappingComponent});
  fireEvent.click(view.getByText('Working together').closest('label') as HTMLLabelElement);
  t.false((view.getByLabelText('Working together') as HTMLInputElement).checked);
  view.rerender(
    <ListItem
      {...props}
      checkbox={{...props.checkbox, checked: true}}
      subItems={props.subItems.map(item => ({
        ...item,
        checkbox: {...item.checkbox, checked: true}
      }))}
    />
  );
  t.true(
    [...view.container.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')].every(
      input => input.checked
    )
  );
  t.deepEqual(calls, {parent: [], row: [], modules: [[], [true], []]});
});

test.serial('absent or empty subItems adds no subtree', t => {
  const view = render(<ListItem {...checkbox.props} />, {wrapper: wrappingComponent});
  const legacy = view.container.innerHTML;
  view.rerender(<ListItem {...checkbox.props} subItems={[]} />);
  t.is(view.container.innerHTML, legacy);
  t.is(view.container.querySelector('[data-name="list-item-sub-items"]'), null);
});

test.serial('disabled course does not disable enabled modules', t => {
  const {props, calls} = courseProps();
  const view = render(<ListItem {...props} disabled />, {wrapper: wrappingComponent});
  t.false((view.getByLabelText('Working together') as HTMLInputElement).disabled);
  fireEvent.click(view.getByText('Working together').closest('label') as HTMLLabelElement);
  t.deepEqual(calls, {parent: [], row: [], modules: [[], [true], []]});
});

test.serial('module callback replacement uses the latest handler for the same ref', t => {
  const {props, calls} = courseProps();
  const replacement: boolean[] = [];
  const view = render(<ListItem {...props} />, {wrapper: wrappingComponent});
  view.rerender(
    <ListItem
      {...props}
      subItems={props.subItems.map((item, index) =>
        index === 1
          ? {...item, checkbox: {...item.checkbox, onChange: value => replacement.push(value)}}
          : item
      )}
    />
  );
  t.deepEqual(replacement, []);
  fireEvent.click(view.getByText('Working together').closest('label') as HTMLLabelElement);
  t.deepEqual(replacement, [true]);
  t.deepEqual(calls, {parent: [], row: [], modules: [[], [], []]});
});

test.serial('module disabled changes preserve its checked value and block label activation', t => {
  const {props, calls} = courseProps();
  const view = render(<ListItem {...props} />, {wrapper: wrappingComponent});
  view.rerender(
    <ListItem
      {...props}
      subItems={props.subItems.map((item, index) => ({...item, disabled: index === 0}))}
    />
  );
  const input = view.getByLabelText('Getting started') as HTMLInputElement;
  t.true(input.checked);
  t.true(input.disabled);
  fireEvent.click(view.getByText('Getting started').closest('label') as HTMLLabelElement);
  t.true(input.checked);
  t.deepEqual(calls, {parent: [], row: [], modules: [[], [], []]});
  view.rerender(<ListItem {...props} />);
  t.false((view.getByLabelText('Getting started') as HTMLInputElement).disabled);
  fireEvent.click(view.getByText('Getting started').closest('label') as HTMLLabelElement);
  t.deepEqual(calls, {parent: [], row: [], modules: [[false], [], []]});
  t.true((view.getByLabelText('Getting started') as HTMLInputElement).checked);
});

test.serial('module replacement and reordering do not retain removed selection or callbacks', t => {
  const {props, calls} = courseProps();
  const added: boolean[] = [];
  const view = render(<ListItem {...props} />, {wrapper: wrappingComponent});
  view.rerender(
    <ListItem
      {...props}
      subItems={[
        {...props.subItems[2], title: 'Conflict practice'},
        {...props.subItems[1], checkbox: {...props.subItems[1].checkbox, checked: true}},
        {
          ref: 'new-module',
          title: 'Next steps',
          checkbox: {checked: false, onChange: value => added.push(value)}
        }
      ]}
    />
  );
  const list = view.container.querySelector('[data-name="list-item-sub-items"]') as HTMLElement;
  t.deepEqual(
    [...list.children].map(item => item.textContent),
    ['Conflict practice', 'Working together', 'Next steps']
  );
  t.is(view.queryByLabelText('Getting started'), null);
  t.is(view.queryByLabelText('Resolving conflict'), null);
  t.deepEqual(
    ['Conflict practice', 'Working together', 'Next steps'].map(
      title => (view.getByLabelText(title) as HTMLInputElement).checked
    ),
    [false, true, false]
  );
  fireEvent.click(view.getByText('Conflict practice').closest('label') as HTMLLabelElement);
  fireEvent.click(view.getByText('Working together').closest('label') as HTMLLabelElement);
  fireEvent.click(view.getByText('Next steps').closest('label') as HTMLLabelElement);
  t.deepEqual(calls, {parent: [], row: [], modules: [[], [false], [true]]});
  t.deepEqual(added, [true]);
});

test.serial('removing all modules and adding a single module updates the subtree', t => {
  const {props, calls} = courseProps();
  const view = render(<ListItem {...props} />, {wrapper: wrappingComponent});
  view.rerender(<ListItem {...props} subItems={[]} />);
  t.is(view.container.querySelector('[data-name="list-item-sub-items"]'), null);
  t.is(view.container.querySelectorAll('input[type="checkbox"]').length, 1);
  t.is(view.queryByLabelText('Getting started'), null);
  view.rerender(<ListItem {...props} subItems={undefined} />);
  t.is(view.container.querySelector('[data-name="list-item-sub-items"]'), null);
  view.rerender(<ListItem {...props} subItems={[props.subItems[2]]} />);
  t.is(view.container.querySelectorAll('input[type="checkbox"]').length, 2);
  fireEvent.click(view.getByText('Resolving conflict').closest('label') as HTMLLabelElement);
  t.deepEqual(calls, {parent: [], row: [], modules: [[], [], [true]]});
});

test.serial('selecting a course leaves module selection under consumer control', t => {
  const {props, calls} = courseProps();
  const view = render(<ListItem {...props} onClick={undefined} />, {wrapper: wrappingComponent});
  const parent = view.container.querySelector('input[type="checkbox"]') as HTMLInputElement;
  fireEvent.click(parent);
  t.deepEqual(calls, {parent: [true], row: [], modules: [[], [], []]});
  t.false(parent.checked);
  t.deepEqual(
    props.subItems.map(item => (view.getByLabelText(item.title) as HTMLInputElement).checked),
    [true, false, false]
  );
});

test.serial('identically named modules in two courses activate only their own checkbox', t => {
  const first = courseProps();
  const second = courseProps();
  const view = render(
    <>
      <section aria-label="First course">
        <ListItem {...first.props} />
      </section>
      <section aria-label="Second course">
        <ListItem {...second.props} />
      </section>
    </>,
    {wrapper: wrappingComponent}
  );
  const firstCourse = within(view.getByRole('region', {name: 'First course'}));
  const secondCourse = within(view.getByRole('region', {name: 'Second course'}));
  const firstInput = firstCourse.getByLabelText('Getting started') as HTMLInputElement;
  const secondInput = secondCourse.getByLabelText('Getting started') as HTMLInputElement;
  t.not(firstInput.id, secondInput.id);
  fireEvent.click(secondCourse.getByText('Getting started').closest('label') as HTMLLabelElement);
  t.deepEqual(first.calls, {parent: [], row: [], modules: [[], [], []]});
  t.deepEqual(second.calls, {parent: [], row: [], modules: [[false], [], []]});
});
