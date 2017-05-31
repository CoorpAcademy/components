import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './one-handle-with-track';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    hideTrack: true,
    handle: {x: 200}
  })
};
