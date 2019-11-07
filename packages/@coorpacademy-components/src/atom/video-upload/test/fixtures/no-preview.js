import {omit} from 'lodash/fp';
import Desktop from './desktop';

export default {
  props: omit('previewLabel', Desktop.props)
};
