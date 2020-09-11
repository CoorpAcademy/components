import {defaultsDeep} from 'lodash/fp';
import Default from './podcast-no-background';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    url: 'https://www.youtube.com/embed/nLMZd05FQKc',
    contentType: 'video/mp4'
  })
};
