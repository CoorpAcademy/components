import {defaultsDeep} from 'lodash/fp';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    title: null,
    description: 'lorem ipsum sigma beta gamma'
  })
};
