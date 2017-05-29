import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './catalog';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    loading: true
  })
};
