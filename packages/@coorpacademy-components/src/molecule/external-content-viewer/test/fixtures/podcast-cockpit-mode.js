import {defaultsDeep} from 'lodash/fp';
import Default from './podcast';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    mode: 'cockpit'
  })
};
