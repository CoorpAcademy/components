import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {once} from 'lodash/fp';
import ImageUpload from '..';
import DragAndDrop from '../../drag-and-drop';

browserEnv();
configure({adapter: new Adapter()});

test('should reset Component content', t => {
  t.plan(3);
  const props = {
    title: 'Desktop (*)',
    uploadLabel: 'Upload',
    previewLabel: 'Preview',
    onChange: () => true,
    loading: false,
    modified: false,
    previewContent: {
      type: 'image',
      src: 'https://static.coorpacademy.com/content/up/raw/logo_coorp-1491560495763.svg'
    },
    onReset: once(() => {
      t.pass();
    })
  };
  const wrapper = mount(<ImageUpload {...props} />);
  const dragAndDrop = wrapper.find(DragAndDrop);
  t.truthy(dragAndDrop);
  const resetIconSearchRes = dragAndDrop.find('[data-name="reset-content-icon"]');
  t.truthy(resetIconSearchRes.at(0));
  resetIconSearchRes.at(0).simulate('click');
});
