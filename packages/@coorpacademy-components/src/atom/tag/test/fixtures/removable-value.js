import {noop} from 'lodash/fp';

export default {
  props: {
    label: 'Finance',
    type: 'info',
    removeAction: {label: 'Remove Finance', onClick: noop}
  }
};
