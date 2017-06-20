import React from 'react';
import Slide from '../../../../atom/slide';
import slideFixtures from '../../../../atom/slide/test/fixtures/default';

const slide = slideFixtures.props;

export default {
  children: [<Slide key="1" {...slide} />]
};
