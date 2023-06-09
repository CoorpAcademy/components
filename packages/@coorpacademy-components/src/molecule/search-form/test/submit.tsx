import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import SearchForm from '..';

browserEnv();

test('should call onSubmit when user want to submit form', t => {
  t.plan(2);

  const onSubmit = () => t.pass();
  const {container} = render(
    <SearchForm
      onSubmit={onSubmit}
      search={{placeholder: 'say your name', value: 'my name is murph'}}
    />
  );

  const searchForm = container.querySelector('[data-name="searchForm"]');
  t.truthy(searchForm);
  fireEvent.submit(searchForm as Element);
});
