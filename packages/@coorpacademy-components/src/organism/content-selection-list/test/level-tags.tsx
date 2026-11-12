import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import tagStyle from '../../../atom/tag/style.css';
import ContentSelectionList from '..';
import levels from './fixtures/assignment-levels';
import assignment from './fixtures/assignment';

browserEnv();
test.afterEach.always(cleanup);

test.serial('content levels use their own tag colors and white icons', t => {
  const view = render(<ContentSelectionList {...levels.props} />, {wrapper: wrappingComponent});
  ['base', 'advanced', 'coach'].forEach(level => {
    const tag = view.container.querySelector(`[data-name="content-tag-${level}"]`) as HTMLElement;
    t.truthy(tag);
    t.true(tagStyle[level].split(' ').every((name: string) => tag.classList.contains(name)));
    t.is(tag.querySelector('svg')?.getAttribute('color'), '#FFFFFF');
  });
});

test.serial('contents without a level keep the default tag', t => {
  const view = render(<ContentSelectionList {...assignment.props} />, {wrapper: wrappingComponent});
  const tag = view.container.querySelector('[data-name="content-tag-Module"]') as HTMLElement;
  t.truthy(tag);
  t.true(tagStyle.defaultStyle.split(' ').every((name: string) => tag.classList.contains(name)));
});
