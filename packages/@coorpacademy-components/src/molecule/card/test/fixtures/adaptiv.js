import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    view: 'list',
    time: '20mn',
    adaptiv: true
  })
};
