import {defaultsDeep} from 'lodash/fp';
import defaultPost from './default';

const {props} = defaultPost;

export default {
  props: defaultsDeep(props, {
    id: '12345356-2',
    deleted: true
  })
};
