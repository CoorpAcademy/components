import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import SearchForm from '..';

// Add xmark icon to FontAwesome library for tests
library.add(faXmark);

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
