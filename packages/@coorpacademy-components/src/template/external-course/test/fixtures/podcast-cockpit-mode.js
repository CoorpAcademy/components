import {defaultsDeep} from 'lodash/fp';
import Default from './podcast-no-background';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    backgroundImageUrl: 'https://static.coorpacademy.com/site/podcast.jpg',
    mode: 'cockpit',
    name: 'Weekly wash up',
    quit: {
      label: 'close',
      onClick: () => console.log('close')
    }
  })
};
