import defaultsDeep from 'lodash/fp/defaultsDeep';
import lookandfeel from './sso';

const {props} = lookandfeel;

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
