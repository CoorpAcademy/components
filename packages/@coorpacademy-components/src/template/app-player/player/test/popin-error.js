import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import SlidePlayer from '..';
import {renderWithContext} from '../../../../util/render-with-context';
import playerPopinError from './fixtures/popin-error';

browserEnv();

test('should mount the popin', t => {
  const context = {
    skin: {},
    translate: key => {
      t.pass();
      return key;
    }
  };
  const dataName = 'cm-popin-container';
  const {container} = renderWithContext(<SlidePlayer {...playerPopinError.props} />, {
    context
  });
  const popin = container.querySelector(`[data-name="${dataName}"]`);
  t.truthy(popin);
});

test('should not mount the popin', t => {
  const context = {
    skin: {},
    translate: key => {
      t.pass();
      return key;
    }
  };
  const dataName = 'cm-popin-container';
  const {container} = renderWithContext(<SlidePlayer {...playerPopinError.props} popin={null} />, {
    context
  });
  const popin = container.querySelector(`[data-name="${dataName}"]`);
  t.falsy(popin);
});
