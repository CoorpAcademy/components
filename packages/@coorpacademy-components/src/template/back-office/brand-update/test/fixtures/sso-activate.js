import defaultsDeep from 'lodash/fp/defaultsDeep';
import SSO from './sso';

const {props} = SSO;

export default {
  props: defaultsDeep(props, {
    content: {
      groups: [{
        fields: [{
          title: 'Desactivate',
          value: true
        }]
      }, {
        disabled: false
      }, {
        disabled: false
      }, {
        disabled: false
      }]
    }
  })
};
