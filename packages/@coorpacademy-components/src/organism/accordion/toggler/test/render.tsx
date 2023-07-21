import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import {take} from 'lodash/fp';
import Accordion from '..';
import onlyOneFixture from './fixtures/only-one';

browserEnv();

const SINGLE_TAB_PROPS = {
  props: {
    ...onlyOneFixture.props,
    tabProps: take(1, onlyOneFixture.props.tabProps)
  },
  children: take(1, onlyOneFixture.children)
};

test(`should keep isOpen in state`, t => {
  t.plan(3);
  const {container} = render(
    <Accordion {...SINGLE_TAB_PROPS.props}>{SINGLE_TAB_PROPS.children}</Accordion>
  );
  const partHeader = container.querySelectorAll('.part__header');
  t.truthy(partHeader);
  t.falsy(container.querySelector('.part__openHeader'));
  fireEvent.click(partHeader[0]);
  t.truthy(container.querySelector('.part__openHeader'));
});
