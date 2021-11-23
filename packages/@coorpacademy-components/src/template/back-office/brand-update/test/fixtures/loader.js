import {defaultsDeep} from 'lodash/fp';
import Users from './default';

const {props} = Users;

export default {
  props: defaultsDeep(props, {
    content: null
  })
};
