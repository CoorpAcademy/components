import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {cleanup, fireEvent, render, within} from '@testing-library/react';
import PopulationEdition from '..';
import HeaderWithActions from '../../header-with-actions';
import BrandUpdate from '../../../template/back-office/brand-update';
import shell from '../../../template/back-office/brand-update/test/fixtures/default';
import {wrappingComponent} from '../../../test/helpers/render-component';
import {
  labels,
  makeEditor,
  creation,
  zero,
  preview,
  header,
  legacy
} from '../../../test/helpers/population-edition';
import {confirmation} from '../../../test/helpers/population-list';

browserEnv();
test.afterEach.always(cleanup);
const renderEditor = (model = makeEditor(), extra = {}) =>
  render(<PopulationEdition {...extra} model={model} labels={labels} />, {
    wrapper: wrappingComponent
  });

test.serial(
  'Analytics creation composes existing views without HR, ref, status tabs or publish',
  t => {
    const view = render(
      <BrandUpdate
        {...shell.props}
        content={{type: 'population-edition', model: creation, labels}}
        header={{
          ...header({model: creation, creating: true, valid: false}),
          type: 'header-with-actions'
        }}
        items={[]}
      />,
      {wrapper: wrappingComponent}
    );
    t.truthy(view.getByRole('heading', {name: 'Create population'}));
    t.truthy(view.getByText('Analytics'));
    t.truthy(view.getByRole('region', {name: 'Membership conditions'}));
    t.truthy(view.getByRole('region', {name: 'Owners'}));
    t.truthy(view.getByText('No preview yet'));
    t.true((view.getByRole('button', {name: 'Save'}) as HTMLButtonElement).disabled);
    [
      'Publish',
      'HR',
      'Active',
      'Archived',
      'All learners',
      'Reference',
      'Catalogue access'
    ].forEach(text => t.is(view.queryByText(text), null));
    t.is(view.queryByRole('radio'), null);
  }
);

test.serial(
  'controlled name edits wait for App props and save errors keep the draft and conditions',
  t => {
    let change = '';
    const model = makeEditor({
      name: {
        value: 'My draft',
        onChange: value => {
          change = value;
        }
      }
    });
    const view = renderEditor(model);
    fireEvent.input(view.getByRole('textbox', {name: 'Name'}), {target: {value: 'New name'}});
    t.is(change, 'New name');
    view.rerender(
      <PopulationEdition
        labels={labels}
        model={{
          ...model,
          feedback: {type: 'error', message: 'Revision changed. Your draft is kept.'}
        }}
      />
    );
    t.is((view.getByRole('textbox', {name: 'Name'}) as HTMLInputElement).value, 'My draft');
    t.truthy(view.getByRole('alert'));
    t.true(view.getAllByText('Finance').length > 0);
    view.rerender(
      <PopulationEdition
        labels={labels}
        model={{...model, feedback: {type: 'success', message: 'Saved'}}}
      />
    );
    t.truthy(view.getByText('Saved'));
    t.is(view.queryByRole('alert'), null);
  }
);

test.serial(
  'preview renders five learners, global total and condition field values through BrandTable',
  t => {
    const view = renderEditor();
    const region = within(view.getByRole('region', {name: labels.preview.title}));
    t.truthy(region.getByText('84 matching learners'));
    t.is(region.getAllByRole('row').length, 6);
    t.truthy(region.getByRole('columnheader', {name: 'Department'}));
    t.truthy(region.getByRole('cell', {name: 'alex.martin@example.org'}));
    t.is(region.getAllByRole('cell', {name: 'Finance'}).length, 3);
    t.truthy(region.getByText(preview.sampleLabel as string));
  }
);

test.serial(
  'zero, unknown, updating and failed previews remain distinct and retain previous rows',
  t => {
    const view = renderEditor(zero);
    t.truthy(view.getByText('0 matching learners'));
    t.truthy(view.getByText('No learners match yet'));
    t.is(view.queryByRole('table'), null);
    view.rerender(<PopulationEdition labels={labels} model={creation} />);
    t.truthy(view.getByText('No preview yet'));
    t.is(view.queryByText('0 matching learners'), null);
    let retries = 0;
    const failed = makeEditor({
      preview: {
        ...preview,
        stale: true,
        error: 'Preview unavailable',
        retry: {
          label: 'Retry preview',
          onClick: () => {
            retries++;
          }
        }
      }
    });
    view.rerender(<PopulationEdition labels={labels} model={failed} />);
    t.truthy(view.getByText(labels.preview.stale));
    t.truthy(view.getByText('Preview unavailable'));
    t.is(view.getAllByRole('row').length, 6);
    fireEvent.click(view.getByRole('button', {name: 'Retry preview'}));
    t.is(retries, 1);
    view.rerender(
      <PopulationEdition
        labels={labels}
        model={{
          ...failed,
          preview: {...(failed.preview as typeof preview), loading: true, error: undefined}
        }}
      />
    );
    t.truthy(view.getByText(labels.preview.loading));
    t.is(view.getAllByRole('row').length, 6);
    t.true((view.getByRole('button', {name: 'Retry preview'}) as HTMLButtonElement).disabled);
  }
);

test.serial(
  'initial loading and errors never expose an editable stale form; retry and optional preview work',
  t => {
    const view = renderEditor(makeEditor({loaded: false}));
    t.truthy(view.getByText(labels.loading));
    t.is(view.queryByRole('textbox'), null);
    let retries = 0;
    const failed = makeEditor({
      loaded: false,
      loadError: {
        message: 'Unavailable',
        retry: {
          label: 'Retry loading',
          onClick: () => {
            retries++;
          }
        }
      }
    });
    view.rerender(<PopulationEdition model={failed} labels={labels} />);
    fireEvent.click(view.getByRole('button', {name: 'Retry loading'}));
    t.is(retries, 1);
    view.rerender(
      <PopulationEdition model={{...failed, loadError: {message: 'Not found'}}} labels={labels} />
    );
    t.is(view.queryByRole('button'), null);
    view.rerender(<PopulationEdition model={makeEditor({preview: undefined})} labels={labels} />);
    t.is(view.queryByRole('region', {name: labels.preview.title}), null);
  }
);

test.serial(
  'archived information is readable with no active Save, preview, tabs or mutable controls',
  t => {
    const model = makeEditor({archived: true});
    const view = render(
      <>
        <HeaderWithActions {...header({model})} />
        <PopulationEdition model={model} labels={labels} />
      </>,
      {wrapper: wrappingComponent}
    );
    t.truthy(view.getByRole('button', {name: 'Reactivate'}));
    t.is(view.queryByRole('button', {name: 'Save'}), null);
    t.is(view.queryByRole('region', {name: labels.preview.title}), null);
    t.truthy(view.getByText('former.owner'));
    t.truthy(view.getByText('Deactivated'));
    [...view.container.querySelectorAll('input, select')].forEach(element =>
      t.true((element as HTMLInputElement).disabled)
    );
    t.truthy(view.getByText(labels.typeDescription));
  }
);

test.serial('warning removals and restored drafts are reflected only from new App props', t => {
  const model = makeEditor();
  const view = renderEditor(model);
  t.truthy(view.container.querySelector('[data-name="owners-warning"]'));
  view.rerender(
    <PopulationEdition
      labels={labels}
      model={{
        ...model,
        owners: {
          ...model.owners,
          selected: model.owners.selected.slice(0, 2),
          warning: undefined,
          showDeactivatedLegend: false
        }
      }}
    />
  );
  t.is(view.container.querySelector('[data-name="owners-warning"]'), null);
  t.is(view.queryByText('former.owner'), null);
  view.rerender(<PopulationEdition labels={labels} model={model} />);
  t.truthy(view.getByText('former.owner'));
});

test.serial('each warning request scrolls and focuses again, with offset and reduced motion', t => {
  const calls: unknown[] = [];
  const originalScroll = window.HTMLElement.prototype.scrollIntoView;
  const originalMedia = window.matchMedia;
  window.HTMLElement.prototype.scrollIntoView = function (options) {
    calls.push([this.getAttribute('data-name'), options]);
  };
  t.teardown(() => {
    window.HTMLElement.prototype.scrollIntoView = originalScroll;
    window.matchMedia = originalMedia;
  });
  const model = makeEditor({focusSection: 'owners', focusRequestKey: 0});
  const view = renderEditor(model, {headerOffset: 144});
  const target = view.container.querySelector(
    '[data-name="population-section-owners"]'
  ) as HTMLElement;
  t.is(document.activeElement, target);
  t.is(target.style.scrollMarginTop, '144px');
  t.deepEqual(calls, [['population-section-owners', {behavior: 'smooth', block: 'start'}]]);
  view.rerender(<PopulationEdition labels={labels} model={{...model}} />);
  t.is(calls.length, 1);
  (view.getByRole('textbox', {name: 'Name'}) as HTMLElement).focus();
  window.matchMedia = (() => ({matches: true})) as unknown as typeof window.matchMedia;
  view.rerender(<PopulationEdition labels={labels} model={{...model, focusRequestKey: 1}} />);
  t.is(document.activeElement, target);
  t.deepEqual(calls[1], ['population-section-owners', {behavior: 'auto', block: 'start'}]);
  window.matchMedia = (() => ({matches: false})) as unknown as typeof window.matchMedia;
  view.rerender(
    <PopulationEdition
      labels={labels}
      model={{...model, focusSection: 'conditions', focusRequestKey: 2}}
    />
  );
  t.deepEqual(calls[2], ['population-section-conditions', {behavior: 'smooth', block: 'start'}]);
  view.rerender(
    <PopulationEdition
      labels={labels}
      model={{...model, archived: true, focusSection: 'preview', focusRequestKey: 3}}
    />
  );
  t.is(calls.length, 3);
  view.rerender(
    <PopulationEdition labels={labels} model={{...model, focusRequestKey: undefined}} />
  );
  t.is(calls.length, 3);
});

test.serial('preserved legacy conditions are displayed without rewriting or extra controls', t => {
  const view = renderEditor(legacy);
  t.true(view.getAllByText('Legacy profile field', {selector: 'div'}).length > 0);
  t.truthy(view.getByText('{"#range":[1700000000,1800000000]}'));
  fireEvent.input(view.getByRole('textbox', {name: 'Name'}), {target: {value: 'Rename'}});
  t.truthy(view.getByText('{"#range":[1700000000,1800000000]}'));
});

test.serial(
  'editor reuses the accessible controlled archive confirmation and keeps refusal visible',
  t => {
    const view = renderEditor(makeEditor(), {
      confirmation: {...confirmation, error: 'A current assignment uses this population.'}
    });
    t.truthy(view.getByRole('dialog'));
    t.truthy(view.getByText('A current assignment uses this population.'));
    view.rerender(<PopulationEdition model={makeEditor()} labels={labels} />);
    t.is(view.queryByRole('dialog'), null);
    t.truthy(view.getByRole('textbox', {name: 'Name'}));
  }
);

test.serial(
  'nonblocking owner warnings and zero matches do not disable an App-authorized Save',
  t => {
    let saved = 0;
    const view = render(
      <HeaderWithActions
        {...header({
          model: zero,
          onSave: () => {
            saved++;
          }
        })}
      />,
      {wrapper: wrappingComponent}
    );
    fireEvent.click(view.getByRole('button', {name: 'Save'}));
    t.is(saved, 1);
    [{dirty: false}, {valid: false}, {model: makeEditor({busy: true})}].forEach(props => {
      view.rerender(<HeaderWithActions {...header({...props, model: props.model || zero})} />);
      t.true((view.getByRole('button', {name: 'Save'}) as HTMLButtonElement).disabled);
    });
    t.is(view.queryByText('Publish'), null);
  }
);

test.serial(
  'feedback retries use supplied labels and can be removed independently of form data',
  t => {
    let retries = 0;
    const model = makeEditor({
      feedback: {
        type: 'warning',
        message: 'Saved; membership update could not start.',
        retry: {
          label: 'Retry membership update',
          onClick: () => {
            retries++;
          }
        }
      }
    });
    const view = renderEditor(model);
    fireEvent.click(view.getByRole('button', {name: 'Retry membership update'}));
    t.is(retries, 1);
    view.rerender(
      <PopulationEdition
        model={{...model, feedback: {type: 'info', message: 'Membership update queued.'}}}
        labels={labels}
      />
    );
    t.truthy(view.getByText('Membership update queued.'));
    view.rerender(<PopulationEdition model={makeEditor()} labels={labels} />);
    t.is(view.queryByText('Membership update queued.'), null);
    t.is((view.getByRole('textbox', {name: 'Name'}) as HTMLInputElement).value, model.name.value);
  }
);
