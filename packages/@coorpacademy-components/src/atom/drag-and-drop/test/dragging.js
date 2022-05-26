import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import style from '../../image-upload/style.css';
import DragAndDrop from '..';
import withChildrenFixtures from './fixtures/with-children';

browserEnv();
configure({adapter: new Adapter()});

const {props} = withChildrenFixtures;

test('should set state to dragging when user starts dragging', t => {
  const wrapper = shallow(
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
        />
      )}
    </DragAndDrop>
  );
  const instance = wrapper.instance();

  t.false(instance.state.dragging);
  wrapper.find('input').simulate('dragenter');
  t.true(instance.state.dragging);
  wrapper.find('input').simulate('dragleave');
  t.false(instance.state.dragging);
});
