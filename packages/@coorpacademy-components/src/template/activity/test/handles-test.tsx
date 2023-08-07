import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mockTranslate} from '@coorpacademy/translate';
import {set} from 'lodash/fp';
import {fireEvent} from '@testing-library/react';
import Activity from '..';
import {renderWithContext} from '../../../util/render-with-context';
import defaultFixture from './fixtures/default';

browserEnv();

const context = {
  skin: {
    common: {
      primary: '#FF7043',
      light: '#FF7043',
      dark: '#FF7043'
    }
  },
  translate: mockTranslate
};

test('should call the onClick function with click on cta', t => {
  t.plan(2);
  const props = set('recommendation.onClick', () => t.pass(), defaultFixture.props);
  const {container} = renderWithContext(<Activity {...props} />, {context});
  const button = container.querySelector('[data-testid="button-link-recommendation"]') as Element;
  t.truthy(button);
  fireEvent.click(button);
});

test('should call onChange with the target value', t => {
  t.plan(2);
  const props = set('themeFilter.onChange', () => t.pass(), defaultFixture.props);
  const {container} = renderWithContext(<Activity {...props} />, {context});
  const select = container.querySelector("[aria-label='select aria-label']") as Element;
  t.truthy(select);
  fireEvent.change(select, {target: {value: 'foo'}});
});

test('should call the onClick function with click on engine tab', t => {
  t.plan(2);
  const props = set(['engines', '2', 'onClick'], () => t.pass(), defaultFixture.props);
  const {container} = renderWithContext(<Activity {...props} />, {context});
  const battleTab = container.querySelector('[data-engine="battle"]') as Element;
  t.truthy(battleTab);
  fireEvent.click(battleTab);
});

test('should not call the onClick function with click on engine tab if engine is disabled', t => {
  t.plan(2);
  const props = set(['engines', '2', 'onClick'], () => t.pass(), defaultFixture.props);
  const {container} = renderWithContext(<Activity {...props} />, {context});
  const battleTab = container.querySelector('[data-engine="battle"]') as Element;
  t.truthy(battleTab);
  fireEvent.click(battleTab);
});
