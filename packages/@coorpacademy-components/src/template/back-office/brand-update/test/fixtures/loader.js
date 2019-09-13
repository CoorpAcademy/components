import defaultsDeep from 'lodash/fp/defaultsDeep';
import Users from './manageusers';

const {props} = Users;

export default {
  props: defaultsDeep(props, {
    content: null
  })
};
