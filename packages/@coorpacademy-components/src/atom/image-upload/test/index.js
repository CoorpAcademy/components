import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {once} from 'lodash/fp';
import ImageUpload from '..';

browserEnv();

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
  const {container} = render(<ImageUpload {...props} />);
  const dragAndDrop = container.querySelector(`[data-name="drag-and-drop-wrapper"]`);
  t.truthy(dragAndDrop);
  const resetIconSearchRes = dragAndDrop.querySelector('[data-name="reset-content-icon"]');
  t.truthy(resetIconSearchRes);
  fireEvent.click(resetIconSearchRes);
});
