import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    disabled: false,
    type: 'chapter',
    freerun: true,
    time: '2h',
    progress: '10%'
  })
};
