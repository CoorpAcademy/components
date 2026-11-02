import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {wrappingComponent} from '../../../../test/helpers/render-component';
import BrandUpdate, {headerClearance} from '..';
import listItems from './fixtures/list-items-assignment-without-scope';

browserEnv();
const original = Element.prototype.getBoundingClientRect;
test.afterEach.always(() => {
  cleanup();
  Element.prototype.getBoundingClientRect = original;
});

// Measured in Storybook on master: the three-line tracking header ends at 167px while the
// content starts at 146px; the one-line skill edition header ends at 110px, content at 140px.
test('a header taller than its reserved space pushes the content below it, with a 24px gap', t => {
  t.is(headerClearance(167, 146, 0), 45);
});

test('a header that fits its reserved space adds nothing', t => {
  t.is(headerClearance(110, 140, 0), 0);
});

test('the clearance is stable once applied', t => {
  t.is(headerClearance(167, 146 + 45, 45), 45);
});

const layout = ({headerBottom, contentTop}) => {
  Element.prototype.getBoundingClientRect = function () {
    const name = this.getAttribute('data-name');
    if (name === 'brand-update-header') return {top: 0, bottom: headerBottom, height: headerBottom};
    if (name === 'brand-update-content') {
      const shift = Number.parseFloat(this.style.marginTop) || 0;
      return {top: contentTop + shift, bottom: contentTop + shift, height: 0};
    }
    return original.call(this);
  };
};
const content = view => view.container.querySelector('[data-name="brand-update-content"]');

test.serial(
  'the content padding counts as space: a short header over a padded content adds nothing',
  t => {
    // Skill edition on master: the header ends at 110px, the content box at 110px, its 30px
    // padding-top puts the first element at 140px.
    layout({headerBottom: 110, contentTop: 110});
    const padding = window.getComputedStyle;
    window.getComputedStyle = node =>
      node.getAttribute && node.getAttribute('data-name') === 'brand-update-content'
        ? {paddingTop: '30px'}
        : padding(node);
    try {
      const view = render(<BrandUpdate {...listItems.props} />, {wrapper: wrappingComponent});
      t.is(content(view).style.marginTop, '');
    } finally {
      window.getComputedStyle = padding;
    }
  }
);

test.serial('a tall header moves the content down by the clearance', t => {
  layout({headerBottom: 167, contentTop: 146});
  const view = render(<BrandUpdate {...listItems.props} />, {wrapper: wrappingComponent});
  t.is(content(view).style.marginTop, '45px');
});

test.serial('a short header leaves the content where it was', t => {
  layout({headerBottom: 110, contentTop: 140});
  const view = render(<BrandUpdate {...listItems.props} />, {wrapper: wrappingComponent});
  t.is(content(view).style.marginTop, '');
});
