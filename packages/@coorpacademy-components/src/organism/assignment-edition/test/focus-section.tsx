import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import AssignmentEdition from '..';
import {makeProps} from './helpers/props';

browserEnv();
test.afterEach.always(cleanup);

test.serial('focus change scrolls the requested section with sticky header clearance', t => {
  const original = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, 'scrollIntoView');
  const geometry = window.HTMLElement.prototype.getBoundingClientRect;
  const calls: unknown[] = [];
  window.HTMLElement.prototype.getBoundingClientRect = function () {
    return {
      ...geometry.call(this),
      bottom: this.dataset.header === 'fixed' ? 176 : 0
    };
  };
  window.HTMLElement.prototype.scrollIntoView = function (options) {
    calls.push([this.id, this.style.scrollMarginTop, options]);
  };
  const props = makeProps();
  const page = (focusSection?: 'contents' | 'dates', isFetching = false) => (
    <div>
      <div data-header="fixed">
        <div data-name="header-with-actions-wrapper" />
      </div>
      <AssignmentEdition {...props} focusSection={focusSection} isFetching={isFetching} />
    </div>
  );
  try {
    const view = render(page(), {wrapper: wrappingComponent});
    t.deepEqual(calls, []);
    view.rerender(page('contents'));
    t.deepEqual(calls, [['assignment-contents', '192px', {block: 'start'}]]);
    view.rerender(page('contents'));
    t.is(calls.length, 1);
    view.rerender(page('dates'));
    t.is(calls.length, 2);
    view.rerender(page());
    t.is(calls.length, 2);
    view.rerender(page('contents', true));
    t.is(calls.length, 2);
    view.rerender(page('contents'));
    t.is(calls.length, 3);
    view.unmount();
    render(page('contents'), {wrapper: wrappingComponent});
    t.is(calls.length, 4);
  } finally {
    window.HTMLElement.prototype.getBoundingClientRect = geometry;
    if (original) Object.defineProperty(window.HTMLElement.prototype, 'scrollIntoView', original);
    else delete (window.HTMLElement.prototype as Partial<HTMLElement>).scrollIntoView;
  }
});

test.serial('focus uses the current editor and 16px clearance without a header', t => {
  const original = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, 'scrollIntoView');
  const calls: unknown[] = [];
  window.HTMLElement.prototype.scrollIntoView = function () {
    calls.push([
      this.closest('[data-editor]')?.getAttribute('data-editor'),
      this.style.scrollMarginTop
    ]);
  };
  try {
    render(
      <div>
        <div data-editor="first">
          <AssignmentEdition {...makeProps()} />
        </div>
        <div data-editor="second">
          <AssignmentEdition {...makeProps()} focusSection="contents" />
        </div>
      </div>,
      {wrapper: wrappingComponent}
    );
    t.deepEqual(calls, [['second', '16px']]);
  } finally {
    if (original) Object.defineProperty(window.HTMLElement.prototype, 'scrollIntoView', original);
    else delete (window.HTMLElement.prototype as Partial<HTMLElement>).scrollIntoView;
  }
});

test.serial('fetching defers focus to the latest requested section and permits cancellation', t => {
  const original = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, 'scrollIntoView');
  const calls: string[] = [];
  window.HTMLElement.prototype.scrollIntoView = function () {
    calls.push(this.id);
  };
  const props = makeProps();
  try {
    const view = render(<AssignmentEdition {...props} isFetching focusSection="contents" />, {
      wrapper: wrappingComponent
    });
    view.rerender(<AssignmentEdition {...props} isFetching focusSection="audience" />);
    t.deepEqual(calls, []);
    view.rerender(<AssignmentEdition {...props} focusSection="audience" />);
    t.deepEqual(calls, ['assignment-audience']);
    view.rerender(<AssignmentEdition {...props} isFetching focusSection="information" />);
    view.rerender(<AssignmentEdition {...props} isFetching />);
    view.rerender(<AssignmentEdition {...props} />);
    t.deepEqual(calls, ['assignment-audience']);
    view.rerender(<AssignmentEdition {...props} focusSection="information" />);
    t.deepEqual(calls, ['assignment-audience', 'assignment-information']);
  } finally {
    if (original) Object.defineProperty(window.HTMLElement.prototype, 'scrollIntoView', original);
    else delete (window.HTMLElement.prototype as Partial<HTMLElement>).scrollIntoView;
  }
});

test.serial('focus measures the nearest containing header again when the target changes', t => {
  const original = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, 'scrollIntoView');
  const geometry = window.HTMLElement.prototype.getBoundingClientRect;
  const calls: unknown[] = [];
  let innerHeaderBottom = 120;
  window.HTMLElement.prototype.getBoundingClientRect = function () {
    return {
      ...geometry.call(this),
      bottom: this.dataset.header === 'inner' ? innerHeaderBottom : 300
    };
  };
  window.HTMLElement.prototype.scrollIntoView = function (options) {
    calls.push([this.id, this.style.scrollMarginTop, options]);
  };
  const props = makeProps();
  const page = (focusSection: 'information' | 'dates') => (
    <div>
      <div data-header="outer">
        <div data-name="header-with-actions-wrapper" />
      </div>
      <div>
        <div data-header="inner">
          <div data-name="header-with-actions-wrapper" />
        </div>
        <AssignmentEdition {...props} focusSection={focusSection} />
      </div>
    </div>
  );
  try {
    const view = render(page('information'), {wrapper: wrappingComponent});
    t.deepEqual(calls, [['assignment-information', '136px', {block: 'start'}]]);
    innerHeaderBottom = 208;
    view.rerender(page('dates'));
    t.deepEqual(calls[1], ['assignment-dates', '224px', {block: 'start'}]);
  } finally {
    window.HTMLElement.prototype.getBoundingClientRect = geometry;
    if (original) Object.defineProperty(window.HTMLElement.prototype, 'scrollIntoView', original);
    else delete (window.HTMLElement.prototype as Partial<HTMLElement>).scrollIntoView;
  }
});

test.serial('focus tolerates an environment without scrollIntoView', t => {
  const original = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, 'scrollIntoView');
  delete (window.HTMLElement.prototype as Partial<HTMLElement>).scrollIntoView;
  try {
    const view = render(<AssignmentEdition {...makeProps()} focusSection="dates" />, {
      wrapper: wrappingComponent
    });
    t.is(
      (view.container.querySelector('#assignment-dates') as HTMLElement).style.scrollMarginTop,
      '16px'
    );
  } finally {
    if (original) Object.defineProperty(window.HTMLElement.prototype, 'scrollIntoView', original);
  }
});
