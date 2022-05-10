import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {render, cleanup} from '@testing-library/react';
import SlidesReview from '..';
import successFixture from './fixtures/success';
// import controlsFixture from './fixtures/controls';

browserEnv();

test.afterEach(cleanup);

test('should update && load the animation, should clean up after unmount', t => {
  const {container, rerender, unmount} = render(<SlidesReview {...successFixture.props} />);

  rerender(<SlidesReview {...successFixture.props} />);

  const wrapper = container.querySelectorAll('[data-name="slides-revision-container"]');
  t.truthy(wrapper);

  const validateButton = wrapper[0].querySelector('[data-name="slide-validate-button"]');
  t.truthy(validateButton);

  unmount();

  t.pass();
});
