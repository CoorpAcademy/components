import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {wrappingComponent} from '../../../../test/helpers/render-component';
import BrandUpdate from '..';
import warning from './fixtures/assignment-edition-audience-access';
import selected from './fixtures/assignment-edition-audience-access-selected';
import restored from './fixtures/assignment-edition-audience-access-restored';

browserEnv();
test.afterEach.always(cleanup);

test.serial(
  'preview fixtures show the translated warning and selection then clear both on recovery',
  t => {
    const view = render(<BrandUpdate {...warning.props} />, {wrapper: wrappingComponent});
    t.truthy(view.getByRole('button', {name: '4 content items unavailable'}));
    t.truthy(view.getByRole('button', {name: 'Select unavailable content (4)'}));
    t.true(
      view
        .getByRole('status')
        .textContent.startsWith("4 content items aren't available to everyone")
    );
    t.truthy(view.getByRole('button', {name: 'Remove Alex Martin'}));
    t.true(view.getByRole('button', {name: 'Publish'}).disabled);
    view.rerender(<BrandUpdate {...selected.props} />);
    t.is(
      [...view.container.querySelectorAll('#assignment-contents input[type="checkbox"]')].filter(
        checkbox => checkbox.checked
      ).length,
      4
    );
    view.rerender(<BrandUpdate {...restored.props} />);
    t.is(view.queryByRole('status'), null);
    t.is(view.queryByRole('button', {name: '4 content items unavailable'}), null);
    t.is(view.queryByRole('button', {name: 'Remove Alex Martin'}), null);
    t.false(view.getByRole('button', {name: 'Publish'}).disabled);
  }
);
