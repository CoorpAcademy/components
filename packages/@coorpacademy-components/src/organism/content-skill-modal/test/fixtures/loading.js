import {set} from 'lodash/fp';
import defaultProps from './default';

const props = defaultProps.props;

export default {
  props: set('contentList.isFetching', true, props)
};
