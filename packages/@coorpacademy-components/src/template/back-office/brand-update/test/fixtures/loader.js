import {defaultsDeep} from 'lodash/fp';
import Users from './manageusers';

const {props} = Users;

export default {
  props: defaultsDeep(props, {
    content: null
  })
};
