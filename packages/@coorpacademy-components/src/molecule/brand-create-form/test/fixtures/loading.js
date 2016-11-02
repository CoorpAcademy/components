import defaultsDeep from 'lodash/fp/defaultsDeep';
import defaultSettings from './default';

const {props} = defaultSettings;

export default {
  props: defaultsDeep(props, {
    isModified: true,
    isPending: true,
    submitValue: 'Loading'
  })
};
