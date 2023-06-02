import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render} from '@testing-library/react';
import ExternalContentViewer from '..';
import podcastFixture from './fixtures/podcast';
import podcastYoutubeFixture from './fixtures/youtube-podcast';

browserEnv();

test('when the media is a mp3 podcast, it shouldnt display an iframe but only a the podcast tag', t => {
  t.plan(3);
  const {container} = render(<ExternalContentViewer {...podcastFixture.props} />);
  const podcast = container.querySelector('[data-name="external-content-podcast"]');
  t.truthy(podcast);
  const iframe = container.querySelector('[data-name="external-content-iframe"]');
  t.falsy(iframe);
  t.pass();
});

test('when the media is a youtube podcast, it should display an iframe and no podcast tag', t => {
  t.plan(3);
  const {container} = render(<ExternalContentViewer {...podcastYoutubeFixture.props} />);
  const podcast = container.querySelector('[data-name="external-content-podcast"]');
  t.falsy(podcast);
  const iframe = container.querySelector('[data-name="external-content-iframe"]');
  t.truthy(iframe);
  t.pass();
});
