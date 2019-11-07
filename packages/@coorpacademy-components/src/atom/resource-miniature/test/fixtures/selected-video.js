import {defaultsDeep} from 'lodash/fp';
import video from './video';

export default defaultsDeep(video, {
  props: {
    selected: true
  }
});
