import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render} from '@testing-library/react';
import Answer from '..';
import dropDownFixture from './fixtures/drop-down';

browserEnv();

test('should not find an aria-label for a dropdown answer icon', t => {
  const {getByTestId} = render(<Answer {...dropDownFixture.props} />, {
    context: {
      skin: {},
      translate: key => {
        t.pass();
        return key;
      }
    }
  });

  const dropDownIcon = getByTestId('select-arrow-down-icon');

  t.falsy(dropDownIcon.getAttribute('aria-label'));
});
