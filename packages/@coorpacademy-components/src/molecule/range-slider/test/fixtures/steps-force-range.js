import defaultsDeep from 'lodash/fp/defaultsDeep';
import Steps from './steps';

const {props} = Steps;

export default {
  props: defaultsDeep(props, {
    forceRange: true
  })
};
