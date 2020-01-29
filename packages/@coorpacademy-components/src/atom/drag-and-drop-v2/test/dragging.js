import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import style from '../../image-upload/style.css';
import withChildrenFixtures from './fixtures/with-children';
import DragAndDrop from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should set state to dragging when user starts dragging', t => {
  const wrapper = shallow(
    <DragAndDrop {...withChildrenFixtures.props}>
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
