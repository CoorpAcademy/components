import {defaultsDeep} from 'lodash/fp';
import Default from './podcast-no-background';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    backgroundImageUrl: 'https://static.coorpacademy.com/site/podcast.jpg',
    mode: 'cockpit'
  })
};
