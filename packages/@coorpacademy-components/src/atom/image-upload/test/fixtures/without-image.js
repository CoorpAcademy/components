import omit from 'lodash/fp/omit';
import Desktop from './desktop';

const {props} = Desktop;

export default {
  props: omit('previewImage', props)
};
