import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    certifiedAuthor: false,
    disabled: true,
    adaptiv: true,
    progress: 0
  })
};
