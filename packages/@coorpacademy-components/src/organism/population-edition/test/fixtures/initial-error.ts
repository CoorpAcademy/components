import {noop} from 'lodash/fp';
import {labels, makeEditor} from '../../../../test/helpers/population-edition';

export default {
  props: {
    model: makeEditor({
      loaded: false,
      loadError: {
        message: 'This population could not be loaded.',
        retry: {label: 'Try again', onClick: noop}
      }
    }),
    labels
  }
};
