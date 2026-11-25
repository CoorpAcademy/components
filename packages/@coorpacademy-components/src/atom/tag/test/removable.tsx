import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Tag from '..';

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
