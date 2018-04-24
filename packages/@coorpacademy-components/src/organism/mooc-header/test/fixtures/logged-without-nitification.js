import defaultsDeep from 'lodash/fp/defaultsDeep';
import Logged from './logged';

const {props} = Logged;

export default {
  props: defaultsDeep(props, {
    user: {
      notifications: 0
    }
  })
};
