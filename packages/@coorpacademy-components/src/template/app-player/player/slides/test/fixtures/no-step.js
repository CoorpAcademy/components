import {omit} from 'lodash/fp';
import FreeText from './free-text';

export default {
  props: omit(['step'], FreeText.props)
};
