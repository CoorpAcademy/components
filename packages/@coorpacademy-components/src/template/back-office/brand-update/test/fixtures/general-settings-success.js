import defaultsDeep from 'lodash/fp/defaultsDeep';
import generalSettings from './general-settings';

const {props} = generalSettings;

export default {
  props: defaultsDeep(props, {
    notifications: [{
      type: 'success',
      message: 'Your changes have been saved.',
      onClose: () => {}
    }]
  })
};
