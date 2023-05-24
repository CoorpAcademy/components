import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import DragDrop from '..';
import {renderWithContext} from '../../../util/render-with-context';
import Default from './fixtures/default';

browserEnv();

const context = {
  skin: {
    common: {
      primary: 'rgb(255, 112, 67)'
    }
  }
};

test('should show the overlay when a file is dragged', async t => {
  t.plan(3);

  const {getByTestId, rerender, container} = renderWithContext(<DragDrop {...Default.props} />, {
    context
  });

  const cta = container.querySelector(`[data-name="cta"]`);
  t.is(cta.style.backgroundColor, context.skin.common.primary);

  const dropZone = getByTestId('drop-zone');
  fireEvent.dragEnter(dropZone);

  try {
    getByTestId('overlay');
  } catch (e) {
    t.pass();
  }

  await rerender(<DragDrop {...Default.props} />);
  const overlay = getByTestId('overlay');
  t.truthy(overlay);
});
