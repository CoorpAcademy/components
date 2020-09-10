import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExternalCourse from '..';
import podcastFixture from './fixtures/podcast';

browserEnv();
configure({adapter: new Adapter()});

test('when the media is a podcast, it shouldnt display an iframe but only a video tag', t => {
  const wrapper = mount(<ExternalCourse {...podcastFixture.props} />);
  const podcast = wrapper.find('[data-name="external-content-podcast"]');
  const iframe = wrapper.find('[data-name="external-content-iframe"]');
  t.assert(podcast.exists());
  t.assert(!iframe.exists());
  t.pass();
});
