import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import BrandList from '..';
import Header from '../../../../organism/setup-header/test/fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

const brands = [
  {
    description: undefined,
    edit: 'Edit Platform',
    editHref: '/brands/digital',
    image:
      'https://api-staging.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/digital/raw/logo_coorpacademy-1487689750995.svg&h=300&w=300',
    see: 'See Platform',
    seeHref: 'http://digital.mooc:3000/sso/connect',
    title: 'digital'
  },
  {
    description: undefined,
    edit: 'Edit Platform',
    editHref: '/brands/chanel',
    image:
      'https://api-staging.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/digital/raw/logo_coorpacademy-1487689750995.svg&h=300&w=300',
    see: 'See Platform',
    seeHref: 'http://digital.mooc:3000/sso/connect',
    title: 'chanel'
  }
];

const create = {
  edit: '',
  editHref: ''
};

test('should only return the right brand', t => {
  t.plan(1);

  const searchValue = {
    value: 'digital',
    placeholder: 'search',
    onChange: value => t.is(value, 'digital')
  };
  const wrapper = mount(
    <BrandList brands={brands} search={searchValue} create={create} header={Header.props} />
  );
  const SearchBar = wrapper.find('div > .layout__contentWrapper').find('div > #search');
  SearchBar.simulate('input', {target: {value: 'digital'}});
});
