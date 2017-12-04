import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    isTitle: false,
    description: 'lorem ipsum sigma beta gamma'
  })
};
