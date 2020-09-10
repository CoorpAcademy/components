import {defaultsDeep} from 'lodash/fp';
import Default from './podcast-no-background';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    backgroundImageUrl:
      'https://i.pinimg.com/originals/31/bf/f7/31bff71dd4b79a76fb3f28a5219486f2.jpg'
  })
};
