import defaultsDeep from 'lodash/fp/defaultsDeep';
import lookandfeel from './lookandfeel-modified';

const {props} = lookandfeel;

export default {
  props: defaultsDeep(props, {
    content: {
      isPending: true
    }
  })
};
