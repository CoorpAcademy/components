import defaultsDeep from 'lodash/fp/defaultsDeep';
import defaultSettings from './default';

const {props} = defaultSettings;

export default {
  props: defaultsDeep(props, {
    isPending: true,
    submitValue: 'Loading'
  })
};
