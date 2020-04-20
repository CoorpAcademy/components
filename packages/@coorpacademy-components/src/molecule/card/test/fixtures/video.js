import {defaultsDeep} from 'lodash/fp';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    disabled: false,
    type: 'video',
    image: null,
    progress: 0.1
  })
};
