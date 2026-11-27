import {labels, makeEditor} from '../../../../test/helpers/population-edition';

export default {
  props: {
    model: makeEditor({
      feedback: {type: 'error', message: 'Your changes could not be saved. Your draft is kept.'}
    }),
    labels
  }
};
