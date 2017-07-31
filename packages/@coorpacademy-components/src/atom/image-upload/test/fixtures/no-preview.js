import omit from 'lodash/fp/omit';
import Desktop from './desktop';

export default {
  props: omit('previewLabel', Desktop.props)
};
