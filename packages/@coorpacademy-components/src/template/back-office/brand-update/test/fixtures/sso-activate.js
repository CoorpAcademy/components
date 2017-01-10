import defaultsDeep from 'lodash/fp/defaultsDeep';
import SSO from './sso';

const {props} = SSO;

export default {
  props: defaultsDeep(props, {
    content: {
      groups: [{
        fields: [{
          type: 'switch',
          title: 'Desactivate',
          value: true
        }]
      }, {
        title: 'noop',
        disabled: false
      }, {
        title: 'noop',
        disabled: false
      }, {
        title: 'noop',
        disabled: false
      }]
    }
  })
};
