import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {createEvent, fireEvent} from '@testing-library/react';
import {context} from '../../../test/helpers/render-component';
import DragDrop from '..';
import {renderWithContext} from '../../../util/render-with-context';
import readyFixture from './fixtures/ready';

browserEnv();

test('should call the onBack function', t => {
  t.plan(2);

  const outerClick = () => {
    // this allows to check if stopPropagation() has been properly called.
    // if stopPropagation() was not called, this would be called.
    t.fail();
  };

  const props = {
    ...readyFixture.props,
    onBack: () => t.pass()
  };
  const {getByTestId, unmount} = renderWithContext(
    <div onClick={outerClick}>
      <DragDrop {...props} />
    </div>,
    {context}
  );

  const back = getByTestId('back');
  const clickEvent = createEvent.click(back);
  fireEvent(back, clickEvent);

  t.is(clickEvent.defaultPrevented, true);
  unmount();
});

test('should call the onDelete function', t => {
  t.plan(2);

  const outerClick = () => {
    // this allows to check if stopPropagation() has been properly called.
    // if stopPropagation() was not called, this would be called.
    t.fail();
  };

  const props = {
    ...readyFixture.props,
    onDelete: () => t.pass()
  };

  const {getByTestId} = renderWithContext(
    <div onClick={outerClick}>
      <DragDrop {...props} />
    </div>,
    {context}
  );

  const trashIcon = getByTestId('trash-icon');
  const clickEvent = createEvent.click(trashIcon);
  fireEvent(trashIcon, clickEvent);

  t.is(clickEvent.defaultPrevented, true);
});
