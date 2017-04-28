import defaultsDeep from 'lodash/fp/defaultsDeep';
import Two from './two';

const {props} = Two;

export default {
  props: defaultsDeep(props, {
    isOpen: true
  })
};
