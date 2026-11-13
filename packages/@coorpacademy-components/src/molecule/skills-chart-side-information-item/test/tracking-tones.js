import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Item from '..';
import style from '../style.css';

browserEnv();
test.afterEach.always(cleanup);

['completed', 'inProgress', 'assigned', 'dueSoon', 'overdue'].forEach(tone => {
  test.serial(`tracking card applies the ${tone} style`, t => {
    const {container, getByText} = render(
      <Item title="Title" value="2" tone={tone} icon={{iconName: 'clock'}} />
    );
    const card = getByText('Title').closest('div').parentElement.parentElement;
    t.true(style[tone].split(' ').every(name => card.classList.contains(name)));
    t.truthy(container.querySelector(`.${style.toneIcon}`));
    t.is(container.querySelector('svg').getAttribute('color'), 'currentColor');
  });
});

test.serial('a card without a tone keeps its original presentation', t => {
  const {container} = render(<Item title="Title" value="2" icon={{iconName: 'clock'}} />);
  t.is(container.querySelector(`.${style.toneIcon}`), null);
});
