import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Title from '..';

browserEnv();
test.afterEach.always(cleanup);

test.serial('without headingLevel the title stays a group, as before', t => {
  const view = render(<Title type="form-group" title="Populations" />);
  t.truthy(view.getByRole('group'));
  t.is(view.queryByRole('heading'), null);
});

test.serial('headingLevel renders the title as a heading of that level, same style', t => {
  const plain = render(<Title type="form-group" titleSize="medium" title="Populations" />);
  const plainClass = plain.getByText('Populations').className;
  cleanup();
  const view = render(
    <Title type="form-group" titleSize="medium" title="Populations" headingLevel={3} />
  );
  const heading = view.getByRole('heading', {
    level: 3,
    name: 'Populations'
  });
  t.true(heading.className.startsWith(plainClass));
  t.is(view.queryByRole('group'), null);
});
