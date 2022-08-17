import test from 'ava';
import React from 'react';
import {render} from '@testing-library/react-native';
import ImageBackground from '../index.native';

import {uri} from './fixtures/default';

const encodedUri =
  'https%3A%2F%2Fstatic.coorpacademy.com%2Fcontent%2FCoorpAcademy%2Fcontent-eyrolles%2Fcockpit-eyrolles%2Fdefault%2Fshutterstock_123603871-1-1545058448041.jpg';

test('should use original url', t => {
  const component = <ImageBackground source={{uri}} />;
  const {getByTestId} = render(component);
  const imageBackground = getByTestId('image-background');
  t.is(imageBackground.props.source.uri, `https:${uri}`);
});

test('should resize by width', t => {
  const component = <ImageBackground source={{uri}} style={{width: 200}} />;
  const {getByTestId} = render(component);
  const imageBackground = getByTestId('image-background');
  t.is(
    imageBackground.props.source.uri,
    `https://api.coorpacademy.com/api-service/medias?url=${encodedUri}&m=crop&q=90&w=400`
  );
});

test('should resize by height', t => {
  const component = <ImageBackground source={{uri}} style={{height: 200}} />;
  const {getByTestId} = render(component);
  const imageBackground = getByTestId('image-background');
  t.is(
    imageBackground.props.source.uri,
    `https://api.coorpacademy.com/api-service/medias?url=${encodedUri}&m=crop&q=90&h=400`
  );
});

test('should resize by width and height', t => {
  const component = <ImageBackground source={{uri}} style={{width: 200, height: 200}} />;
  const {getByTestId} = render(component);
  const imageBackground = getByTestId('image-background');
  t.is(
    imageBackground.props.source.uri,
    `https://api.coorpacademy.com/api-service/medias?url=${encodedUri}&m=crop&q=90&w=400&h=400`
  );
});

test('should resize by width and height in contain mode', t => {
  const component = (
    <ImageBackground source={{uri}} style={{width: 200, height: 200}} resizeMode="contain" />
  );
  const {getByTestId} = render(component);
  const imageBackground = getByTestId('image-background');
  t.is(
    imageBackground.props.source.uri,
    `https://api.coorpacademy.com/api-service/medias?url=${encodedUri}&m=contain&q=90&w=400&h=400`
  );
});
