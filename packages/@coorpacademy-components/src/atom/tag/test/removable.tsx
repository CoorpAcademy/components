import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Tag from '..';
import style from '../style.css';

browserEnv();
test.afterEach.always(cleanup);

test.serial('a removable tag calls the supplied action and never submits its parent form', t => {
  let removed = 0;
  let submitted = 0;
  const view = render(
    <form onSubmit={() => submitted++}>
      <Tag
        label="Finance"
        type="info"
        removeAction={{label: 'Remove Finance', onClick: () => removed++}}
      />
    </form>
  );
  fireEvent.click(view.getByRole('button', {name: 'Remove Finance'}));
  t.is(removed, 1);
  t.is(submitted, 0);
});

test.serial('a disabled remove action keeps the value visible without invoking the callback', t => {
  let removed = 0;
  const view = render(
    <Tag
      label="Leadership essentials"
      type="info"
      removeAction={{
        label: 'Remove Leadership essentials',
        onClick: () => removed++,
        disabled: true
      }}
    />
  );
  fireEvent.click(view.getByRole('button', {name: 'Remove Leadership essentials'}));
  t.is(removed, 0);
  t.truthy(view.getByText('Leadership essentials'));
});

test.serial('existing tags without a removal action remain non-interactive', t => {
  const view = render(<Tag label="Finance" type="info" />);
  t.is(view.queryByRole('button'), null);
});

test.serial('preserving label case is optional and restores the legacy style when disabled', t => {
  const label = 'eLearning and iOS';
  const view = render(<Tag label={label} />);
  const originalClass = view.getByText(label).className;
  t.false(view.getByText(label).classList.contains(style.preserveLabelCase));
  view.rerender(<Tag label={label} preserveLabelCase />);
  t.true(view.getByText(label).classList.contains(style.preserveLabelCase));
  t.is(view.getByText(label).textContent, label);
  view.rerender(<Tag label={label} preserveLabelCase={false} />);
  t.is(view.getByText(label).className, originalClass);
});

test.serial('an optional inline detail preserves the label and controlled removal action', t => {
  let removed = 0;
  const view = render(
    <Tag
      label="Managing teams"
      detail="No content"
      removeAction={{label: 'Remove Managing teams', onClick: () => removed++}}
    />
  );
  const tag = view.getByText('Managing teams').closest('[data-name="content-tag-Managing teams"]');
  t.true(tag?.contains(view.getByText('No content')));
  fireEvent.click(view.getByRole('button', {name: 'Remove Managing teams'}));
  t.is(removed, 1);
  view.rerender(<Tag label="Managing teams" />);
  t.is(view.queryByText('No content'), null);
});
