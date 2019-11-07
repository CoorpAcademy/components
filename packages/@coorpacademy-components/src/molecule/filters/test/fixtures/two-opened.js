import {defaultsDeep} from 'lodash/fp';
import Two from './two';

const {props} = Two;

export default {
  props: defaultsDeep(props, {
    openFilters: true
  })
};
