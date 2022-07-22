import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import style from '../../image-upload/style.css';
import DragAndDrop from '..';
import withChildrenFixtures from './fixtures/with-children';

browserEnv();

const {props} = withChildrenFixtures;

test('should set state to dragging when user starts dragging', t => {
  t.plan(1);
  const {container} = render(
    <DragAndDrop {...props} previewContent={{}}>
      {(onDragStart, onDragStop) => (
        <input
          className={style.input}
          key="1"
          type="file"
          accept="image*/"
          onChange={() => true}
          onDragEnter={onDragStart}
          onDrop={onDragStop}
          onDragLeave={onDragStop}
          data-name="drag-and-drop-input"
        />
      )}
    </DragAndDrop>
  );

  const draggableElement = container.querySelector('[data-name="drag-and-drop-input"]');
  t.truthy(draggableElement);

  fireEvent.dragEnter(draggableElement);
  fireEvent.dragLeave(draggableElement);
});
