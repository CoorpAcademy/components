import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SearchForm from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should call onSubmit when user want to submit form', t => {
  t.plan(2);

  const onSubmit = () => t.pass();
  const wrapper = shallow(
    <SearchForm
      onSubmit={onSubmit}
      search={{placeholder: 'say your name', value: 'my name is murph'}}
    />
  );

  wrapper.find('form').simulate('submit', {preventDefault: () => t.pass()});
});
