import omit from 'lodash/fp/omit';
import Desktop from './desktop';

const {props} = Desktop;

export default {
  props: omit('previewContent', props)
};
