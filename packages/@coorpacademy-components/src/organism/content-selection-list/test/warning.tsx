import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import ContentSelectionList from '..';
import assignment from './fixtures/assignment';

browserEnv();
test.afterEach.always(cleanup);

test.serial(
  'availability warning appears before selection controls and updates with the audience',
  t => {
    const warning = '2 content items are not available to everyone in the current audience.';
    const view = render(<ContentSelectionList {...assignment.props} warning={warning} />, {
      wrapper: wrappingComponent
    });
    const status = view.getByRole('status');
    t.is(status.textContent, warning);
    t.truthy(view.getByText(warning));
    t.true(Boolean(status.compareDocumentPosition(view.getAllByRole('checkbox')[0]) & 4));
    view.rerender(<ContentSelectionList {...assignment.props} />);
    t.is(view.queryByRole('status'), null);
  }
);
