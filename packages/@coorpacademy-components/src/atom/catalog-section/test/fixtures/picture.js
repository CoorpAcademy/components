// @flow
import React, {type Children} from 'react';
import Picture from '../../../picture';
import {type Props} from '../../';

const props: Props = {
  title: 'Picture'
};

const children: Children = (
  <Picture
    src='https://unsplash.it/g/500/500?random'
  />
);

export default {
  props,
  children
};
