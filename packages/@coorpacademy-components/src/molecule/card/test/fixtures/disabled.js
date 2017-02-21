import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    disabled: true,
    time: '2h',
    progress: '0%'
  })
};
