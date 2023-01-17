import test from 'ava';
import {render} from '@testing-library/react';
import browserEnv from 'browser-env';
import React from 'react';
import Handle from '../handle';

browserEnv();

test('should instanciate Handle, mount and unmount it', t => {
  const {getByTestId, unmount} = render(<Handle />);

  const handle = getByTestId('handle-wrapper');
  t.truthy(handle);

  unmount();
});
