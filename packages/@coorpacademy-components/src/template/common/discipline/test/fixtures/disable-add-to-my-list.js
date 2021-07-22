import {defaultsDeep} from 'lodash/fp';
import Default from './add-to-my-list';

const {props} = Default;
export default {
  props: defaultsDeep(props, {
    disableAddToMyList: true
  })
};
