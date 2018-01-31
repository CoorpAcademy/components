import defaultsDeep from 'lodash/fp/defaultsDeep';
import Users from './users';

const {props} = Users;

export default {
  props: defaultsDeep(props, {
    content: null
  })
};
