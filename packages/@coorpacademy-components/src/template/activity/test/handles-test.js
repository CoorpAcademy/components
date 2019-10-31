import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import set from 'lodash/fp/set';
import Button from '../../../atom/button';
import Select from '../../../atom/select';
import defaultFixture from './fixtures/default';
import Activity from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should call the onClick function with click on cta', t => {
  t.plan(3);

  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = set('recommendation.onClick', e => t.is(e, clickEvent), defaultFixture.props);
  const wrapper = shallow(<Activity {...props} />);

  wrapper
    .find(Button)
    .first()
    .simulate('click', clickEvent);
});

test('should call onChange with the target value', t => {
  t.plan(1);

  const props = set(
    'themeFilter.onChange',
    ({target}) => t.is(target.value, 'foo'),
    defaultFixture.props
  );
  const wrapper = shallow(<Activity {...props} />);

  wrapper
    .find(Select)
    .first()
    .simulate('change', {
      target: {
        value: 'foo',
        selectedOptions: []
      }
    });
});
