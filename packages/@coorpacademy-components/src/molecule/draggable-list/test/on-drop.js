import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {set} from 'lodash/fp';
import {createEvent, fireEvent} from '@testing-library/react';
import {context} from '../../../test/helpers/render-component';
import SetupSections from '..';
import {renderWithContext} from '../../../util/render-with-context';
import fixtures from './fixtures/dashboard-sections';

browserEnv();

test('should trigger onDrop handler', t => {
  t.plan(4);

  const outerDragStart = () => {
    // this allows to check if stopPropagation() has been properly called.
    // if stopPropagation() was not called, this would be called.
    // testing dragStartBoutique event below 👇
    t.fail();
  };

  const elementToDrag = fixtures.props.items[0].id;
  const elementToDrop = fixtures.props.items[2].id;

  const dropHandler = (dragged, dropped) => {
    t.is(dropped, elementToDrop);
    t.is(dragged, elementToDrag);
  };

  const {getByTestId, unmount} = renderWithContext(
    <div onDragStart={outerDragStart}>
      <SetupSections {...fixtures.props} onDrop={dropHandler} />
    </div>,
    {context, useLegacyProvider: true}
  );

  const draggableBoutique = getByTestId('draggable-analytics-boutique');
  const draggableRegion = getByTestId('draggable-analytics-region');

  const dragStartBoutique = createEvent.dragStart(draggableBoutique);
  const dragOverBoutique = createEvent.dragOver(draggableBoutique);

  fireEvent(draggableBoutique, dragStartBoutique);
  fireEvent(draggableBoutique, dragOverBoutique);
  t.is(dragOverBoutique.defaultPrevented, true);

  const dragOverRegion = createEvent.dragOver(draggableRegion);
  fireEvent(draggableRegion, dragOverRegion);
  t.is(dragOverRegion.defaultPrevented, true);

  fireEvent.drop(draggableRegion);
  unmount();
});

test('should skip drop event if dragStart is not called', t => {
  const dropHandler = (dragged, dropped) => {
    t.fail();
  };

  const {getByTestId, unmount} = renderWithContext(
    <SetupSections {...fixtures.props} onDrop={dropHandler} />,
    {context, useLegacyProvider: true}
  );

  const draggableRegion = getByTestId('draggable-analytics-region');
  const dropEvent = createEvent.drop(draggableRegion);
  fireEvent(draggableRegion, dropEvent);
  t.is(dropEvent.defaultPrevented, true);
  unmount();
});

test('should skip dragStart event if section id is not defined', t => {
  const dropHandler = (dragged, dropped) => {
    t.fail();
  };

  const {getByTestId} = renderWithContext(
    <SetupSections {...set('items.0.id', '', fixtures.props)} onDrop={dropHandler} />,
    {context, useLegacyProvider: true}
  );

  const draggableBoutique = getByTestId('draggable-');
  const draggableRegion = getByTestId('draggable-analytics-region');

  const dragStartBoutique = createEvent.dragStart(draggableBoutique);
  const dragOverBoutique = createEvent.dragOver(draggableBoutique);

  fireEvent(draggableBoutique, dragStartBoutique);
  fireEvent(draggableBoutique, dragOverBoutique);
  t.is(dragOverBoutique.defaultPrevented, true);

  const dragOverRegion = createEvent.dragOver(draggableRegion);
  fireEvent(draggableRegion, dragOverRegion);
  t.is(dragOverRegion.defaultPrevented, true);

  fireEvent.drop(draggableRegion);
});
