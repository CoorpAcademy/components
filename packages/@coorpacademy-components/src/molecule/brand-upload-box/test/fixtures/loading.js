import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    status: 'loading',
    progress: {
      value: 31,
      max: 51,
      desc: 'foobar'
    }
  })
};
