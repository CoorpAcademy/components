import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {renderWithContext} from '../../../util/render-with-context';
import TeamsDashboard from '..';
import defaultFixture from './fixtures/default';
import loadingFixture from './fixtures/is-loading';

browserEnv();

test('if isLoading is true, then the loader should be rendered', t => {
  t.plan(1);
  const context = {
    translate: (key: string) => {
      return key;
    },
    skin: {}
  };
  const {container} = renderWithContext(<TeamsDashboard {...loadingFixture.props} />, {context});
  const loader = container.querySelector('[data-name="teams-dashboard-loader"]');
  t.truthy(loader);
});

test('if isLoading is false, then the dashboard content should be rendered (header and 2 sections)', t => {
  t.plan(22); // 11 call to translate for manyCardsProps, 9 for cardsProps, 2 assertions in the test itself
  const context = {
    translate: (key: string) => {
      t.pass();
      return key;
    },
    skin: {}
  };
  const {container} = renderWithContext(<TeamsDashboard {...defaultFixture.props} />, {context});
  const sectionsList = container.querySelector('[data-name="sections-wrapper"]') as Element;
  t.truthy(sectionsList);
  t.is(sectionsList.children.length, 2);
});
