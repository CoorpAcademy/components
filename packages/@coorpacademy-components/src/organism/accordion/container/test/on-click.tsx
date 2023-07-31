import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Accordion from '..';
import fixture from './fixtures/default';

browserEnv();

test('should call the onClick function', t => {
  t.plan(4);
  let selectedKey = 0;
  const onClick = (key: number) => {
    t.is(key, selectedKey);
  };
  const {container} = render(
    <Accordion {...fixture.props} onClick={onClick}>
      {fixture.children}
    </Accordion>
  );
  const partHeaders = container.querySelectorAll('.part__header');
  t.true(partHeaders.length > 0);
  fireEvent.click(partHeaders[selectedKey]);
  selectedKey = 1;
  fireEvent.click(partHeaders[selectedKey]);
  selectedKey = 2;
  fireEvent.click(partHeaders[selectedKey]);
});
