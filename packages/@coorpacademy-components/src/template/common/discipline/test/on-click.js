import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent, queryByTestId} from '@testing-library/react';
import Discipline from '..';
import {renderWithContext} from '../../../../util/render-with-context';
import fixture from './fixtures/default';

browserEnv();

test('should show feedback when user click add to my list button', t => {
  t.plan(4);
  const onFavoriteClick = cb => {
    t.pass();
    cb();
  };

  const {getByTestId, getAllByTestId, container} = renderWithContext(
    <Discipline {...fixture.props} onFavoriteClick={onFavoriteClick} />
  );

  t.falsy(queryByTestId(container, 'add-to-my-list-feedback'));

  const addToMyListButton = getAllByTestId('add-to-my-list-button')[0];
  t.truthy(addToMyListButton);
  fireEvent.click(addToMyListButton, {defaultPrevented: true});

  t.truthy(getByTestId('add-to-my-list-feedback'));
});
