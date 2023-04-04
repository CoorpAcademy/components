import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import delay from 'delay';
import {set, replace} from 'lodash/fp';
import {fireEvent} from '@testing-library/react';
import {renderWithContext} from '../../../util/render-with-context';
import style from '../style.css';
import ExternalCourse from '..';
import fixture from './fixtures/article';
import fixturePodcastNoBackground from './fixtures/podcast-no-background';

browserEnv();

test('should call complete onClick', async t => {
  t.plan(2);

  const completeCtaStyle = '[data-testid="complete-button"]';

  const props = set(
    'complete.onClick',
    e => {
      t.pass();
      return e;
    },
    fixture.props
  );

  const {container} = renderWithContext(<ExternalCourse {...props} />);
  await delay(200);
  const cta = container.querySelector(completeCtaStyle);
  t.truthy(cta);
  fireEvent.click(cta, {defaultPrevented: true});
});

test('should call quit onClick', t => {
  t.plan(2);

  const quitCtaStyle = `.${replace(' ', '.', style.quitCta)}`;

  const props = set('quit.onClick', e => t.pass(), fixture.props);
  const {container} = renderWithContext(<ExternalCourse {...props} />);

  t.truthy(container.querySelector(quitCtaStyle));

  const cta = container.querySelector(quitCtaStyle);
  fireEvent.click(cta, {defaultPrevented: true});
});

test('should call warning onClick', t => {
  t.plan(2);

  const linkStyle = `.${replace(' ', '.', style.link)}`;

  const props = set('warning.onClick', e => t.pass(), fixturePodcastNoBackground.props);
  const {container} = renderWithContext(<ExternalCourse {...props} />);

  t.truthy(container.querySelector(linkStyle));
  const cta = container.querySelector(linkStyle);
  fireEvent.click(cta, {defaultPrevented: true});
});
