import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Tabs from '..';
import style from '../style.css';

browserEnv();
test.afterEach.always(cleanup);

const items = [
  {title: 'To do', count: 0, isActive: true},
  {title: 'Finished', count: 3, isActive: false}
];

test.serial('a tab keeps its 160px minimum by default', t => {
  const {getAllByRole} = render(<Tabs items={items} />);
  getAllByRole('tab').forEach(tab => {
    t.true(tab.classList.contains(style.tab));
    t.false(tab.classList.contains(style.compact));
  });
});

test.serial('compact tabs are as wide as their label', t => {
  const {getAllByRole} = render(<Tabs items={items} compact />);
  getAllByRole('tab').forEach(tab => t.true(tab.classList.contains(style.compact)));
});
