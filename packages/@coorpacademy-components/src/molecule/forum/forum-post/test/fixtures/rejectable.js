import defaultsDeep from 'lodash/fp/defaultsDeep';
import defaultPost from './default';

const {props} = defaultPost;

export default {
  props: defaultsDeep(props, {
    id: '12345356-6',
    rejectable: true
  })
};
