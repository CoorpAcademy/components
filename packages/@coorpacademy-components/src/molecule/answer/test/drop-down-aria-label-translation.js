import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {renderWithContext} from '../../../util/render-with-context';
import Answer from '..';
import dropDownFixture from './fixtures/drop-down';

browserEnv();

test('should find translated aria-label for a dropdown answer', t => {
  t.plan(2);
  const {getByTestId} = renderWithContext(<Answer {...dropDownFixture.props} />, {
    context: {
      skin: {},
      translate: key => {
        t.pass();
        return key;
      }
    }
  });

  const dropDownIcon = getByTestId('select-arrow-down-icon');

  t.is(dropDownIcon.getAttribute('aria-label'), 'drop_down_icon');
});
