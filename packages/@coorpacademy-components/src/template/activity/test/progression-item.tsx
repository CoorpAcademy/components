import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {omit} from 'lodash/fp';
import {fireEvent, render} from '@testing-library/react';
import ProgressionItem from '../progression-item';
import defaultFixture from './fixtures/default';

browserEnv();

test('should call the onClick function with click on cta', t => {
  t.plan(2);
  const props = {
    ...omit('ref', defaultFixture.props.progressions[0]),
    onClick: () => t.pass()
  };
  const {container} = render(<ProgressionItem {...props} />);

  const link = container.querySelector('a') as Element;
  t.truthy(link);
  fireEvent.click(link);
});

test('should not contain a link if progressionItem is disabled', t => {
  t.plan(1);

  const props = {...omit('ref', defaultFixture.props.progressions[3])};
  const {container} = render(<ProgressionItem {...props} />);

  const link = container.querySelector('a');
  t.falsy(link);
});

test('should not crash if onClick is not sent', t => {
  t.plan(1);

  const props = omit(['onClick', 'ref'], defaultFixture.props.progressions[1]);
  const {container} = render(<ProgressionItem {...props} />);

  const link = container.querySelector('a') as Element;
  t.truthy(link);
  fireEvent.click(link);
});
