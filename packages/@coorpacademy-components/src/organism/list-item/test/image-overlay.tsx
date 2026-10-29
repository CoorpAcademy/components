import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import Component from '..';
import fixture2 from './fixtures/checkbox-deletable';

browserEnv();
test.afterEach.always(cleanup);

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
