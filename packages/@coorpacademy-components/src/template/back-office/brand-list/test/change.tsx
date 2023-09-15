import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import BrandList from '..';
import Header from '../../../../organism/setup-header/test/fixtures/default';

browserEnv();

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
  t.plan(2);

  const searchValue = {
    value: 'digital',
    placeholder: 'search',
    onChange: (value: string) => t.is(value, 'digital')
  };
  const {container} = render(
    <BrandList brands={brands} search={searchValue} create={create} header={Header.props} />
  );

  const searchBar = container.querySelector('[data-name="search-input"]') as Element;
  t.truthy(searchBar);
  fireEvent.input(searchBar, {target: {value: 'digital'}});
});
