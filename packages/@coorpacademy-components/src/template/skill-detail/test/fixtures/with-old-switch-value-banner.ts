import {defaultProps} from './default';

export default {
  props: {
    ...defaultProps,
    bannerMicrolearning: {
      action: () => console.log('click on banner'),
      oldSwitchValue: true
    }
  }
};
