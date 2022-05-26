import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ExternalCourse from '..';
import podcastFixture from './fixtures/podcast';
import podcastYoutubeFixture from './fixtures/youtube-podcast';

browserEnv();
configure({adapter: new Adapter()});

test('when the media is a mp3 podcast, it shouldnt display an iframe but only a the podcast tag', t => {
  const wrapper = mount(<ExternalCourse {...podcastFixture.props} />);
  const podcast = wrapper.find('[data-name="external-content-podcast"]');
  const iframe = wrapper.find('[data-name="external-content-iframe"]');
  t.assert(podcast.exists());
  t.assert(!iframe.exists());
  t.pass();
});

test('when the media is a youtube podcast, it should display an iframe and no podcast tag', t => {
  const wrapper = mount(<ExternalCourse {...podcastYoutubeFixture.props} />);
  const podcast = wrapper.find('[data-name="external-content-podcast"]');
  const iframe = wrapper.find('[data-name="external-content-iframe"]');
  t.assert(!podcast.exists());
  t.assert(iframe.exists());
  t.pass();
});
