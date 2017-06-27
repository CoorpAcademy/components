import defaultsDeep from 'lodash/fp/defaultsDeep';
import video from './video';

export default defaultsDeep(video, {
  props: {
    selected: true
  }
});
