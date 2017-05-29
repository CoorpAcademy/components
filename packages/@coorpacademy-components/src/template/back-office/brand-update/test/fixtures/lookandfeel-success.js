import defaultsDeep from 'lodash/fp/defaultsDeep';
import lookandfeel from './lookandfeel';

const {props} = lookandfeel;

export default {
  props: defaultsDeep(props, {
    notifications: [
      {
        type: 'success',
        message: 'Your changes have been saved.',
        onClose: () => {}
      }
    ]
  })
};
