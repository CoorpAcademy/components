import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {replace} from 'lodash/fp';
import {Overlay} from '../overlay';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class
import DragDrop from '..';
import Default from './fixtures/default';

browserEnv();

configure({adapter: new Adapter()});

// For further information  about flushPromises
// Important: react-dropzone makes its drag'n'drop callbacks asynchronous to enable promise based getDataTransfer functions.
// In order to properly test this, you may want to utilize a helper function to run all promises like this:
// see : https://github.com/react-dropzone/react-dropzone/tree/v9.0.0
// This test is heavily inspired by this https://github.com/react-dropzone/react-dropzone/blob/v9.0.0/src/index.spec.js#L853

const flushPromises = wrapper =>
  new Promise(resolve => {
    global.setImmediate(() => {
      wrapper.update();
      resolve(wrapper);
    });
  });

const context = {
  skin: {
    common: {
      primary: '#FF7043'
    }
  }
};

test('should show the overlay when a file is dragged', async t => {
  const component = mount(<DragDrop {...Default.props} />, {context});
  const wrapperStyle = `.${replace(' ', '.', style.wrapper)}`;
  const wrapper = component.find(wrapperStyle);
  t.is(wrapper.exists(), true);
  wrapper.simulate('dragEnter');
  const updatedDropzone = await flushPromises(component);

  t.true(updatedDropzone.exists(Overlay));
});
