import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {omit} from 'lodash/fp';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Link from '../../../atom/link';
import ProgressionItem from '../progression-item';
import defaultFixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

const Wrapper = props =>
  ProgressionItem(props, {
    skin: {
      dark: 'black',
      primary: 'blue',
      white: 'white'
    }
  });

test('should call the onClick function with click on cta', t => {
  t.plan(3);

  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = {...defaultFixture.props.progressions[0], onClick: e => t.is(e, clickEvent)};
  const wrapper = shallow(<Wrapper {...props} />);

  wrapper.find(Link).first().simulate('click', clickEvent);
});

test('should not contain a link if progressionItem is disabled', t => {
  t.plan(1);

  const props = {...defaultFixture.props.progressions[3]};
  const wrapper = shallow(<Wrapper {...props} />);

  const element = wrapper.find(Link);
  t.is(element.length, 0);
});

test('should not crash if onClick is not sent', t => {
  t.plan(2);

  const props = omit(['onClick'], defaultFixture.props.progressions[1]);
  const wrapper = shallow(<Wrapper {...props} />);

  wrapper
    .find(Link)
    .first()
    .simulate('click', {
      preventDefault: () => {
        t.pass();
      },
      stopPropagation: () => {
        t.pass();
      }
    });
});
