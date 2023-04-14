import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {set} from 'lodash/fp';
import {fireEvent} from '@testing-library/react';
import {renderWithContext} from '../../../util/render-with-context';
import ExternalContentButton from '..';
import fixture from './fixtures/video';

browserEnv();

test('should call the onClick function', t => {
  t.plan(2);
  const props = set('onClick', () => t.pass(), fixture.props);
  const {container} = renderWithContext(<ExternalContentButton {...props} />);
  const wrapper = container.querySelector('[data-testid="external-content-button"]') as Element;
  t.truthy(wrapper);
  fireEvent.click(wrapper, {defaultPrevented: true});
});
