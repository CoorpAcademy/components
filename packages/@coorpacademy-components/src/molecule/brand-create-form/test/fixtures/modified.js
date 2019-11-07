import {defaultsDeep} from 'lodash/fp';
import defaultSettings from './default';

const {props} = defaultSettings;

export default {
  props: defaultsDeep(props, {
    field: {
      value: 'pouet'
    },
    isModified: true
  })
};
