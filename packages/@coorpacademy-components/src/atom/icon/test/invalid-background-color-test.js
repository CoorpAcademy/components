import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {render} from '@testing-library/react';
import Icon from '..';

browserEnv();

test('Icon throws an error with an invalid backgroundColor', t => {
  const invalidColor = 'invalid color';
  const iconName = 'book-open-cover';

  const attemptToRenderWithInvalidColor = () => {
    render(<Icon iconName={iconName} backgroundColor={invalidColor} />);
  };

  const expectedErrorMessage = 'Could not parse invalid color as a color. Missing a plugin?';
  t.throws(attemptToRenderWithInvalidColor, {message: expectedErrorMessage});
});
