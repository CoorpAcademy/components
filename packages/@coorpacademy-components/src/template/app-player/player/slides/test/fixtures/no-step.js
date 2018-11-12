import omit from 'lodash/fp/omit';
import FreeText from './free-text';

export default {
  props: omit(['step'], FreeText.props)
};
