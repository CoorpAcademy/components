import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import PropTypes from 'prop-types';
import {noop} from 'lodash/fp';
import {cleanup, fireEvent, render, within} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import {ContentSelectionList as PublicList} from '../../..';
import ContentSelectionList from '..';
import {ContentPropsType} from '../types';
import rowStyle from '../../list-item/style.css';
import selectableStyle from '../../../molecule/card/selectable.css';
import badgeStyle from '../../../atom/content-badge/style.css';

browserEnv();
test.afterEach.always(cleanup);

const props: ContentPropsType = {
  title: 'Contents',
  button: {label: 'Add content', onClick: noop},
  checkboxWithTitle: {title: '24 items', checked: false, onChange: noop},
  actionButtons: [{label: 'Delete', onClick: noop}],
  list: {
    items: ['Leadership', 'Communication'].map((title, i) => ({
      ref: `module-${i}`,
      title,
      subtitle: `Module ${i + 1}`,
      image: 'https://static.coorpacademy.com/content/leadership.jpg',
      tags: {label: 'Module', iconName: 'book-open'},
      checkbox: {checked: false, onChange: noop},
      deleteButton: {label: 'Delete', onClick: noop}
    }))
  }
};
const mount = (value: ContentPropsType = props) =>
  render(<ContentSelectionList {...value} />, {wrapper: wrappingComponent});
const row = (view: ReturnType<typeof mount>, index = 0) =>
  view.container.querySelector(`[data-name="list-item-${index}"]`) as HTMLElement;

test.serial('exports independently', t => {
  t.is(PublicList, ContentSelectionList);
});

test.serial('renders without section subtitle or list search and validates propTypes', t => {
  const errors: string[] = [];
  const original = console.error;
  console.error = message => errors.push(message);
  try {
    PropTypes.checkPropTypes(ContentSelectionList.propTypes, props, 'prop', 'ContentSelectionList');
  } finally {
    console.error = original;
  }
  t.deepEqual(errors, []);
  const view = mount();
  t.truthy(view.getByText('24 items'));
  t.is(view.queryByRole('textbox'), null);
  t.is(view.getAllByRole('listitem').length, 2);
});

test.serial('Add content calls its callback once', t => {
  let calls = 0;
  const view = mount({...props, button: {...props.button, onClick: () => calls++}});
  fireEvent.click(view.getByRole('button', {name: 'Add content'}));
  t.is(calls, 1);
});

test.serial('select-all forwards checked true and false', t => {
  const values: boolean[] = [];
  const checkboxWithTitle = {
    ...props.checkboxWithTitle,
    onChange: (value: boolean) => values.push(value)
  };
  const view = mount({...props, checkboxWithTitle});
  fireEvent.click(view.getByRole('checkbox', {name: '24 items'}));
  view.rerender(
    <ContentSelectionList {...props} checkboxWithTitle={{...checkboxWithTitle, checked: true}} />
  );
  fireEvent.click(view.getByRole('checkbox', {name: '24 items'}));
  t.deepEqual(values, [true, false]);
});

test.serial('row checkbox forwards its new boolean and waits for consumer rerender', t => {
  const values: boolean[] = [];
  const items = props.list.items!.map(item => ({
    ...item,
    checkbox: {...item.checkbox, onChange: (value: boolean) => values.push(value)}
  }));
  const view = mount({...props, list: {...props.list, items}});
  const checkbox = within(row(view)).getByRole('checkbox') as HTMLInputElement;
  fireEvent.click(checkbox);
  t.deepEqual(values, [true]);
  t.false(checkbox.checked);
  items[0] = {...items[0], checkbox: {...items[0].checkbox, checked: true}};
  view.rerender(<ContentSelectionList {...props} list={{...props.list, items}} />);
  t.true(checkbox.checked);
  fireEvent.click(checkbox);
  t.deepEqual(values, [true, false]);
});

test.serial('batch Delete calls only its action callback and row Delete only that row', t => {
  const calls: string[] = [];
  const items = props.list.items!.map((item, i) => ({
    ...item,
    deleteButton: {label: 'Delete', onClick: () => calls.push(`row-${i}`)}
  }));
  const view = mount({
    ...props,
    list: {...props.list, items},
    actionButtons: [{label: 'Delete', onClick: () => calls.push('batch')}]
  });
  const batch = view
    .getAllByRole('button', {name: 'Delete'})
    .find(button => !button.closest('li'))!;
  fireEvent.click(batch);
  t.deepEqual(calls, ['batch']);
  fireEvent.click(within(row(view, 1)).getByRole('button', {name: 'Delete'}));
  t.deepEqual(calls, ['batch', 'row-1']);
});

const withItem = (overrides: Partial<NonNullable<ContentPropsType['list']['items']>[number]>) => ({
  ...props,
  list: {...props.list, items: [{...props.list.items![0], ...overrides}]}
});

test.serial('hidden row has thumbnail overlay and hidden ContentBadge beside its type tag', t => {
  const view = mount(withItem({hidden: true}));
  const item = row(view);
  const overlay = item.querySelector('[data-name="content-image-overlay"]')!;
  t.is(overlay.getAttribute('aria-hidden'), 'true');
  t.truthy(
    overlay.querySelector(
      `.${selectableStyle.selectable}.${selectableStyle.selected}.${selectableStyle.hidden}`
    )
  );
  t.truthy(overlay.querySelector(`svg.${selectableStyle.hideIcon.split(' ').join('.')}`));
  t.truthy(overlay.parentElement!.querySelector('[data-name="card-image-preview"]'));
  const badge = within(item).getByText('Hidden');
  t.true(badgeStyle.hidden.split(' ').every((name: string) => badge.classList.contains(name)));
  t.is(
    badge.parentElement,
    within(item).getByText('Module').closest<HTMLElement>(`.${rowStyle.settings}`)
  );
});

test.serial('hidden row keeps checkbox and delete operable without forcing checked', t => {
  const calls: (boolean | string)[] = [];
  const view = mount(
    withItem({
      hidden: true,
      checkbox: {checked: false, onChange: value => calls.push(value)},
      deleteButton: {label: 'Delete', onClick: () => calls.push('delete')}
    })
  );
  const checkbox = within(row(view)).getByRole('checkbox') as HTMLInputElement;
  const button = within(row(view)).getByRole('button', {name: 'Delete'}) as HTMLButtonElement;
  t.false(checkbox.disabled);
  t.false(checkbox.checked);
  t.false(button.disabled);
  fireEvent.click(checkbox);
  fireEvent.click(button);
  t.deepEqual(calls, [true, 'delete']);
});

test.serial('hidden false or absent renders no overlay or badge', t => {
  [false, undefined].forEach(hidden => {
    const view = mount(withItem({hidden}));
    t.is(row(view).querySelector('[data-name="content-image-overlay"]'), null);
    t.is(view.queryByText('Hidden'), null);
    cleanup();
  });
});

test.serial('hint is muted details below title, after any subtitle', t => {
  const hint = "3 of the listed learners can't see it";
  const view = mount(withItem({hint}));
  const details = within(row(view)).getByText(hint);
  t.true(rowStyle.details.split(' ').every((name: string) => details.classList.contains(name)));
  t.is(details.previousElementSibling!.textContent, 'Module 1');
  t.truthy(details.parentElement!.querySelector(`.${rowStyle.title}`));
});

test.serial('error is an alert below section title and above list', t => {
  const error = 'An assignment holds at most 50 modules.';
  const view = mount({...props, error});
  const alert = view.getByRole('alert');
  t.truthy(within(alert).getByText(error));
  t.true(Boolean(view.getByText('Contents').compareDocumentPosition(alert) & 4));
  t.true(Boolean(alert.compareDocumentPosition(view.getByRole('list')) & 4));
});

test.serial('absent or empty hint and error add no markup', t => {
  const view = mount(props);
  const normal = view.container.innerHTML;
  view.rerender(
    <ContentSelectionList
      {...props}
      list={{...props.list, items: props.list.items!.map(item => ({...item, hint: ''}))}}
      error=""
    />
  );
  t.is(view.container.innerHTML, normal);
  t.is(view.queryByRole('alert'), null);
  t.is(row(view).querySelector(`.${rowStyle.details.split(' ').join('.')}`), null);
});

test.serial('hidden, hint and error coexist', t => {
  const values: boolean[] = [];
  const view = mount({
    ...withItem({
      hidden: true,
      hint: 'Visibility hint',
      checkbox: {checked: true, onChange: value => values.push(value)}
    }),
    error: 'Too many modules'
  });
  t.truthy(view.getByRole('alert'));
  t.truthy(view.getByText('Visibility hint'));
  t.truthy(view.getByText('Hidden'));
  t.true((within(row(view)).getByRole('checkbox') as HTMLInputElement).checked);
  fireEvent.click(within(row(view)).getByRole('checkbox'));
  t.deepEqual(values, [false]);
});

test.serial('readOnly suppresses editing controls but keeps supplied search interactive', t => {
  const values: string[] = [];
  const view = mount({
    ...props,
    readOnly: true,
    list: {
      ...props.list,
      search: {value: '', placeholder: 'Search contents', onChange: value => values.push(value)}
    }
  });
  t.is(view.queryAllByRole('checkbox').length, 0);
  t.is(view.queryAllByRole('button', {name: /Delete|Add content/}).length, 0);
  const search = view.getByRole('textbox') as HTMLInputElement;
  t.false(search.disabled);
  fireEvent.input(search, {target: {value: 'Leadership'}});
  t.deepEqual(values, ['Leadership']);
});

test.serial('fetching and emptyResult still render as before', t => {
  const view = mount({...props, isFetching: true});
  t.is(view.queryByRole('list'), null);
  view.rerender(
    <ContentSelectionList
      {...props}
      list={{items: [], emptyResult: {title: 'No content', description: 'Add a module'}}}
    />
  );
  t.truthy(view.getByText('No content'));
  t.truthy(view.getByText('Add a module'));
  t.is(view.queryByRole('list'), null);
});

test.serial('empty or omitted items preserve the supplied count and batch callback', t => {
  [[], undefined].forEach(items => {
    let calls = 0;
    const changes: boolean[] = [];
    const view = mount({
      ...props,
      list: {items},
      checkboxWithTitle: {...props.checkboxWithTitle, onChange: value => changes.push(value)},
      actionButtons: [{label: 'Delete', onClick: () => calls++}]
    });
    t.is(within(view.getByRole('list')).queryAllByRole('listitem').length, 0);
    t.truthy(view.getByRole('checkbox', {name: '24 items'}));
    fireEvent.click(view.getByRole('checkbox', {name: '24 items'}));
    t.deepEqual(changes, [true]);
    fireEvent.click(view.getByRole('button', {name: 'Delete'}));
    t.is(calls, 1);
    cleanup();
  });
});

test.serial(
  'reordering and removing rows keeps selection and actions attached to their content',
  t => {
    const calls: (string | boolean)[] = [];
    const items = props.list.items!.map((item, i) => ({
      ...item,
      hidden: i === 0,
      checkbox: {checked: i === 0, onChange: () => calls.push('stale selection')},
      deleteButton: {label: 'Delete', onClick: () => calls.push('stale delete')}
    }));
    const view = mount({...props, list: {items}});
    const hiddenCheckbox = within(row(view)).getByRole('checkbox');
    view.rerender(
      <ContentSelectionList
        {...props}
        list={{
          items: [items[1], items[0]].map(item => ({
            ...item,
            checkbox: {
              checked: item.checkbox.checked,
              onChange: value => calls.push(item.ref, value)
            },
            deleteButton: {label: 'Delete', onClick: () => calls.push(`delete ${item.ref}`)}
          }))
        }}
      />
    );
    t.truthy(within(row(view)).getByText('Communication'));
    t.false((within(row(view)).getByRole('checkbox') as HTMLInputElement).checked);
    t.is(within(row(view, 1)).getByRole('checkbox'), hiddenCheckbox);
    t.true((hiddenCheckbox as HTMLInputElement).checked);
    fireEvent.click(hiddenCheckbox);
    fireEvent.click(within(row(view)).getByRole('button', {name: 'Delete'}));
    t.deepEqual(calls, ['module-0', false, 'delete module-1']);
    t.is(view.getAllByRole('listitem').length, 2);
    view.rerender(<ContentSelectionList {...props} list={{items: [items[0]]}} />);
    t.is(view.getAllByRole('listitem').length, 1);
    t.is(view.queryByText('Communication'), null);
    t.is(within(row(view)).getByRole('checkbox'), hiddenCheckbox);
    t.truthy(within(row(view)).getByText('Hidden'));
  }
);

test.serial(
  'consumer updates remove hidden presentation hint and error without changing selection',
  t => {
    const selected = {checked: true, onChange: () => undefined};
    const view = mount({
      ...withItem({hidden: true, hint: 'Old hint', checkbox: selected}),
      error: 'Old error'
    });
    const checkbox = within(row(view)).getByRole('checkbox') as HTMLInputElement;
    view.rerender(
      <ContentSelectionList
        {...withItem({hidden: false, hint: 'Updated hint', checkbox: selected})}
        error="Updated error"
      />
    );
    t.is(view.queryByText('Hidden'), null);
    t.is(view.container.querySelector('[data-name="content-image-overlay"]'), null);
    t.is(view.queryByText('Old hint'), null);
    t.is(view.queryByText('Old error'), null);
    t.truthy(view.getByText('Updated hint'));
    t.truthy(within(view.getByRole('alert')).getByText('Updated error'));
    view.rerender(<ContentSelectionList {...withItem({checkbox: selected})} />);
    t.is(view.queryByRole('alert'), null);
    t.is(view.queryByText('Updated hint'), null);
    t.is(within(row(view)).getByRole('checkbox'), checkbox);
    t.true(checkbox.checked);
    t.false(checkbox.disabled);
    t.truthy(within(row(view)).getByRole('button', {name: 'Delete'}));
  }
);

test.serial('search and subtitle can be supplied and removed after mounting', t => {
  const view = mount();
  const values: string[] = [];
  view.rerender(
    <ContentSelectionList
      {...props}
      subtitle="Pick modules for learners"
      list={{
        ...props.list,
        search: {value: 'Lead', placeholder: 'Find modules', onChange: value => values.push(value)}
      }}
    />
  );
  t.truthy(view.getByText('Pick modules for learners'));
  const search = view.getByRole('textbox') as HTMLInputElement;
  t.is(search.value, 'Lead');
  fireEvent.input(search, {target: {value: 'Communication'}});
  t.deepEqual(values, ['Communication']);
  t.is(search.value, 'Lead');
  view.rerender(<ContentSelectionList {...props} />);
  t.is(view.queryByRole('textbox'), null);
  t.is(view.queryByText('Pick modules for learners'), null);
  t.is(view.getAllByRole('listitem').length, 2);
});

test.serial('hint and error render markup characters literally', t => {
  const hint = '<b>3 learners</b> & their managers';
  const error = '<a href="/limit">50 modules</a>';
  const view = mount({...withItem({hint}), error});
  t.truthy(within(row(view)).getByText(hint));
  t.truthy(within(view.getByRole('alert')).getByText(error));
  t.is(within(row(view)).getByText(hint).querySelector('b'), null);
  t.is(within(view.getByRole('alert')).queryByRole('link'), null);
});

[
  {
    name: 'hidden',
    value: withItem({hidden: 'true' as unknown as boolean}),
    path: 'list.items[0].hidden',
    type: 'boolean'
  },
  {
    name: 'hint',
    value: withItem({hint: 3 as unknown as string}),
    path: 'list.items[0].hint',
    type: 'string'
  },
  {name: 'error', value: {...props, error: 50}, path: 'error', type: 'string'}
].forEach(({name, value, path, type}) => {
  test.serial(`runtime schema rejects invalid ${name}`, t => {
    const errors: string[] = [];
    const original = console.error;
    PropTypes.resetWarningCache();
    console.error = message => errors.push(message);
    try {
      PropTypes.checkPropTypes(
        ContentSelectionList.propTypes,
        value,
        'prop',
        'ContentSelectionList'
      );
    } finally {
      console.error = original;
      PropTypes.resetWarningCache();
    }
    t.is(errors.length, 1);
    t.true(errors[0].includes(path));
    t.true(errors[0].includes(`expected \`${type}\``));
  });
});
