import {defaultsDeep} from 'lodash/fp';
import Default, {items} from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    items
  })
};
