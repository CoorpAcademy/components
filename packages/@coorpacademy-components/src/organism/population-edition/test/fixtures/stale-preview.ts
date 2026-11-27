import {noop} from 'lodash/fp';
import {labels, makeEditor, preview} from '../../../../test/helpers/population-edition';

export default {
  props: {
    model: makeEditor({
      preview: {
        ...preview,
        error: 'The preview could not be updated.',
        stale: true,
        retry: {label: 'Update preview', onClick: noop}
      }
    }),
    labels
  }
};
