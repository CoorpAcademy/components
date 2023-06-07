import {defaultsDeep} from 'lodash/fp';
import CmDefault from './cm-default';

const {props} = CmDefault;

export default {
  props: defaultsDeep(props, {
    error: true,
    errorMessage: 'Please select a value'
  })
};
