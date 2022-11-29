import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, cleanup, fireEvent, waitFor} from '@testing-library/react';
import ReviewCongrats, {setScroll} from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test.afterEach(cleanup);

test('should click on skill button', async t => {
  const {getByTestId} = render(<ReviewCongrats {...defaultFixture.props} />);

  await waitFor(() => {
    const skillLink = getByTestId('revise-skill-link');
    t.truthy(skillLink);
    if (skillLink)
      t.notThrows(() => {
        return fireEvent.click(skillLink);
      });
  });

  t.pass();
});

test('setScroll', t => {
  t.plan(2);

  const _container = {
    current: {
      scrollTo: ({left, behavior}) => {
        t.is(left, 1000);
        t.is(behavior, 'smooth');
      }
    }
  };

  setScroll(_container)();
});
