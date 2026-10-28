import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import {wrappingComponent, renderComponent} from '../../../test/helpers/render-component';
import Component from '..';
import fixture0 from './fixtures/archived';
import fixture1 from './fixtures/checkbox';
import fixture2 from './fixtures/checkbox-deletable';
import fixture3 from './fixtures/checkbox-selected';
import fixture4 from './fixtures/custom-skill';
import fixture5 from './fixtures/draft';
import fixture6 from './fixtures/file';
import fixture7 from './fixtures/file-overflow-hidden';
import fixture8 from './fixtures/files-not-saved';
import fixture9 from './fixtures/learning-priority';
import fixture10 from './fixtures/learning-priority-selected';
import fixture11 from './fixtures/partialy-failed';
import fixture12 from './fixtures/published';
import fixture13 from './fixtures/ready-for-saving';
import fixture14 from './fixtures/revised';
import fixture15 from './fixtures/saved';
import fixture16 from './fixtures/totaly-failed';
import fixture17 from './fixtures/translation';
import fixture18 from './fixtures/translation-readonly';
import fixture19 from './fixtures/upload-in-progress';
import fixture20 from './fixtures/with-html-title';

browserEnv();
test.afterEach.always(cleanup);

test.serial('all existing list-item fixtures preserve markup', t => {
  const fixtures = [
    ['archived', fixture0],
    ['checkbox', fixture1],
    ['checkbox-deletable', fixture2],
    ['checkbox-selected', fixture3],
    ['custom-skill', fixture4],
    ['draft', fixture5],
    ['file', fixture6],
    ['file-overflow-hidden', fixture7],
    ['files-not-saved', fixture8],
    ['learning-priority', fixture9],
    ['learning-priority-selected', fixture10],
    ['partialy-failed', fixture11],
    ['published', fixture12],
    ['ready-for-saving', fixture13],
    ['revised', fixture14],
    ['saved', fixture15],
    ['totaly-failed', fixture16],
    ['translation', fixture17],
    ['translation-readonly', fixture18],
    ['upload-in-progress', fixture19],
    ['with-html-title', fixture20]
  ] as const;
  fixtures.forEach(([name, fixture]) => {
    const markup = renderComponent(t, Component, fixture);
    t.snapshot(markup.replace(/(id|for)="input-checkbox-[0-9]+"/g, '$1="checkbox-id"'), name);
  });
});

test.serial('overlay coexists with image checkbox and actions', t => {
  const view = render(
    <Component {...fixture2.props} image="thumbnail.jpg" imageOverlay="hidden" />,
    {wrapper: wrappingComponent}
  );
  t.truthy(view.container.querySelector('[data-name="content-image-overlay"] svg'));
  t.truthy(view.getByRole('checkbox'));
  t.truthy(view.getByRole('button', {name: 'Delete'}));
});

test.serial('no overlay with no image', t => {
  const view = render(<Component title="Module" imageOverlay="hidden" />, {
    wrapper: wrappingComponent
  });
  t.is(view.container.querySelector('[data-name="content-image-overlay"]'), null);
});

test.serial('removing an overlaid image retains the independent badge and selected controls', t => {
  const changes: boolean[] = [];
  const deletions: string[] = [];
  const props = {
    ...fixture2.props,
    checkbox: {checked: true, onChange: (value: boolean) => changes.push(value)},
    secondButtonLink: {label: 'Delete', onClick: () => deletions.push('delete')},
    contentBadge: {category: 'hidden', label: 'Hidden'}
  };
  const view = render(<Component {...props} image="thumbnail.jpg" imageOverlay="hidden" />, {
    wrapper: wrappingComponent
  });
  t.truthy(view.container.querySelector('[data-name="content-image-overlay"]'));
  const checkbox = view.getByRole('checkbox') as HTMLInputElement;
  view.rerender(<Component {...props} image={undefined} imageOverlay="hidden" />);
  t.is(view.container.querySelector('[data-name="card-image-preview"]'), null);
  t.is(view.container.querySelector('[data-name="content-image-overlay"]'), null);
  t.truthy(view.getByText('Hidden'));
  t.truthy(view.getByText('Course'));
  t.is(view.getByRole('checkbox'), checkbox);
  t.true(checkbox.checked);
  fireEvent.click(checkbox);
  fireEvent.click(view.getByRole('button', {name: 'Delete'}));
  t.deepEqual(changes, [false]);
  t.deepEqual(deletions, ['delete']);
});
