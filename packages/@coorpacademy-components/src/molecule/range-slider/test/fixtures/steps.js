import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    handle1: null,
    handle2: null,
    steps: [
      {
        label: 'plop',
        value: 1
      },
      {
        label: 'plup',
        value: 2
      },
      {
        label: 'plip',
        value: 3
      },
      {
        label: 'ploup',
        value: 4
      }
    ]
  })
};
