import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, cleanup, fireEvent, waitFor} from '@testing-library/react';
import ReviewCongrats, {setScroll} from '..';
import defaultFixture from './fixtures/default';

browserEnv({pretendToBeVisual: true});

test.after.always(cleanup);

test('should click on skill button', async t => {
  const {getByTestId} = render(
    <ReviewCongrats {...defaultFixture.props} data-testid="revise-skill-link" />
  );

  await waitFor(async () => {
    const result = await t.try(tt => {
      const skillLink = getByTestId('revise-skill-link');
      tt.truthy(skillLink);
      if (skillLink)
        tt.notThrows(() => {
          return fireEvent.click(skillLink);
        });
    });
    if (result.passed) return result.commit();
    result.discard();
    throw result.errors;
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
