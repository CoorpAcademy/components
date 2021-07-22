import {defaultsDeep} from 'lodash/fp';
import Default from './default';

const {props} = Default;
export default {
  props: defaultsDeep(props, {
    disableShare: true,
    disableAddToMyList: true
  })
};
