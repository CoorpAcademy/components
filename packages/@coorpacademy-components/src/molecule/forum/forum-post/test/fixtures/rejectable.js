import defaultsDeep from 'lodash/fp/defaultsDeep';
import defaultPost from './default';

const {props} = defaultPost;

export default {
  props: defaultsDeep(props, {
    rejectable: true
  })
};
