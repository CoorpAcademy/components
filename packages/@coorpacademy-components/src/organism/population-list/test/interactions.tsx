import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {cleanup, fireEvent, render, within} from '@testing-library/react';
import PopulationList from '..';
import {
  listLabels,
  makeListModel,
  rows,
  pageRows,
  archivedRows,
  confirmation
} from '../../../test/helpers/population-list';
import {PopulationShell} from './helpers/shell';

browserEnv();
let observed: IntersectionObserverCallback;
let disconnected = 0;
let observers = 0;
class ObserverMock {
  constructor(callback: IntersectionObserverCallback) {
    observed = callback;
    observers++;
  }

  observe() {
    return this;
  }

  disconnect() {
    disconnected++;
    return this;
  }
}
test.beforeEach(() => {
  observers = 0;
  disconnected = 0;
  global.IntersectionObserver = ObserverMock as unknown as typeof IntersectionObserver;
});
test.afterEach.always(() => {
  cleanup();
  delete (global as Partial<typeof globalThis>).IntersectionObserver;
});
const props = () => ({model: makeListModel(), labels: listLabels});
const intersect = (visible: boolean) =>
  observed([{isIntersecting: visible} as IntersectionObserverEntry], {} as IntersectionObserver);

test.serial(
  'population cards reuse icons, type tags, explained access modes and status actions',
  t => {
    const view = render(<PopulationList {...props()} />);
    t.is(view.getAllByRole('button', {name: 'Edit'}).length, 5);
    t.is(view.getAllByRole('button', {name: 'Archive'}).length, 5);
    t.is(view.getAllByRole('listitem').length, 5);
    t.truthy(view.getByText('All platform content'));
    t.truthy(view.getByText('Coorpacademy catalogue'));
    t.truthy(view.getByText('Custom playlists only'));
    t.is(view.getAllByText('No custom playlists attached').length, 2);
    t.is(view.queryByText('0 custom playlists'), null);
    t.truthy(view.container.querySelector('[data-icon="users"]'));
    t.truthy(
      view
        .getByRole('button', {name: rows[0].conditionsLabel})
        .querySelector('[data-icon="filter"]')
    );
  }
);

test.serial('archived cards expose View and Reactivate and never call archive handlers', t => {
  let reactivated = 0;
  const model = makeListModel({
    rows: [
      {
        ...archivedRows[0],
        onArchive: () => t.fail('archived archive'),
        onReactivate: () => reactivated++
      }
    ]
  });
  const view = render(<PopulationList labels={listLabels} model={model} />);
  t.truthy(view.getByRole('button', {name: 'View'}));
  t.is(view.queryByRole('button', {name: 'Edit'}), null);
  t.is(view.queryByRole('button', {name: 'Archive'}), null);
  fireEvent.click(view.getByRole('button', {name: 'Reactivate'}));
  t.is(reactivated, 1);
  t.truthy(view.getByText(archivedRows[0].title));
});

test.serial('names are literal text and missing optional insights do not become fake zeroes', t => {
  const title = '<img src=x onerror=alert(1)> Finance';
  const row = {
    ...rows[0],
    title,
    memberLabel: undefined,
    accessLabel: undefined,
    cataloguePlaylists: undefined,
    customPlaylists: undefined,
    ownerInformation: undefined,
    onArchive: undefined
  };
  const view = render(
    <PopulationList
      labels={listLabels}
      model={makeListModel({rows: [row], resultLabel: undefined, evaluatedAtLabel: undefined})}
    />
  );
  t.truthy(view.getByText(title));
  t.is(view.container.querySelector('img'), null);
  t.is(view.queryByText('0 learners'), null);
  t.is(view.queryByRole('button', {name: 'Archive'}), null);
});

test.serial('conditions open the existing tagged summary and Escape closes the portal', t => {
  const view = render(<PopulationList {...props()} />);
  const trigger = view.getByRole('button', {name: rows[0].conditionsLabel});
  fireEvent.focus(trigger);
  const panel = view.getByRole('dialog', {name: rows[0].conditionsLabel});
  t.truthy(panel.querySelector('[data-name="membership-summary"]'));
  t.truthy(within(panel).getByText('Finance'));
  t.true(within(panel).getAllByText('Department').length > 0);
  t.false(view.container.contains(panel));
  fireEvent.keyDown(panel, {key: 'Escape'});
  t.is(view.queryByRole('dialog'), null);
});

test.serial(
  'owner details keep the editor identity and You colors without ownership controls',
  t => {
    const view = render(<PopulationList {...props()} />);
    const label = rows[4].ownerInformation?.ariaLabel as string;
    fireEvent.focus(view.getByRole('button', {name: label}));
    const panel = view.getByRole('dialog', {name: label});
    t.truthy(within(panel).getByText('Alex Martin · alex.martin · You'));
    t.is(within(panel).queryByRole('button'), null);
    t.is(within(panel).getAllByRole('listitem').length, 2);
  }
);

test.serial('playlist tooltips show complete tags and only supplied authorized links', t => {
  const view = render(<PopulationList {...props()} />);
  const custom = rows[0].customPlaylists as NonNullable<typeof rows[0]['customPlaylists']>;
  fireEvent.focus(view.getByRole('button', {name: custom.ariaLabel}));
  const panel = view.getByRole('dialog', {name: custom.ariaLabel});
  t.is(within(panel).getAllByRole('listitem').length, 2);
  const link = within(panel).getByRole('link', {name: 'Company onboarding'});
  t.true(link.getAttribute('href')?.endsWith('/populations'));
  t.is(link.getAttribute('target'), '_blank');
  t.is(link.getAttribute('rel'), 'noopener noreferrer');
  t.is(within(panel).queryByRole('link', {name: 'Our leadership journey'}), null);
  t.is(within(panel).queryByRole('button'), null);
});

test.serial(
  'loading and failed details retain their already supplied people and retry the right read',
  t => {
    let retries = 0;
    const owner = {
      ...rows[4].ownerInformation,
      label: '2 owners',
      ariaLabel: 'Owner details',
      items: rows[4].ownerInformation?.items || [],
      loading: true,
      error: {
        message: 'Owners unavailable',
        retry: {label: 'Retry owners', onClick: () => retries++}
      }
    };
    const view = render(
      <PopulationList
        labels={listLabels}
        model={makeListModel({rows: [{...rows[4], ownerInformation: owner}]})}
      />
    );
    fireEvent.focus(view.getByRole('button', {name: 'Owner details'}));
    const panel = view.getByRole('dialog', {name: 'Owner details'});
    t.truthy(within(panel).getByText('Owners unavailable'));
    t.truthy(within(panel).getByText('Alex Martin · alex.martin · You'));
    t.truthy(within(panel).getByRole('status'));
    fireEvent.click(within(panel).getByRole('button', {name: 'Retry owners'}));
    t.is(retries, 1);
  }
);

test.serial('search, type and creation only dispatch ready callbacks and wait for App props', t => {
  const calls: unknown[] = [];
  const model = makeListModel({
    onSearch: value => calls.push(value),
    onSubmitSearch: () => calls.push('search'),
    onCreate: () => calls.push('create'),
    filter: {...makeListModel().filter, onChange: value => calls.push(value)}
  });
  const view = render(<PopulationList labels={listLabels} model={model} />);
  fireEvent.input(view.getByRole('textbox'), {target: {value: 'Finance'}});
  fireEvent.click(view.getByRole('combobox'));
  fireEvent.click(view.getByRole('option', {name: 'Analytics'}));
  fireEvent.submit(view.getByRole('textbox').closest('form') as HTMLFormElement);
  fireEvent.click(view.getByRole('button', {name: 'Search'}));
  fireEvent.click(view.getByRole('button', {name: 'Create population'}));
  t.deepEqual(calls, ['Finance', 'analytics', 'search', 'search', 'create']);
  t.is(view.getAllByRole('listitem').length, 5);
  view.rerender(
    <PopulationList
      labels={listLabels}
      model={{...model, rows: [rows[0]], resultLabel: '1 population'}}
    />
  );
  t.is(view.getAllByRole('listitem').length, 1);
  t.truthy(view.getByText('1 population'));
});

test.serial(
  'shell badges remain global while one filtered card is rendered, and zero stays visible',
  t => {
    const view = render(
      <PopulationShell
        labels={listLabels}
        model={makeListModel({
          rows: [rows[0]],
          resultLabel: '1 of 1 population',
          search: 'Finance'
        })}
        active="2000"
        archived="0"
      />
    );
    t.truthy(view.getByText('2000'));
    t.truthy(view.getByText('0'));
    t.truthy(view.getByText('1 of 1 population'));
    t.is(view.getAllByRole('button', {name: 'Edit'}).length, 1);
    view.rerender(
      <PopulationShell
        labels={listLabels}
        model={makeListModel({rows: []})}
        active={null}
        archived="0"
      />
    );
    t.is(view.queryByText('2000'), null);
    t.truthy(view.getByText('0'));
  }
);

test.serial(
  'viewport requests are deduplicated against repeated entries and the fallback button',
  t => {
    let requests = 0;
    const model = makeListModel({
      rows: pageRows.slice(0, 25),
      hasMore: true,
      onLoadMore: () => requests++
    });
    const view = render(<PopulationList labels={listLabels} model={model} />);
    intersect(false);
    t.is(requests, 0);
    intersect(true);
    intersect(true);
    fireEvent.click(view.getByRole('button', {name: 'Load more'}));
    t.is(requests, 1);
    view.rerender(<PopulationList labels={listLabels} model={{...model, loadingMore: true}} />);
    t.is(view.getAllByRole('listitem').length, 25);
    t.truthy(view.getByText('Loading more populations…'));
    t.true((view.getByRole('button', {name: 'Load more'}) as HTMLButtonElement).disabled);
    t.true(disconnected > 0);
    view.rerender(
      <PopulationList labels={listLabels} model={{...model, rows: pageRows.slice(0, 50)}} />
    );
    fireEvent.click(view.getByRole('button', {name: 'Load more'}));
    t.is(requests, 2);
    t.is(view.getAllByRole('listitem').length, 50);
  }
);

test.serial(
  'a failed next page stops automatic requests and preserves cards until explicit retry',
  t => {
    let requests = 0;
    const view = render(
      <PopulationList
        labels={listLabels}
        model={makeListModel({
          rows: pageRows.slice(0, 25),
          hasMore: true,
          moreError: 'Next page unavailable',
          onLoadMore: () => requests++
        })}
      />
    );
    t.is(observers, 0);
    t.is(view.getAllByRole('listitem').length, 25);
    t.truthy(view.getByRole('alert'));
    fireEvent.click(view.getByRole('button', {name: 'Try again'}));
    fireEvent.click(view.getByRole('button', {name: 'Try again'}));
    t.is(requests, 1);
    t.is(view.getAllByRole('listitem').length, 25);
  }
);

test.serial(
  'fallback pagination works without IntersectionObserver and disappears after exhaustion',
  t => {
    delete (global as Partial<typeof globalThis>).IntersectionObserver;
    let requests = 0;
    const model = makeListModel({hasMore: true, onLoadMore: () => requests++});
    const view = render(<PopulationList labels={listLabels} model={model} />);
    fireEvent.click(view.getByRole('button', {name: 'Load more'}));
    t.is(requests, 1);
    view.rerender(<PopulationList labels={listLabels} model={{...model, hasMore: false}} />);
    t.is(view.queryByRole('button', {name: 'Load more'}), null);
  }
);

test.serial(
  'empty, loading and failed initial reads remain distinct; count failures never erase cards',
  t => {
    let retried = 0;
    const view = render(<PopulationList labels={listLabels} model={makeListModel({rows: []})} />);
    t.truthy(view.getByText('No populations found'));
    t.truthy(view.container.querySelector('[data-icon="users"]'));
    view.rerender(
      <PopulationList labels={listLabels} model={makeListModel({rows: [], loading: true})} />
    );
    t.truthy(view.getByRole('status'));
    t.is(view.queryByText('No populations found'), null);
    view.rerender(
      <PopulationList
        labels={listLabels}
        model={makeListModel({
          rows: [],
          error: {
            message: 'Initial failure',
            retry: {label: 'Retry read', onClick: () => retried++}
          }
        })}
      />
    );
    t.is(view.queryByText('No populations found'), null);
    fireEvent.click(view.getByRole('button', {name: 'Retry read'}));
    t.is(retried, 1);
    view.rerender(
      <PopulationList
        labels={listLabels}
        model={makeListModel({
          countsError: {
            message: 'Counts unavailable',
            retry: {label: 'Retry counts', onClick: () => retried++}
          },
          lifecycleError: 'Archive refused'
        })}
      />
    );
    t.is(view.getAllByRole('listitem').length, 5);
    fireEvent.click(view.getByRole('button', {name: 'Retry counts'}));
    t.is(retried, 2);
    t.truthy(view.getByText('Archive refused'));
  }
);

test.serial('archive confirmation is controlled, portaled and initially focuses Cancel', t => {
  let requested = 0;
  let confirmed = 0;
  let cancelled = 0;
  const model = makeListModel({rows: [{...rows[0], onArchive: () => requested++}]});
  const view = render(<PopulationList labels={listLabels} model={model} />);
  const trigger = view.getByRole('button', {name: 'Archive'});
  trigger.focus();
  fireEvent.click(trigger);
  t.is(requested, 1);
  t.is(confirmed, 0);
  t.is(view.queryByRole('dialog'), null);
  const dialogModel = {...confirmation, onCancel: () => cancelled++, onConfirm: () => confirmed++};
  view.rerender(<PopulationList labels={listLabels} model={model} confirmation={dialogModel} />);
  const dialog = view.getByRole('dialog', {name: 'Archive population?'});
  t.false(view.container.contains(dialog));
  t.is(dialog.getAttribute('aria-modal'), 'true');
  t.is(document.activeElement, within(dialog).getByRole('button', {name: 'Cancel'}));
  t.is(document.body.style.overflow, 'hidden');
  fireEvent.click(within(dialog).getByRole('button', {name: 'Cancel'}));
  t.is(cancelled, 1);
  t.is(confirmed, 0);
  t.truthy(view.getByRole('dialog'));
  view.rerender(<PopulationList labels={listLabels} model={model} />);
  t.is(document.activeElement, trigger);
  t.not(document.body.style.overflow, 'hidden');
});

test.serial(
  'archive dialog traps focus, handles Escape and confirms only on the explicit action',
  t => {
    let cancelled = 0;
    let confirmed = 0;
    const view = render(
      <PopulationList
        {...props()}
        confirmation={{...confirmation, onCancel: () => cancelled++, onConfirm: () => confirmed++}}
      />
    );
    const dialog = view.getByRole('dialog');
    const buttons = within(dialog).getAllByRole('button');
    const first = buttons[0];
    const last = buttons[buttons.length - 1];
    last.focus();
    fireEvent.keyDown(last, {key: 'Tab'});
    t.is(document.activeElement, first);
    fireEvent.keyDown(first, {key: 'Tab', shiftKey: true});
    t.is(document.activeElement, last);
    const middle = within(dialog).getByRole('button', {name: 'Cancel'});
    middle.focus();
    fireEvent.focusIn(middle);
    t.true(fireEvent.keyDown(middle, {key: 'Tab'}));
    t.true(fireEvent.keyDown(middle, {key: 'Tab', shiftKey: true}));
    t.true(fireEvent.keyDown(middle, {key: 'ArrowDown'}));
    dialog.focus();
    fireEvent.keyDown(dialog, {key: 'Tab', shiftKey: true});
    t.is(document.activeElement, last);
    dialog.focus();
    fireEvent.keyDown(dialog, {key: 'Tab'});
    t.is(document.activeElement, first);
    const outside = view.getByRole('heading', {name: 'Populations'});
    outside.focus();
    fireEvent.focusIn(outside);
    t.is(document.activeElement, dialog);
    fireEvent.keyDown(dialog, {key: 'Escape'});
    t.is(cancelled, 1);
    t.is(confirmed, 0);
    fireEvent.click(last);
    t.is(confirmed, 1);
  }
);

test.serial(
  'busy archive prevents cancellation and traps focus even with no enabled controls',
  t => {
    const view = render(
      <PopulationList
        {...props()}
        confirmation={{
          ...confirmation,
          busy: true,
          onCancel: () => t.fail('busy cancel'),
          onConfirm: () => t.fail('busy confirm')
        }}
      />
    );
    const dialog = view.getByRole('dialog');
    t.is(dialog.getAttribute('aria-busy'), 'true');
    t.is(within(dialog).queryByRole('button', {name: 'Close archive confirmation'}), null);
    fireEvent.keyDown(dialog, {key: 'Tab'});
    t.is(document.activeElement, dialog);
    fireEvent.keyDown(dialog, {key: 'Escape'});
    fireEvent.click(within(dialog).getByRole('button', {name: 'Archive'}));
    t.true(
      within(dialog)
        .getAllByRole('button')
        .every(button => (button as HTMLButtonElement).disabled)
    );
  }
);

test.serial('after the archived card disappears focus falls back to the list heading', t => {
  const model = makeListModel({rows: [rows[0]]});
  const view = render(<PopulationList labels={listLabels} model={model} />);
  view.getByRole('button', {name: 'Archive'}).focus();
  view.rerender(<PopulationList labels={listLabels} model={model} confirmation={confirmation} />);
  view.rerender(<PopulationList labels={listLabels} model={makeListModel({rows: []})} />);
  t.is(document.activeElement, view.getByRole('heading', {name: 'Populations'}));
});

test.serial(
  'archive refusal remains visible, text is escaped and unmount releases the scroll lock',
  t => {
    const labels = {
      ...confirmation.labels,
      title: 'Archive <Finance>?',
      description: '<img src=x onerror=alert(1)>'
    };
    const view = render(<PopulationList {...props()} />);
    view.getAllByRole('button', {name: 'Archive'})[0].focus();
    view.rerender(
      <PopulationList
        {...props()}
        confirmation={{...confirmation, labels, error: 'Used by an <active> assignment'}}
      />
    );
    const dialog = view.getByRole('dialog');
    t.truthy(within(dialog).getByText('Archive <Finance>?'));
    t.truthy(within(dialog).getByText('<img src=x onerror=alert(1)>'));
    t.is(dialog.querySelector('img'), null);
    t.truthy(within(dialog).getByText('Used by an <active> assignment'));
    view.container.remove();
    view.unmount();
    t.not(document.body.style.overflow, 'hidden');
  }
);

test.serial('errors without retry controls keep their message and known data', t => {
  const owner = {
    label: '2 owners',
    ariaLabel: 'Owner details',
    items: rows[4].ownerInformation?.items || [],
    error: {message: 'Owners unavailable'}
  };
  const view = render(
    <PopulationList
      labels={listLabels}
      model={makeListModel({
        rows: [{...rows[4], ownerInformation: owner}],
        error: {message: 'Read failed'},
        countsError: {message: 'Counts unavailable'}
      })}
    />
  );
  fireEvent.focus(view.getByRole('button', {name: 'Owner details'}));
  const panel = view.getByRole('dialog', {name: 'Owner details'});
  t.truthy(within(panel).getByText('Owners unavailable'));
  t.truthy(within(panel).getByText('Alex Martin · alex.martin · You'));
  t.is(within(panel).queryByRole('button'), null);
  t.is(view.queryByRole('button', {name: 'Try again'}), null);
});

test.serial(
  'owner tooltip preserves compact identities, count and supplied deactivation legend',
  t => {
    const legend = 'Remove deactivated accounts manually.';
    const owner = {
      label: '3 owners',
      ariaLabel: 'Owners matching the prototype',
      deactivatedLegend: legend,
      items: [
        {id: 'alex', name: 'Alex Martin', login: 'alex.martin', status: 'ok' as const},
        {id: 'sam', name: 'Sam Taylor', login: 'sam.taylor', status: 'deactivated' as const},
        {
          id: 'me',
          name: 'Eric Sampaio',
          login: 'eric.sampaio',
          current: true,
          status: 'ok' as const
        }
      ]
    };
    const view = render(
      <PopulationList
        labels={listLabels}
        model={makeListModel({rows: [{...rows[4], ownerInformation: owner}]})}
      />
    );
    fireEvent.focus(view.getByRole('button', {name: owner.ariaLabel}));
    const panel = view.getByRole('dialog', {name: owner.ariaLabel});
    t.truthy(within(panel).getByRole('heading', {name: '3 owners'}));
    t.truthy(within(panel).getByText('Alex Martin · alex.martin'));
    t.truthy(within(panel).getByText('Sam Taylor · sam.taylor · Deactivated'));
    t.truthy(within(panel).getByText('Eric Sampaio · eric.sampaio · You'));
    t.truthy(within(panel).getByText(legend));
    t.is(panel.querySelectorAll('[data-icon="eye-slash"]').length, 2);
    t.is(within(panel).queryAllByRole('button').length, 0);
  }
);
