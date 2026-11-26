import {labels, makeEditor, preview} from '../../../../test/helpers/population-edition';

export default {
  props: {model: makeEditor({preview: {...preview, loading: true, stale: true}}), labels}
};
