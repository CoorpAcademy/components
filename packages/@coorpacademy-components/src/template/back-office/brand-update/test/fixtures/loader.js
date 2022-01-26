import {defaultsDeep} from 'lodash/fp';
import Users from './manageusers-edit';

const {props} = Users;

export default {
  props: defaultsDeep(props, {
    content: null,
    notifications: [
      {
        type: 'warning',
        message: 'Please wait'
      }
    ]
  })
};
