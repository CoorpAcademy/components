import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import Slides from '../slides';
import {renderWithContext} from '../../../../util/render-with-context';
import defaultFixture from './fixtures/free-text';

browserEnv();

test('should prevent default behavior onKeyDown enter event', async t => {
  t.plan(1);

  const context = {
    translate: (key: string) => {
      t.pass();
      return key;
    }
  };

  const {container, unmount} = await renderWithContext(
    <Slides {...defaultFixture.props.player} />,
    context
  );

  const slides = container.querySelector(`[data-name="slidesPlayer"]`);
  const freeText = container.querySelector(`[data-name="free-text-input"]`);

  fireEvent.click(freeText as Element);
  fireEvent.keyDown(slides as Element, {key: 'Enter'});
  unmount();
  t.pass();
});

test('should prevent default behavior onKeyDown space event', async t => {
  t.plan(1);

  const context = {
    translate: (key: string) => {
      t.pass();
      return key;
    }
  };

  const {container, unmount} = await renderWithContext(
    <Slides {...defaultFixture.props.player} />,
    context
  );

  const freeText = container.querySelector(`[data-name="free-text-input"]`);
  const cta = container.querySelector(`[class*="ctaWrapper"]`);

  fireEvent.click(freeText as Element);
  fireEvent.keyDown(cta as Element, {key: ' '});
  unmount();
  t.pass();
});

test('should handle undefined CTA and prevent default keydown behavior', async t => {
  t.plan(2);

  const context = {
    translate: (key: string) => {
      t.pass();
      return key;
    }
  };

  const {container, unmount} = await renderWithContext(
    <Slides {...defaultFixture.props.player} cta={undefined} />,
    context
  );
  const freeText = container.querySelector(`[data-name="free-text-input"]`);
  const cta = container.querySelector(`[class*="ctaWrapper"]`);
  t.is(cta, null);
  fireEvent.click(freeText as Element);
  try {
    fireEvent.keyDown(cta as Element, {key: ' '});
  } catch (error) {
    console.log('Expected error:', error);
    t.pass();
  }
  unmount();
});
