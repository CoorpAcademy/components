import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {fireEvent} from '@testing-library/react';
import CMPopin from '..';
import {renderWithContext} from '../../../util/render-with-context';
import PopinCardFixtures from './fixtures/popin-with-cards';

browserEnv();

test('should call handleClose function on close button', t => {
  t.plan(2);
  const context = {
    translate: (key: string) => key
  };
  const props = {
    ...PopinCardFixtures.props,
    onClose: () => t.pass()
  };
  const {container} = renderWithContext(<CMPopin {...props} />, context);
  const onCloseButton = container.querySelector('[data-name="close-icon"]');
  t.truthy(onCloseButton);
  fireEvent.click(onCloseButton as Element);
});
